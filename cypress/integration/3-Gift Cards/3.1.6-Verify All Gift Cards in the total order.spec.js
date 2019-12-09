describe('Verify all gift cards the order', () => {
    before(() => {
        cy.fixture('user.json').as('userData')
        cy.get('@userData').then((userData) => {
            cy.login(userData.username, userData.password)
        })
    })

    it('Verify that there are gift cards and that they are associated with the order', () => {
        cy.fixture('user.json').as('userData')
        cy.get('@userData').then((userData) => {
            cy.visit("https://thecornercloud.com/developers/index.php/gift_cards")
            cy.get('#giftcard_upc_f').type(userData.CardCode).wait(3000)
            cy.get('#LoadRecordsButton').click({force: true}).wait(3000)
            cy.contains(userData.CardCode)
            cy.visit("https://thecornercloud.com/developers/index.php/businesses#/purchase_orders")
            cy.get('#po-list-purchase-id-filter').type(userData.CardCode)
            cy.get('.btn-group > [type="submit"]').click({force: true}).wait(3000)
            cy.contains('[ng-show="!grid.appScope.isMobile"]', " Details").click({ force: true })
            cy.contains(userData.CardCode)
        })
    });
});