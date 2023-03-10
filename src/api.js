import { mockData } from './mock-data';
import axios from 'axios'; //a promise-based HTTP library that lets developers make requests to either their own or a third-party server to fetch data
import NProgress from 'nprogress'; //library to add progress bars when navigating between pages and waiting for data to load

/**
 *
 * @param {*} events:
 * This function takes an events array, then uses map to create a new array with only locations.
 * It will also remove all duplicates by creating another new array using the spread operator and spreading a Set.
 * The Set will remove all duplicates from the array.
 */
export const extractLocations = (events) => {
    var extractLocations = events.map((event) => event.location);
    var locations = [...new Set(extractLocations)];
    return locations;
};

//This function takes the accessToken you found and checks whether it’s a valid token or not. 
//If it’s not, then you follow the redirect logic and send the user to the Google Authorization screen.
export const checkToken = async (accessToken) => {
    const result = await fetch(
        `https://www.googleapis.com/oauth2/v1/tokeninfo?access_token=${accessToken}`
    )
        .then((res) => res.json())
        .catch((error) => error);

    return result;
};

export const getEvents = async () => {
    //When NProgress.start() is called, the progress bar is shown on the top of the page with a loading animation, indicating that a process is in progress. 
    NProgress.start();
    //check if the current URL of the web page starts with a specified string
    if (window.location.href.startsWith('http://localhost')) {
        NProgress.done();
        return mockData;
    }

    //Returns cashed data when user is offline
    if (!navigator.onLine) {
        const data = localStorage.getItem("lastEvents");
        NProgress.done();
        return data ? JSON.parse(data).events : [];
    }

    const token = await getAccessToken();

    if (token) {
        removeQuery();
        const url = `https://lhx0c9fqz2.execute-api.eu-central-1.amazonaws.com/dev/api/get-events/${token}`;
        const result = await axios.get(url);
        if (result.data) {
            var locations = extractLocations(result.data.events);
            localStorage.setItem("lastEvents", JSON.stringify(result.data));
            localStorage.setItem("locations", JSON.stringify(locations));
        }
        NProgress.done();
        return result.data.events;
    }
};

//get the access token
export const getAccessToken = async () => {
    const accessToken = localStorage.getItem('access_token');
    const tokenCheck = accessToken && (await checkToken(accessToken));

    if (!accessToken || tokenCheck.error) {
        await localStorage.removeItem("access_token");
        const searchParams = new URLSearchParams(window.location.search);
        const code = await searchParams.get("code");
        if (!code) {
            const results = await axios.get(
                "https://lhx0c9fqz2.execute-api.eu-central-1.amazonaws.com/dev/api/get-auth-url"
            );
            const { authUrl } = results.data;
            return (window.location.href = authUrl);
        }
        return code && getToken(code);
    }
    return accessToken;
}

//will remove the code from the URL once you’re finished with it
//check whether there’s a path, then build the URL with the current path (or build the URL without a path using window.history.pushState()).
const removeQuery = () => {
    if (window.history.pushState && window.location.pathname) {
        var newurl =
            window.location.protocol +
            "//" +
            window.location.host +
            window.location.pathname;
        window.history.pushState("", "", newurl);
    } else {
        newurl = window.location.protocol + "//" + window.location.host;
        window.history.pushState("", "", newurl);
    }
};

//When the token doesn’t exist or is invalid, you need to get a new one. To that end, you need to redirect your users to log in with Google so they can be redirected back to your site with the code. 
//The new token will be fetched in the code above using the function getToken.
//Will be called if the authorization code is present. 
const getToken = async (code) => {
    const encodeCode = encodeURIComponent(code);
    const { access_token } = await fetch(
        `https://lhx0c9fqz2.execute-api.eu-central-1.amazonaws.com/dev/api/token/${encodeCode}`
    )
        .then((res) => {
            return res.json();
        })
        .catch((error) => error);

    access_token && localStorage.setItem("access_token", access_token);

    return access_token;
};