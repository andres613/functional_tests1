describe('Upload gc from file with gc duplicated', () => {
    before(() => {
        cy.fixture('user.json').as('userData')
        cy.get('@userData').then((userData) => {
            cy.login(userData.Username, userData.password)
        })
    })

    beforeEach(() => {
        cy.Cookies();
    });

    it('upload csv with gc duplicated ', () => {
        cy.visit('/gift_cards/create');
        cy.upload_file('giftcards/gcDuplicate.csv', 'csv', '#file_batch[type=file]')
        cy.contains('Process File').scrollIntoView().wait(300);
        cy.get('[value="Process File"]')
            .contains('Process File')
            .click({ force: true })
    })

    it('check alert when Gift card code 56156158165 already exists in system', () => {
        cy.get('.alert.alert-danger')
            .contains("Gift card code 56156158165 already exists in system").should('exist').should('be.visible')
    });

});