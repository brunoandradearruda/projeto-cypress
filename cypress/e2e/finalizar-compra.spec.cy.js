import ticketsPage from "../Pages/Tickets/TicketsPage";

describe("Teste de Login e Finalização de Compra", () => {
    it("Deve realizar login e finalizar a compra com sucesso", () => {
        // Realizar login
        cy.visit('https://automationexercise.com/login');
        cy.get('[data-qa="login-email"]').type('brunoarruda7777@gmail.com.br');
        cy.get('[data-qa="login-password"]').type('123456');
        cy.get('[data-qa="login-button"]').click();
        
    });


    it("TC02 - Adiciona itens ao carrinho", () => {

        it("Deve adicionar um produto ao carrinho de compras"), () => 
        
            // Localize o botão "Add to Cart" do terceiro produto na lista e clique nele
            cy.get('.features_items > :nth-child(3) > .product-image-wrapper > .single-products > .productinfo > .btn').click();
    
    
        });
    
});
