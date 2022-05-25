describe('Blog app', function () {
  beforeEach(function () {
    cy.request('POST', 'http://localhost:3003/api/testing/reset');
    cy.visit('http://localhost:3000');
    const user = {
      username: 'user2',
      name: 'user2',
      password: 'user2'
    };
    cy.request('POST', 'http://localhost:3003/api/users/', user);
    cy.visit('http://localhost:3000');
  });

  it('front page can be opened', function () {
    cy.contains('log in to application');
  });

  it('Login form is shown', function () {
    cy.contains('username');
    cy.contains('password');
    cy.contains('login');
  });
  describe('Login', function () {
    it('succeeds with correct credentials', function () {
      cy.contains('login').click();
      cy.get('#username').type('user2');
      cy.get('#password').type('user2');
      cy.get('#login-button').click();
      cy.contains('user2 logged-in');
    });

    it('fails with wrong credentials', function () {
      cy.contains('login').click();
      cy.get('#username').type('user2');
      cy.get('#password').type('wrongP4ssW0rd');
      cy.get('#login-button').click();

      cy.get('#error')
        .should('contain', 'wrong username or password')
        .and('have.css', 'color', 'rgb(255, 0, 0)')
        .and('have.css', 'border', '4px solid rgb(255, 0, 0)');

      cy.get('html').should('not.contain', 'user2 logged-in');
    });
  });
});
