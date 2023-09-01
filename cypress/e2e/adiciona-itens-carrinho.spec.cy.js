
describe("Teste de Adição de Produto ao Carrinho", () => {
    beforeEach(() => {
        cy.visit('https://automationexercise.com/products');
    });


    it("Deve realizar uma pesquisa por um produto existente e específico", () => {
        const productToSearch = 'dress';

        cy.get('#search_product').type(productToSearch);
        cy.get('#submit_search').click();
        cy.get(':nth-child(3) > .product-image-wrapper > .single-products > .productinfo > .btn').click()

    });


    it.only("Deve adicionar um produto da pagína inicial de produtos ao carrinho de compras", () => {
        cy.get(':nth-child(4) > .product-image-wrapper > .single-products > .productinfo > .btn').click()

    });
});