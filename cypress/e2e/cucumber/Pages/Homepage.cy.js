// import { isEmpty } from "cypress/types/lodash";

class HomePage {
    enterURL() {
        cy.visit('http://localhost:3000')
    };
    renderChecker(){
        cy.get('.app-container').should("exist");
        cy.window().then((win) => {
            expect(win.console.error).to.have.length(0);
          });
    }
    inputFiller(){
        cy.get('#text-input').type('hello')
    }
    submitClicker(){
        cy.get('form > button').click()
    }
    deleteClicker(){
        this.inputFiller();
        this.submitClicker();
        cy.get('.note-container > button').click()
    }


    emptyChecker() {
        cy.get('html body div div div:nth-child(1) ul').should('not.be.visible');
      }
      
      
    stateChecker(){
        cy.get('.list-container').then(($listContainer) =>{
            if ($listContainer.length > 0){
                cy.get('.list-container').should('be.visible');
            }else{
                cy.get('.list-container').should('be.empty');
            }
            
        })
    }

}

const homePage = new HomePage();
export default homePage;

