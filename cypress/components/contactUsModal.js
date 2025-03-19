class ContactUsModal {

//Selectors
firstNameInput ='[id="firstname-5e204c31-ede2-4976-a096-6919a081b2df"]';
lastNameInput ='[id="lastname-5e204c31-ede2-4976-a096-6919a081b2df"]';
emailInput ='[id="email-5e204c31-ede2-4976-a096-6919a081b2df"]';
companyNameInput ='[id="company-5e204c31-ede2-4976-a096-6919a081b2df"]';
contactTypeInput = '[id="contact_type-5e204c31-ede2-4976-a096-6919a081b2df"]'
messageInput='[id="message-5e204c31-ede2-4976-a096-6919a081b2df"]'
submitButton='[class="actions"] [class="hs-button primary large"]' 
contactUsModalContainer = '[class="modal-content hubspot-form"]'
closeModalButton = '.modal-scroller > .icon-x'

//Alert Messages Selectors
firstNameMessageAlert = 'div[class="input"]:has([name="firstname"]) + ul li label'
lastNameMessageAlert = 'div[class="input"]:has([name="lastname"]) + ul li label'
emailMessageAlert = 'div[class="input"]:has([name="email"]) + ul li label'
companyNameMessageAlert = 'div[class="input"]:has([name="company"]) + ul li label'
contactTypeMessageAlert = 'div[class="input"]:has([name="contact_type"]) + ul li label'
descriptionMessageAlert = 'div[class="input"]:has([name="message"]) + ul li label'

// Variable to store expected value
expectedFirstNameValue = "Test name";


// Method to check if the modal is displayed
isContactUsModalContainerVisible() {
  cy.get(this.contactUsModalContainer,{ timeout: 10000 }) // Wait up to 10s)
  .should('be.visible');
}

// Method to check if the modal is not displayed
isContactUsModalContainerNotVisible() {
  cy.get(this.contactUsModalContainer, { timeout: 15000 })
    .should('not.be.visible'); // Ensures the modal is hidden
}

 // Method to check if the modal is visible
 isContactUsModalElementsVisible() {
  cy.get(this.firstNameInput,{ timeout: 10000 }).invoke('show') // Wait up to 10s)
  .should('be.visible');
  cy.get(this.emailInput,{ timeout: 10000 }).invoke('show') // Wait up to 10s)
  .should('be.visible');
  cy.get(this.submitButton,{ timeout: 10000 }).scrollIntoView()
  .should('not.be.disabled')
  .should('be.visible')
}

// Method to fill out the form
fillContactForm(name, email, message) {
  cy.get(this.nameInput).type(name);
  cy.get(this.emailInput).type(email);
  cy.get(this.messageInput).type(message);
}

// Method to submit the form
clickSubmitFormButton() {
  cy.get(this.submitButton,{ timeout: 50000 }).click();
}

// Method to close the form
clickCloseContactUsFormButton() {
  cy.get(this.closeModalButton,{ timeout: 10000 }).click();
}

 // Method to check if the first Name message Alert is displayed
 isAllAlertMessagesDisplayed() {
  cy.get(this.firstNameMessageAlert, { timeout: 50000 }).scrollIntoView().should('be.visible');  // Assert that the error message is visible
  cy.get(this.lastNameMessageAlert, { timeout: 50000 }).scrollIntoView().should('be.visible');  // Assert that the error message is visible
  cy.get(this.emailMessageAlert, { timeout: 50000 }).scrollIntoView().should('be.visible');  // Assert that the error message is visible
  cy.get(this.companyNameMessageAlert, { timeout: 50000 }).scrollIntoView().should('be.visible');  // Assert that the error message is visible
  cy.get(this.contactTypeMessageAlert, { timeout: 50000 }).scrollIntoView().should('be.visible');  // Assert that the error message is visible
  cy.get(this.descriptionMessageAlert, { timeout: 50000 }).scrollIntoView().should('be.visible');  // Assert that the error message is visible
}

typeFirstNameValue() {
  cy.get(this.firstNameInput).type(this.expectedFirstNameValue); // Type the desired name
}

isAllAlertMessagesDisplayedExceptName() {
  // Ensure last name, email, company name, contact type, and description show error messages
  cy.get(this.lastNameMessageAlert, { timeout: 5000 }).scrollIntoView().should('be.visible');  
  cy.get(this.emailMessageAlert, { timeout: 5000 }).scrollIntoView().should('be.visible');  
  cy.get(this.companyNameMessageAlert, { timeout: 5000 }).scrollIntoView().should('be.visible');  
  cy.get(this.contactTypeMessageAlert, { timeout: 5000 }).scrollIntoView().should('be.visible');  
  cy.get(this.descriptionMessageAlert, { timeout: 5000 }).scrollIntoView().should('be.visible');  

  // Ensure the first name field does NOT have an error message
  cy.get(this.firstNameMessageAlert).should('not.exist');  
}

// Method to validate if firstNameInput retains the entered value
validateFirstNameValue() {
  cy.get(this.firstNameInput).should('have.value', this.expectedFirstNameValue);
}

}



export default new ContactUsModal();