import ticketsPage from "../Pages/Tickets/TicketsPage";


describe("Teste de Pesquisa de Produtos", () => {
    beforeEach(() => {
        cy.visit('https://automationexercise.com/products');
    });

    it.only("Deve realizar uma pesquisa por um produto existente", () => {
        const productToSearch = 'dress';

        cy.get('#search_product').type(productToSearch);
        cy.get('#submit_search').click();

    });

    it("Deve exibir mensagem de erro ao buscar por um produto inexistente", () => {
        const nonexistentProduct = 'nonexistent';

        cy.get('#search_product').type(nonexistentProduct);
        cy.get('#submit_search').click();

       
    });
});
