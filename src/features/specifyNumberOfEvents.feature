Feature: Specify the number of events

Scenario: When user hasn’t specified a number, 32 is the default number
Given the user didn’t specify the number of events
When the user opens the app
Then the user should see 32 events

Scenario: User can change the number of events they want to see
Given the user opened the main page
When the user specifies the number of events they want to see
Then the user should see the specified number of events