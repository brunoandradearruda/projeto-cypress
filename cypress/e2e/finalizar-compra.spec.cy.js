import ticketsPage from "../Pages/Tickets/TicketsPage";

describe("Teste de Login e Finalização de Compra", () => {
  it("TC01 - Deve realizar login e finalizar a compra com sucesso", () => {
    // Realizar login
    cy.visit("https://automationexercise.com/login");


    const login = 'brunoarruda7777@gmail.com.br'
    const password = '123456'
    cy.get('[data-qa="login-email"]').type(login);
    cy.get('[data-qa="login-password"]').type(password);

    cy.get('[data-qa="login-button"]').click();
    cy.get('.features_items > :nth-child(3) > .product-image-wrapper > .single-products > .productinfo > .btn').click().wait(2000);
    cy.get('.modal-footer > .btn').click().wait(2000);
    cy.visit("https://automationexercise.com/view_cart");
    //Segue para a página de confirmação do endereço
    cy.get('.col-sm-6 > .btn').click();
    //Segue para a página de confirmação de pagamento com cartão
    cy.get(':nth-child(7) > .btn').click();
 
    //Preenchimento dos dados do Cartão de Crédito
    const name = 'bruno';
    const carNumber = '2020303055552222';
    const cvc = '222';
    const expiryMonth ='05';
    const expiryYear = '2025';
    
    cy.get('[name="name_on_card"]').type(name);
    cy.get('[name="card_number"]').type(carNumber);
    cy.get('[name="cvc"]').type(cvc);
    cy.get('[name="expiry_month"]').type(expiryMonth);
    cy.get('[name="expiry_year"]').type(expiryYear);
    cy.get('[id="submit"]').click();
  });
});
