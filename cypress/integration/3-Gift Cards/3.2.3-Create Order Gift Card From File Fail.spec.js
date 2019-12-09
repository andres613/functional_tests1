describe('Create GC order for gc from file Fail', () => {
    before(() => {
        cy.fixture('user.json').as('userData')
        cy.get('@userData').then((userData) => {
            cy.login(userData.Username, userData.password)
        })
    })

    beforeEach(() => {
        cy.Cookies();
    });

    it('Create GC Order from file fail ', () => {
        
        cy.CreateGiftCardOrder('Gift Card Order', 'Buying Group',
            'Best Buy', 'Best Buy',
            'Buying Group', '5555',
            'Testing', '1000', '500')

    });
});