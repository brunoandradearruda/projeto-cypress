describe ("Backend Test", () => {

    it("Requisição HTTP - GET", () => {
        cy.request('https://httpbin.org/get')
            .should(function(response) {
                const { status, statusText } = response;
                expect(status).to.equal(200)
                expect(statusText).to.equal('OK')
            })
    })

    it("Requisição HTTP - POST", () => {
        cy.request({
            method: 'POST',
            url: 'https://httpbin.org/post',
            body: {
                name:'Rafael',
                age: '30'
            }
        }).should(function(response) {
            const { status, statusText } = response;
            expect(status).to.equal(200)
            expect(statusText).to.equal('OK')
        })
    })

    it("Requisição HTTP - POST 2", () => {
        cy.request({
            method: 'POST',
            url: 'https://httpbin.org/post',
            body: {
                name:'Rafael',
                age: '30'
            }
        }).its('body').should('not.be.empty');
    })
})