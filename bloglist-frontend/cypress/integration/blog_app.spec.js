describe('Blog app', function () {
  beforeEach(function () {
    cy.visit('http://localhost:3000');
  });
  it('front page can be opened', function () {
    cy.contains('log in to application');
  });
  it('user can log in', function () {
    cy.contains('login').click();
    cy.get('#username').type('user');
    cy.get('#password').type('userpassword');
    cy.get('#login-button').click();
  });
});
