class TruckPage {
    // Selectors for elements on the truck page
    filterAll = '[value=ALL]'; 
    filterOnTime = '[value=ONTIME]';
    filterAtRisk = '[value=ATRISK]'; 
    filterLate = '[value=LATE]'; 
  
    // Methods to validate the presence of elements
    verifyFilterAllIsVisible() {
      cy.get(this.filterAll).should('be.visible');
    }
  
    verifyFilterOnTimeIsVisible() {
      cy.get(this.filterOnTime).should('be.visible');
    }
  
    verifyFilterAtRiskIsVisible() {
      cy.get(this.filterAtRisk).should('be.visible');
    }

    verifyFilterLateIsVisible() {
        cy.get(this.filterLate).should('be.visible');
      }
  
    // Method to validate all elements at once
    verifyTruckPageElements() {
      this.verifyFilterAllIsVisible();
      this.verifyFilterOnTimeIsVisible();
      this.verifyFilterAtRiskIsVisible();
      this.verifyFilterLateIsVisible();
    }
  }
  
  export const truckPage = new TruckPage();
  