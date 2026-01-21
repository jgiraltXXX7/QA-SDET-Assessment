/// <reference types="cypress" />

describe("SauceDemo - Login (TS)", () => {
  it("logs in successfully and lands on inventory page", () => {
    cy.visit("https://www.saucedemo.com/");

    cy.get("#user-name").should("be.visible").type("standard_user");
    cy.get("#password").should("be.visible").type("secret_sauce");

    cy.get("#login-button").should("be.enabled").click();

    cy.url().should("include", "/inventory");
    cy.get(".title").should("have.text", "Products");
  });
});
