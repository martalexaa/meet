<h1>Meet App</h1>
<br>
<p>A serverless, progressive web application (PWA) with React using a test-driven development (TDD) technique. The application uses the Google Calendar API to fetch upcoming events. This Meet App will allow users to search for a city and get a list of events hosted in that city.</p>
<p><strong>Serverless</strong> and <strong>PWAs</strong> have grown in popularity over the last few years, and they’re both considered to be the future of web development. By combining these two concepts, this app will not only work as a normal web application, but it will also reap the benefits of both serverless architecture and PWAs.</p>
<p>Serverless technology offers several benefits that make it a good choice for my application:</p>
<ul>
<li>Reduced management overhead: With serverless computing, developers don't have to worry about managing servers or infrastructure. This means that they can focus on writing code and building features instead of worrying about the underlying infrastructure.</li>
<li>Scalability: Serverless technology allows applications to easily scale based on demand. This means that an application can handle a sudden influx of traffic without having to worry about provisioning additional servers or managing load balancers.</li>
<li>Cost-effective: Serverless computing allows organizations to pay only for the computing resources they actually use. This means that they can reduce their infrastructure costs and optimize their spending based on their actual usage.</li>
<li>Faster development and deployment: With serverless computing, developers can write and deploy code more quickly. This is because they don't have to worry about the underlying infrastructure, and they can easily integrate with other cloud services.</li>
<li>Improved reliability: Serverless technology is designed to be fault-tolerant and resilient. This means that applications can be more reliable and have higher availability, as the cloud provider handles many aspects of the underlying infrastructure.</li>
</ul>
<p>For this app, I’ll be using a <strong>TDD (Test-driven development)</strong> approach, where I write tests before writing the actual functionality for the app in code. Writing tests forces the developer to focus on the requirements of their application before jumping into the code. TDD relies on the repetition of a very short development cycle, allowing the developer to get immediate feedback and deliver high-quality code.</p>
<p>I'll also add two graphs to this app, which will make it more visually appealing and allow the users to more easily draw conclusions from the data.</p>

<br>

<h1>FEATURE 1: FILTER EVENTS BY CITY</h1>
<p>As a user I should be able to “filter events by city” so that I can see the list of events that take place in that city</p>
<h3>Scenario 1: When user hasn’t searched for a city, show upcoming events from all cities.</h3>
<ul>
<li>Given: the user hasn't searched for a city</li>
<li>When: the user opens the main page</li>
<li>Then: show upcoming events from all cities</li>
</ul>
<h3>Scenario 2: User should see a list of suggestions when they search for a city.</h3>
<ul>
<li>Given: the user opened the main page</li>
<li>When: the user search for a city</li>
<li>Then: the user sees a list of suggested cities</li>
</ul>
<h3>Scenario 3: User can select a city from the suggested list.</h3>
<ul>
<li>Given: the user searched for a city</li>
<li>When: the user sees the suggestions</li>
<li>Then: the user can select one of the suggested cities</li>
</ul>

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

<br> 

<h2>FEATURE 3: SPECIFY NUMBER OF EVENTS</h2>
<p>User story: As a user I should be able to see 32 events by default, but also be able to change the number of events I want to see, so that I can see the desired number of events.</p>

<h3>Scenario 1: When user hasn’t specified a number, 32 is the default number</h3>
<ul>
<li>Given: the user didn’t specify the number of events</li>
<li>When: the user opens the main page</li>
<li>Then: the user should see 32 events</li>
</ul>

<h3>Scenario 2: User can change the number of events they want to see</h3>
<ul>
<li>Given: the user opened the main page</li>
<li>When: the user specifies the number of events they want to see</li>
<li>Then: the user should see the specified number of events</li>
</ul>
  
<br> 

<h2>FEATURE 4: USE THE APP WHEN OFFLINE</h2>
<p>User story: As a user I should be able to see the website when I have no internet connection, so that I can still access information about events I loaded earlier when I was online.</p>
  
<h3>Scenario 1: Show cached data when there’s no internet connection</h3>
<ul>
<li>Given: the user visited the app while they had internet connection, so there is cached data on their device</li>
<li>When: the user does not have internet connection and opens the main page</li>
<li>Then: the user should see the app displaying the cached data</li>
</ul>

<h3>Scenario 2: Show error when user changes the settings (city, time range)</h3>
<ul>
<li>Given: the user’s device does not have internet connection, and the main page is opened</li>
<li>When: the user changes any of the settings</li>
<li>Then: an error message shows up</li>
</ul>

<br> 

<h2>FEATURE 5: DATA VISUALIZATION</h2>
<p>User story: As a user I should be able to  see a chart with the number of upcoming events in each city, so that I can easily understand which city is the busiest. 
Scenario 1: Show a chart with the number of upcoming events in each city<p/>
<ul>
<li>Given: events are stored in the app’s database</li>
<li>When: the user opens the main page</li>
<li>Then: a chart with the number of upcoming events in each city is displayed</li>
</ul>
