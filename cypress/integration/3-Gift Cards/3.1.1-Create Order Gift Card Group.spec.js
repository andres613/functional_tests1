describe('Create Order', () => {
    before(() => {
        cy.fixture('user.json').as('userData')
        cy.get('@userData').then((userData) => {
            cy.login(userData.username, userData.password)
        })
    })

    it('Create GC Order ', () => {
        cy.get('@userData').then((userData) => {
            cy.CreateGiftCardOrder(
                userData.OrderType,
                userData.RegularSupplier,
                userData.VendorSupplier_Store,
                userData.VendorSupplier_Store,
                userData.RegularSupplier,
                userData.OrderNumber,
                userData.tags,
                userData.amount,
                userData.amount
            )
        })
    });
});