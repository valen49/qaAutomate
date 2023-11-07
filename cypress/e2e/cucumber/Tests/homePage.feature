Feature: I want to check if I can create and delete notes

Background: Navigate to the Website
Given I navigate to the Website

Scenario: The QA wants to check if the system is rendered without errors
Then the system displays the web without errors

Scenario: The notes state loads with no entries
Then the notes state is loaded without entries


Scenario: Check when an input value is added and the submit button is pressed that the note gets added to the `notes` state and that the note is rendered in the `ul`
When I enter hello as a note
And I click the submit button
Then the system adds the note
And the note is rendered in the ul

Scenario:Check when the delete button is pressed that note is deleted from the `notes` list and that it is no longer present in the `ul`
When I click the delete button
Then the note is deleted from the notes list
And is no longer present in the ul
