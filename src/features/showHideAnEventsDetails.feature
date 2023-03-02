Feature: Show and Hide Events Details

Scenario: An event element is collapsed by default
Given the user didn’t expand an event to see its details
When the user opens the app
Then the event element should be collapsed

Scenario: User can expand an event to see its details
Given the user opened the app
When the user expands an event to see its details
Then the event details should be displayed

Scenario: User can collapse an event to hide its details
Given the user expanded an event to see its details
When the user collapses an event to hide its details
Then the event details should be no longer visible