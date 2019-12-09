describe('Upload gc from file with gc higher value 10 percent', () => {
    before(() => {
        cy.fixture('user.json').as('userData')
        cy.get('@userData').then((userData) => {
            cy.login(userData.Username, userData.password)
        })
    })

    beforeEach(() => {
        cy.Cookies();
    });

    it('upload csv having a gc with value higher than 10 percent', () => {

        cy.visit('/gift_cards/create')
        cy.upload_file('giftcards/gcHigherValueof10Percent.csv', 'csv',
            '#file_batch[type=file]')
        cy.contains('Process File').scrollIntoView()
            .wait(300)
        cy.get('[value="Process File"]').contains('Process File').click({ force: true })
    })

    it("check alert when Gift card order 5555 doesn't have enough balance to add $300.00", () => {
        cy.get('.alert.alert-danger')
            .contains("Gift card order 5555 doesn't have enough balance to add $300.00")
            .should('exist').should('be.visible')
    });

});