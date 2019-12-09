describe('Upload gc from file with gc without pin code', () => {
    before(() => {
        cy.fixture('user.json').as('userData')
        cy.get('@userData').then((userData) => {
            cy.login(userData.Username, userData.password)
        })
    })

    beforeEach(() => {
        cy.Cookies();
    });

    it('upload csv with gc without pin code ', () => {
        cy.visit('/gift_cards/create')
        cy.upload_file('giftcards/gcWithoutPin.csv','csv','#file_batch[type=file]')
        cy.contains('Process File').scrollIntoView().wait(300)
        cy.get('[value="Process File"]').contains('Process File').click({force:true})
        
    })

    it('check alert when importing gc without pin code', () => {
        
        cy.get('.alert.alert-danger').contains("Gift card pin is required").should('exist').should('be.visible')
    });

});