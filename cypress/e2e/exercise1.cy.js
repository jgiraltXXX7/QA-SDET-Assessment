import contactUsModal from "../components/contactUsModal";
import homePage from "../pages/homePage";

describe("Qubika Website Navigation", () => {
  
  it("Nav Home page and Contact Us Validations ", () => {
    homePage.visitPage();
  //Step 1: Validate the URL
  cy.url().should("eq", "https://qubika.com/");
  //Step 2: Verify that the Qubika logo is visible
    homePage.verifyLogoIsVisible();
  //Step 3: Click Contact Us Button
    homePage.clickContactUsButton(); 
  //Step 4: Validate contact form is displayed:
    contactUsModal.isContactUsModalContainerVisible();
  //Step 5: Validate that modal elements appears
    contactUsModal.isContactUsModalElementsVisible(); // Validate modal is visible
  //Step 6: Click ‘Submit’ button without filling any field
    contactUsModal.clickSubmitFormButton();  
  //Step 7: Validate that all mandatory fields have an error message
    contactUsModal.isAllAlertMessagesDisplayed();
  //Step 8: Write ‘Test name’ on the ‘Name’ field
    contactUsModal.typeFirstNameValue();
  //Step 9: Validate that all mandatory fields have an error message except ‘Name’ field
    contactUsModal.isAllAlertMessagesDisplayedExceptName();
  //Step 10: Close ‘Contact us’ form
    contactUsModal.clickCloseContactUsFormButton();
  //Step 11: Validate contact form is not displayed:
    contactUsModal.isContactUsModalContainerNotVisible();
  //Step 12: Click Contact Us Button
    homePage.clickContactUsButton();
  //Step 13: Validate that the form is displayed with  Name field completed and the rest with an error message
    contactUsModal.validateFirstNameValue()
    contactUsModal.isAllAlertMessagesDisplayedExceptName()
  });
});