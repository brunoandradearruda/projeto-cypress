import ticketsPage from "../Pages/Tickets/TicketsPage";

describe ("Cadastro e Login", () => {

    beforeEach (() => cy.visit('https://automationexercise.com/signup'));

    it.only("TC01 - Registro de Usuário", () => {

        const signupName = 'bruno';
        const email = 'brunoarruda3@gmail.com.br';
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

    // it("TC02 - Cadastro de usuário", () => {

        
    //     const name = 'bruno';
    //     const email = 'brunoarruda@gmail.com';
    //     const password = "12345";
    //     const FirstName = "bruno";
    //     const LastName = "arruda";
    //     const address = "wall street";
    //     const state = 'NY'
    //     const city = "New York"
    //     const zipCode = '86556'
    //     const mobileNumber = '839888855555';

    //     cy.get('name').type(name);
    //     cy.get('email').type(email);
    //     cy.get('password').type(password);
    //     cy.get('country').select('United States')

        
    //     cy.get('#ticket-quantity').select("2");
    //     cy.get('#first-name').type(firstName);
    //     cy.get('#last-name').type(lastName);
    //     cy.get('#email').type(email);
    //     cy.get('#vip').check();
    //     cy.get('#publication').check();
    //     cy.get('#requests').type(textFull, { delay: 0});
    //     cy.get('.agreement p').should('contain', `I, ${fullName}, wish to buy`);
    //     cy.get('#agree').check();
    //     cy.get('#signature').type(fullName, { delay: 0});
    //     cy.get("button[type='submit']").click();
    //     cy.get('.success').should('be.visible');
    //     cy.get('.success').should('have.text', 'Ticket(s) successfully ordered.');

    // });


    // it("Comprar Tickets com sucesso PO", () => {
    //     cy.fixture("user.json").then((user) => {
    //         ticketsPage.FirstName.type(user.firstName);
    //         ticketsPage.LastName.type(user.lastName);
    //         ticketsPage.Email.type(user.email);
    //     })
        
    //     ticketsPage.Agree.check();

    //     ticketsPage.SubmitButton.click();

    //     ticketsPage.Success.should('be.visible');
    //     ticketsPage.Success.should('have.text', 'Ticket(s) successfully ordered.');
    // });
});