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
  describe('When logged in', function () {
    beforeEach(function () {
      cy.login({ username: 'user2', password: 'user2' });
    });

    it('A blog can be created', function () {
      cy.contains('Blog Form').click();
      cy.get('.titleInput').type('a blog created by cypress');
      cy.get('.authorInput').type('Cypress');
      cy.get('.urlInput').type('http//www.newBlog.com');
      cy.get('.submitBtn').click();
      cy.contains('a blog created by cypress');
      cy.contains('Cypress');
      cy.contains('view');
      cy.contains('Remove');
    });
  });
});
