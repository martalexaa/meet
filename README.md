# meet
<h1>Meet App</h1>
<br>
<h2>FEATURE 2: SHOW/HIDE AN EVENT'S DETAILS</h2>
<p>User story: As a user I should be able to expand and collapse an event element so that I can see and hide event details.</p>
<h3>Scenario 1: An event element is collapsed by default</h3>
<ul>
<li>Given: the user didn’t expand an event to see its details</li>
<li>When: the user opens the main page</li>
<li>Then: the event element should be collapsed</li>
</ul>
<h3>Scenario 2: User can expand an event to see its details</h3>
<ul>
<li>Given: the user opened the main page</li>
<li>When: the user expands an event to see its details</li>
<li>Then: the event details should be displayed</li>
</ul>
<h3>Scenario 3: User can collapse an event to hide its details</h3>
<ul>
<li>Given: the user expanded an event to see its details</li>
<li>When: the user collapses an event to hide its details</li>
<li>Then: the event details should be no longer visible</li>
</ul>
<h2>FEATURE 3: SPECIFY NUMBER OF EVENTS</h2>
User story: As a user I should be able to see 32 events by default, but also be able to change the number of events I want to see, so that I can see the desired number of events. 
Scenario 1: When user hasn’t specified a number, 32 is the default number
<ul>
Given: the user didn’t specify the number of events 
When: the user opens the main page
Then: the user should see 32 events
</ul>
Scenario 2: User can change the number of events they want to see
Given: the user opened the main page
When: the user specifies the number of events they want to see
Then: the user should see the specified number of events
FEATURE 4: USE THE APP WHEN OFFLINE
User story: As a user I should be able to see the website when I have no internet connection, so that I can still access information about events I loaded earlier when I was online. 
Scenario 1: Show cached data when there’s no internet connection
Given: the user visited the app while they had internet connection, so there is cached data on their device
When: the user does not have internet connection and opens the main page
Then: the user should see the app displaying the cached data
Scenario 2: Show error when user changes the settings (city, time range)
Given: the user’s device does not have internet connection, and the main page is opened
When: the user changes any of the settings
Then: an error message shows up
FEATURE 5: DATA VISUALIZATION
User story: As a user I should be able to  see a chart with the number of upcoming events in each city, so that I can easily understand which city is the busiest. 
Scenario 1: Show a chart with the number of upcoming events in each city
Given: events are stored in the app’s database
When: the user opens the main page
Then: a chart with the number of upcoming events in each city is displayed
