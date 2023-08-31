import ticketsPage from "../Pages/Tickets/TicketsPage";

describe("Teste de Login e Finalização de Compra", () => {
    it("Deve realizar login e finalizar a compra com sucesso", () => {
        // Realizar login
        cy.visit('https://automationexercise.com/login');
        cy.get('[data-qa="login-email"]').type('brunoarruda7777@gmail.com.br');
        cy.get('[data-qa="login-password"]').type('123456');
        cy.get('[data-qa="login-button"]').click();

        // Verificações/assertions para garantir que o login foi realizado com sucesso
        cy.url().should('include', '/products'); // Verifica se a URL mudou para a página de produtos

        // Acessar a página de checkout
        cy.visit('https://automationexercise.com/checkout');

        // Verificações/assertions para garantir que a compra foi finalizada com sucesso
        cy.url().should('include', '/purchase-confirmation'); // Verifica se a URL mudou para a página de confirmação de compra
        cy.contains('.confirm-box', 'Thank you for your purchase!').should('be.visible'); // Verifica se a mensagem de agradecimento é exibida
    });
});
