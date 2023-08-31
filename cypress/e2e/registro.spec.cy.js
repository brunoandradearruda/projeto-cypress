import ticketsPage from "../Pages/Tickets/TicketsPage";

describe ("REGISTRO DE USUÁRIO", () => {

    beforeEach (() => cy.visit('https://automationexercise.com/signup'));

    it.only("TC01 - Registro de Usuário", () => {

        const signupName = 'bruno';
        const email = 'brunoarruda'+Math.floor(Math.random() * 80)+'@gmail.com.br';
        cy.get("[data-qa='signup-name']").type(signupName);
        cy.get("[data-qa='signup-email']").type(email);
        cy.get('[data-qa="signup-button"]').click();

        const password = '123456'
        const firstName = 'Bruno'
        const lastName = 'Arruda'
        const address = 'Wall Street'
        const state = 'NY'
        const city = 'New York'
        const zipCode = '88888'
        const mobileNumber = '525566666'

        cy.get('#id_gender1').click()
        cy.get('[data-qa="password"]').type(password);
        cy.get('[data-qa="days"]').select("22");
        cy.get('[data-qa="months"]').select ("August");
        cy.get('[data-qa="years"]').select ("1989");

        cy.get('[data-qa="first_name"]').type(firstName);
        cy.get('[data-qa="last_name"]').type(lastName);
        cy.get('[data-qa="address"]').type(address);
        cy.get('[data-qa="country"]').select ("United States");
        cy.get('[data-qa="state"]').type(state);
        cy.get('[data-qa="city"]').type(city);
        cy.get('[data-qa="zipcode"]').type(zipCode);
        cy.get('[data-qa="mobile_number"]').type(mobileNumber)

        cy.get('[data-qa="create-account"]').click();

    });



    it("TC02 - Login", () => {

   
    const email = 'brunoarruda7778@gmail.com.br';
    const password = '123456';

    cy.get('[data-qa="login-email"]').type(email);
    cy.get('[data-qa="login-password"]').type(password);
    cy.get('[data-qa="login-button"]').click();





    });
});