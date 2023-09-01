import ticketsPage from "../Pages/Tickets/TicketsPage";

describe("TC01 - Teste de Login e Finalização de Compra", () => {
  it.only("Deve realizar login e finalizar a compra com sucesso", () => {
    // Realizar login
    cy.visit("https://automationexercise.com/login");
    cy.get('[data-qa="login-email"]').type("brunoarruda7777@gmail.com.br");
    cy.get('[data-qa="login-password"]').type("123456");
    cy.get('[data-qa="login-button"]').click();
  });

  it("TC02 - Adiciona itens ao carrinho", () => {
    // Localize o botão "Add to Cart" do terceiro produto na lista e clique nele
    cy.get('.features_items > :nth-child(3) > .product-image-wrapper > .single-products > .productinfo > .btn').click();
  });

  it("TC03 - Exibir página do carrinho", () => {
    // Localize o botão "Add to Cart" do terceiro produto na lista e clique nele
    cy.get(".shop-menu > .nav > :nth-child(3) > a").click();
  });

  it("TC04 - Página do Checkout", () => {
    // Localize o botão "Add to Cart" do terceiro produto na lista e clique nele
    cy.get(".shop-menu > .nav > :nth-child(3) > a").click(); //Botão Proceed to Checkout
  });

  it("TC05 - Página de confirmação do endereço de entrega", () => {
    // Localize o botão "Add to Cart" do terceiro produto na lista e clique nele
    cy.get(":nth-child(7) > .btn").click(); //Botão Place holder
  });

  it("TC06 - Página de confirmação do endereço de entrega", () => {
    cy.get('[data-qa="name-on-card"]').type("Bruno");
    cy.get('[data-qa="card-number"]').type("2020303055552222");
    cy.get('[data-qa="cvc"]').type("222");
    cy.get('[data-qa="cvc"]').type("2025");
    cy.get('[data-qa="expiry-year"]').type("2023");
    cy.get('[data-qa="pay-button"]').click();
  });
});
