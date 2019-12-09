describe('Add Gift Cards to order Completed', () => {
    before(() => {
        cy.fixture('user.json').as('userData')
        cy.get('@userData').then((userData) => {
            cy.login(userData.username, userData.password)
        })
    })

    it('Create several gift cards to complete an order ', () => {
        cy.visit("https://thecornercloud.com/developers/index.php/gift_cards/create")
        cy.get('.col-sm-4 > .control-group > .controls > #s2id_supplier_id > .select2-choice').click().wait(1000)
        cy.get('@userData').then((userData) => {
            cy.contains('#select2-results-9 li div', userData.RegularSupplier).click()
            cy.get('.col-sm-4 > .control-group > .controls > #s2id_businesses_id > .select2-choice').click().wait(1000)
            cy.contains('#select2-results-10 li div', userData.VendorSupplier_Store).click()
            cy.get('.col-sm-4 > #giftcard_orders_id').type(userData.OrderNumber)
            cy.get('#giftcard_code').type(userData.CardCode)
            cy.get('.col-sm-4 > #giftcard_amount').type(userData.amount)
            cy.get('#giftcard_pin').type(userData.Pin)
            cy.get(':nth-child(9) > .col-sm-4 > .btn-primary').click()
        })
    });
});