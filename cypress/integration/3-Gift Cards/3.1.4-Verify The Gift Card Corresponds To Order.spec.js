describe('Serach Gift Card', () => {
    before(() => {
        cy.fixture('user.json').as('userData')
        cy.get('@userData').then((userData) => {
            cy.login(userData.username, userData.password)
        })
    })

    it('verify the purchase order and the total value charged and that corresponds to the value of the gift card', () => {
        cy.get('[data-cy=sidebar-toggle]').click()
        cy.get('.nav-main > :nth-child(7) > :nth-child(1)').click()
        cy.get('.nav-expanded > .nav > :nth-child(1) > a').click().wait(2000)
        cy.fixture('user.json').as('userData')
        cy.get('@userData').then((userData) => {
            cy.get('#po-list-purchase-id-filter').type(userData.OrderNumber)
            cy.get('.btn-group > [type="submit"]').click({ force: true }).wait(2000)
            cy.contains('[ng-show="!grid.appScope.isMobile"]', " Details").click({ force: true })
        })
    });
});