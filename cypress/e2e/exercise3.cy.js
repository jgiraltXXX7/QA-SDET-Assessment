import loginPage from '../pages/loginPage';
import categoryPage from '../pages/categoryPage';

describe('E2E - API Test for Qubika Sports Club', () => {
  let userData;

  before(() => {
    // Step 1: Create a user via API using the correct request body from Swagger
    cy.request('POST', 'https://api.club-administration.qa.qubika.com/api/auth/register', {
      email: `qauser${Date.now()}@example.com`, // Unique email
      password: "Password123!",
      roles: ["ROLE_ADMIN"] // Role required by the API
    }).then((response) => {
      expect(response.status).to.eq(201);
      userData = response.body; // Store user info
      cy.writeFile('cypress/fixtures/user.json', userData);
    });
});

it('Login and performs category creation', () => {
  cy.visit('https://club-administration.qa.qubika.com/#/auth/login');

  // Step 2: Validate login page elements
  loginPage.validateLoginPage();

  // Step 3: Login with API-created user
  cy.fixture('user.json').then((user) => {
    loginPage.login(user.email, "Password123!");
  });

  // Step 4: Validate successful login
  loginPage.validateLoginSuccess();

  //  Step 5: Navigate to Categories Page
  categoryPage.navigateToCategory();

  //  Step 6: Create a Category
   const categoryName = "Test Category";
   categoryPage.createCategory(categoryName);
   categoryPage.validateSuccesfullyMessageCategorycreated();

  // // Step 7: Create a sub category and validate it is displayed in the Categories list.
  // To do : UI bug pending to be resolved before to validate 
});

});

