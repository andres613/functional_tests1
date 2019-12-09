describe('Upload gc from file ', () => {
    before(() => {
        cy.fixture('user.json').as('userData')
        cy.get('@userData').then((userData) => {
            cy.login(userData.Username, userData.password)
        })
    })

    beforeEach(() => {
        cy.Cookies();
    });

    it('upload csv ', () => {
        cy.visit('/gift_cards/create')
        cy.upload_file('giftcards/gc.csv',
            'csv',
            '#file_batch[type=file]')
        cy.contains('Process File')
            .scrollIntoView().wait(300)
        cy.get('[value="Process File"]').contains('Process File').click({ force: true })

    })

    it('check alert The file was Processed completely', () => {
        cy.get('.alert.alert-success').should('exist').should('be.visible')
    });

});