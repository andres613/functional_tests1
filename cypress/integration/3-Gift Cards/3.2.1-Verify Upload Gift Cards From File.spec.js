describe('Verify upload gc from file ', () => {
    before(() => {
        cy.fixture('user.json').as('userData')
        cy.get('@userData').then((userData) => {
            cy.login(userData.Username, userData.password)
        })
    })

    beforeEach(() => {
        cy.Cookies();
    });

    it('verify Gif Cards', () => {
        cy.visit('/gift_cards')
        cy.get('.jtable-bottom-panel').scrollIntoView()
        cy.VerifyGiftCard('[data-record-key="9864364987937736"]')
        cy.VerifyGiftCard('[data-record-key="3617506137117744"]')
        cy.VerifyGiftCard('[data-record-key="8090502838604153"]')
        cy.VerifyGiftCard('[data-record-key="8041993837570772"]')
    })

});