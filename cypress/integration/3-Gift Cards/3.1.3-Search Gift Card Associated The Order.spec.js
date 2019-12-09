describe('Search Gift Card', () => {
    before(() => {
        cy.fixture('user.json').as('userData')
        cy.get('@userData').then((userData) => {
            cy.login(userData.username, userData.password)
        })
    })
    
    it('Search gift card associated the order', () => {
        cy.get('[data-cy=sidebar-toggle]').click()
        cy.get('.nav-main > :nth-child(2) > :nth-child(1)').click()
        cy.get('.nav-expanded > .nav > :nth-child(1) > a').click().wait(2000);
        
        cy.get('@userData').then((userData) => {
            cy.get('#giftcard_orders_id_filter').type(userData.OrderNumber)
            cy.get('#LoadRecordsButton').click({force: true})
        })
    });
});