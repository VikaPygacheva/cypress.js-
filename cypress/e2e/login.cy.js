
describe('Автотесты для формы авторизации', function () {
    
     it('Проверка на позитивный кейс авторизации', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#loginButton').should('be.disabled');
        cy.get('#mail').type('german@dolnikov.ru');
        cy.get('#loginButton').should('be.disabled');
        cy.get('#pass').type('iLoveqastudio1');
        cy.get('#loginButton').should('be.enabled');
        cy.get('#loginButton').click();
        cy.get('#messageHeader').contains('Авторизация прошла успешно');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible')
         })
    it('Проверка логики восстановления пароля', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#forgotEmailButton').should('be.visible');
        cy.get('#forgotEmailButton').should('be.enabled');
        cy.get('#forgotEmailButton').click();
        cy.get('#forgotForm > .header').contains('Восстановите пароль');
        cy.get('#restoreEmailButton').should('be.enabled');
        cy.get('#mailForgot').type('master@dungeon.com');
        cy.get('#restoreEmailButton').click();
        cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail')
        cy.get('#exitMessageButton > .exitIcon').should('be.visible')
         })
    it('Проверка на негативный кейс авторизации c не правильным паролем', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#loginButton').should('be.disabled');
        cy.get('#mail').type('german@dolnikov.ru');
        cy.get('#loginButton').should('be.disabled');
        cy.get('#pass').type('ilovebigmac');
        cy.get('#loginButton').should('be.enabled');
        cy.get('#loginButton').click();
        cy.get('#messageHeader').contains('Такого логина или пароля нет')
        cy.get('#exitMessageButton > .exitIcon').should('be.visible')
         })
    it('Проверка на негативный кейс авторизации c не правильным логином', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#loginButton').should('be.disabled');
        cy.get('#mail').type('master@dungeon.com');
        cy.get('#loginButton').should('be.disabled');
        cy.get('#pass').type('iLoveqastudio1');
        cy.get('#loginButton').should('be.enabled');
        cy.get('#loginButton').click();
        cy.get('#messageHeader').contains('Такого логина или пароля нет')
        cy.get('#exitMessageButton > .exitIcon').should('be.visible')
         })
    it('Проверка на негативный кейс валидации', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#loginButton').should('be.disabled');
        cy.get('#mail').type('germandolnikov.ru');
        cy.get('#loginButton').should('be.disabled');
        cy.get('#pass').type('iLoveqastudio1');
        cy.get('#loginButton').should('be.enabled');
        cy.get('#loginButton').click();
        cy.get('#messageHeader').contains('Нужно исправить проблему валидации')
        cy.get('#exitMessageButton > .exitIcon').should('be.visible')
         })
    it('Проверка на позитивный кейс авторизации', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#loginButton').should('be.disabled');
        cy.get('#mail').type('GerMan@Dolnikov.ru');
        cy.get('#loginButton').should('be.disabled');
        cy.get('#pass').type('iLoveqastudio1');
        cy.get('#loginButton').should('be.enabled');
        cy.get('#loginButton').click();
        cy.get('#messageHeader').contains('Авторизация прошла успешно');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible')
         })
})