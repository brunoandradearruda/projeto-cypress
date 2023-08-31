import ticketsPage from "../Pages/Tickets/TicketsPage";

describe ("PESQUISA E VISUALIZAÇÃO DE PRODUTOS", () => {

    beforeEach (() => cy.visit('https://automationexercise.com/products'));


    it("Deve realizar uma pesquisa por um produto existente", () => {
        const productToSearch = 'Tshirt';

        cy.get('#search_product').type(productToSearch);
        cy.get('#submit_search').click();

        // Verificações/assertions para garantir que a pesquisa foi realizada corretamente
        cy.url().should('include', '/products?query=' + productToSearch); // Verifica se a URL contém o termo de pesquisa

        // Verifica se os resultados da pesquisa são exibidos corretamente
        cy.get('.product-item').should('have.length.gt', 0); // Verifica se há resultados de pesquisa exibidos.
        cy.contains('.product-title', productToSearch).should('be.visible'); // Verifica se o nome do produto pesquisado é exibido.
    });

    it.only("Deve exibir mensagem de erro ao buscar por um produto inexistente", () => {
        const nonexistentProduct = 'nonexistent';

        cy.get('#search_product').type(nonexistentProduct);
        cy.get('#submit_search').click();

    
    });
});