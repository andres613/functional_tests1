describe('login', function () {
    before(() => {
        cy.fixture('user.json').as('userData')
    })
    it('User login', ()=> {
        cy.get('@userData').then((userData) => {
            cy.login(userData.username, userData.password)
        })
    })
})