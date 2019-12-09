describe("Upload gc from file with an order id that doesn't exist", () => {
    before(() => {
        cy.fixture('user.json').as('userData')
        cy.get('@userData').then((userData) => {
            cy.login(userData.Username, userData.password)
        })
    })

    beforeEach(() => {
        cy.Cookies();
    });

    it("upload csv having a gc with an order id that doesn't exist", () => {
        cy.visit('/gift_cards/create');
        cy.upload_file('giftcards/gcNotExistOrderId.csv', 'csv', '#file_batch[type=file]')
        cy.contains('Process File')
            .scrollIntoView().wait(300)
        cy.get('[value="Process File"]').contains('Process File').click({ force: true })
    })

    it('check alert when Gift card order 654848465 does not exist', () => {
        cy.get('.alert.alert-danger').contains("Gift card order 654848465 does not exists")
            .should('exist')
            .should('be.visible')
    });

});