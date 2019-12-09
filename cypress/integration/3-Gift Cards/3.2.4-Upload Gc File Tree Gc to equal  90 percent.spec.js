describe('Upload gc from file', () => {
    before(() => {
        cy.fixture('user.json').as('userData')
        cy.get('@userData').then((userData) => {
            cy.login(userData.Username, userData.password)
        })
    })

    beforeEach(() => {
        cy.Cookies();
    });

    it('upload csv file', () => {
        cy.visit('/gift_cards/create')
        cy.upload_file('giftcards/3gc.csv', 'csv', '#file_batch[type=file]');
        cy.contains('Process File').scrollIntoView().wait(300);
        cy.get('[value="Process File"]').contains('Process File')
            .click({ force: true })

    })

    it('check alert when importing 3 gc file  with 90% in the order', () => {
        cy.
            contains('                        The file was  Processed completely                    ').should('exist').should('be.visible')
    });

});