describe('Verify Gif Card In The Order ', () => {
    before(() => {
        cy.fixture('user.json').as('userData')
        cy.get('@userData').then((userData) => {
            cy.login(userData.Username, userData.password)
        })
    })

    beforeEach(() => {
        cy.Cookies();
    });


    it('Load Order', () => {
        cy.visit('/businesses#/purchase_orders')
        cy.get('[href="#/purchase_orders/details/197016"]').click({force:true})
        cy.contains('Total:').scrollIntoView()
        cy.contains('9864364987937736').should('exist').should('be.visible')
        cy.contains('3617506137117744').should('exist').should('be.visible')
        cy.contains('8090502838604153').should('exist').should('be.visible')
        cy.contains('8041993837570772').should('exist').should('be.visible')
        cy.contains('6545648946848644').should('exist').should('be.visible')
        cy.get('.text-left.ng-binding').contains('1,500.00').should('exist').should('be.visible')
        cy.get('[title="Order Received"]').should('be.visible').should('exist')
    });

    

});