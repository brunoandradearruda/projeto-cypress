import ticketsPage from "../Pages/Tickets/TicketsPage";


describe("Teste de Pesquisa de Produtos", () => {
    beforeEach(() => {
        cy.visit('https://automationexercise.com/products');
    });

    it.only("Deve realizar uma pesquisa por um produto existente", () => {
        const productToSearch = 'dress';

        cy.get('#search_product').type(productToSearch);
        cy.get('#submit_search').click();

        // Verificações/assertions para garantir que a pesquisa foi realizada corretamente
        // cy.url().should('include', '/products?query=' + productToSearch); // Verifica se a URL contém o termo de pesquisa

        // // Verifica se os resultados da pesquisa são exibidos corretamente
        // cy.get('.product-item').should('have.length.gt', 0); // Verifica se há resultados de pesquisa exibidos.
        // cy.contains('.product-title', productToSearch).should('be.visible'); // Verifica se o nome do produto pesquisado é exibido.
    });

    it("Deve exibir mensagem de erro ao buscar por um produto inexistente", () => {
        const nonexistentProduct = 'nonexistent';

        cy.get('#search_product').type(nonexistentProduct);
        cy.get('#submit_search').click();

        // // Verificações/assertions para garantir que a mensagem de erro seja exibida
        // cy.contains('.alert', 'No products were found for your search').should('be.visible'); // Verifica se a mensagem de erro é exibida
    });
});
