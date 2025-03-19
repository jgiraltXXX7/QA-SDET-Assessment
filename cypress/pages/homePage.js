import ContactUsModal from '../components/contactUsModal';

class HomePage {

  //Locators
  qubikaLogo ='a[class="logo"]';
  contactUsButton = 'a.button.rounded.big-btn.contact-us-modal-open'
  

  visitPage() {
    cy.visit("https://www.qubika.com");
  }

  // Method to verify that the Qubika logo is visible
  verifyLogoIsVisible() {
    return cy.get(this.qubikaLogo,{ timeout: 10000 }).should('be.visible');
  }

  // Method to click Contact Us Button
  clickContactUsButton() {
    return cy.get(this.contactUsButton,{ timeout: 10000 }).eq(1).scrollIntoView().click();
  }

  //Validate contact form is displayed, validating:
  getContactUsModalContainer() {
    return ContactUsModal.isContactUsModalVisible(); // This checks if the modal is displayed
  }
}

export default new HomePage();