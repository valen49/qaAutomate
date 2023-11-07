/// <reference types="cypress" />

import {Given,When,Then,And} from "cypress-cucumber-preprocessor/steps"
import homePage from "../Pages/Homepage.cy"


Given ('I navigate to the Website', () =>{
    homePage.enterURL();
})

Then ('the system displays the web without errors', () =>{
    homePage.renderChecker();
})

Then ('The notes state loads with no entries', () =>{
    homePage.emptyChecker();
})


When ('I enter hello as a note', () =>{
    homePage.inputFiller();
})

And ('I click the submit button', () =>{
    homePage.submitClicker();
})

Then ('the system adds the note', () =>{
})

And ('the note is rendered in the ul', () =>{
    homePage.stateChecker()
})

When ('I click the delete button', () =>{
    homePage.deleteClicker();
})

Then ('the note is deleted from the notes list', () =>{
    homePage.stateChecker();
})

And ('is no longer present in the ul', () =>{
    
})

