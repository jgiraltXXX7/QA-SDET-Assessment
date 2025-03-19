import contactUsModal from "../components/contactUsModal";
import homePage from "../pages/homePage";

describe("Qubika Website Navigation", () => {
  it("Exersice 1", () => {
    homePage.visitPage();
  // Validate the URL
  cy.url().should("eq", "https://qubika.com/");
  // Verify that the Qubika logo is visible
    homePage.verifyLogoIsVisible();
  // Click Contact Us Button
    homePage.clickContactUsButton(); 
  //Validate contact form is displayed:
    contactUsModal.isContactUsModalContainerVisible();
  // Validate that modal elements appears
    contactUsModal.isContactUsModalElementsVisible(); // Validate modal is visible
  // Click ‘Submit’ button without filling any field
    contactUsModal.clickSubmitFormButton();  
  // Validate that all mandatory fields have an error message
    contactUsModal.isAllAlertMessagesDisplayed();
  //Write ‘Test name’ on the ‘Name’ field
    contactUsModal.typeFirstNameValue();
  //Validate that all mandatory fields have an error message except ‘Name’ field
    contactUsModal.isAllAlertMessagesDisplayedExceptName();
  //Close ‘Contact us’ form
    contactUsModal.clickCloseContactUsFormButton();
  //Validate contact form is not displayed:
    contactUsModal.isContactUsModalContainerNotVisible();
  // Click Contact Us Button
    homePage.clickContactUsButton();
  //Validate that the form is displayed with  Name field completed and the rest with an error message
    contactUsModal.validateFirstNameValue()
    contactUsModal.isAllAlertMessagesDisplayedExceptName()
  });
});