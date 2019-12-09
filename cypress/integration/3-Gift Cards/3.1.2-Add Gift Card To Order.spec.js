describe('Create Gift Card', () => {
    before(() => {
        cy.fixture('user.json').as('userData')
        cy.get('@userData').then((userData) => {
            cy.login(userData.username, userData.password)
        })
    })
    
    it('Create and add gift card to order', () => {
        cy.get('@userData').then((userData) => {
            cy.CreateGiftCard(
                userData.RegularSupplier,
                userData.VendorSupplier_Store,
                userData.OrderNumber,
                userData.OrderNumber,
                userData.Amount,
                userData.Amount
            )
        })
    });
});