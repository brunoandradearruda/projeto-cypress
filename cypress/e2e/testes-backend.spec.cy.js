describe("Backend Test", () => {
  it("Buscar Produtos - GET", () => {
    cy.request(" https://automationexercise.com/api/productsList").should(
      function (response) {
        const { status, statusText } = response;
        expect(status).to.equal(200);
        expect(statusText).to.equal("OK");
      }
    );
  });

  it("Buscar detalhes da conta do usuário por e-mail - GET", () => {
    cy.request("https://automationexercise.com/api/getUserDetailByEmail").should(
      (response) => {
        const { status, statusText } = response;
        expect(status).to.equal(200);
        expect(statusText).to.equal("OK");
      }
    );
  });
});
