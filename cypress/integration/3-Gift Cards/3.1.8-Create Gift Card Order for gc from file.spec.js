describe('Create GC order for gc from file', () => {
    before(() => {
        cy.fixture('user.json').as('userData')
        cy.get('@userData').then((userData) => {
            cy.login(userData.username, userData.password)
        })
    })

    it('Create GC Order ', () => {
        cy.CreateGiftCardOrder(
            'Gift Card Order',
            'Buying Group',
            'Best Buy',
            'Best Buy',
            'Buying Group',
            '44444',
            'Testing',
            '1500',
            '500'
        )
    });
});