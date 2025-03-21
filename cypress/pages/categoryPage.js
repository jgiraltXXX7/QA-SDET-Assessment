class CategoryPage {

  //Selectors
  catgorynameInputField = '[id="input-username"]'
  aceptarButton ='button[type="submit"]'
  succesfullyToastmessage ='[aria-label="Tipo de categoría adicionada satisfactoriamente"]'

  navigateToCategory() {
    cy.get('nav').contains(' Tipos de Categorias ').click();
    cy.url().should('include', '/category-type');
  }

  createCategory(name) {
    cy.contains('button',' Adicionar').click();
    cy.get(this.catgorynameInputField).type(name);
    cy.get(this.aceptarButton).click();
  }
  
  validateSuccesfullyMessageCategorycreated() {
    cy.get(this.succesfullyToastmessage).should('be.visible');
  }
}

export default new CategoryPage();