describe('Upload gc from file with gc without Amount', () => {
    before(() => {
        cy.fixture('user.json').as('userData')
        cy.get('@userData').then((userData) => {
            cy.login(userData.Username, userData.password)
        })
    })

    beforeEach(() => {
        cy.Cookies();
    });

    it('upload csv with gc without Amount ', () => {
        cy.visit('/gift_cards/create')
        cy.upload_file('giftcards/gcWithoutAmount.csv', 'csv', '#file_batch[type=file]')
        cy.contains('Process File')
            .scrollIntoView()
            .wait(300)
        cy.get('[value="Process File"]').contains('Process File').click({ force: true })

    })

    it('check alert when importing gc without Amount', () => {
        cy.get('.alert.alert-danger').contains("Amount should be greater than zero").should('exist').should('be.visible')
    });

});