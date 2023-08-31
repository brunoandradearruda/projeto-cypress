
describe("Teste de Adição de Produto ao Carrinho", () => {
    beforeEach(() => {
        cy.visit('https://automationexercise.com/products');
    });


    it.only("Deve realizar uma pesquisa por um produto existente", () => {
        const productToSearch = 'dress';

        cy.get('#search_product').type(productToSearch);
        cy.get('#submit_search').click();
        cy.get(':nth-child(3) > .product-image-wrapper > .single-products > .productinfo > .btn').click()

    });


    it("Deve adicionar um produto ao carrinho de compras", () => {
        // Localize o botão "Add to Cart" do terceiro produto na lista e clique nele
        cy.get(':nth-child(3) > .product-image-wrapper > .single-products > .productinfo > .btn').click()

    });
});