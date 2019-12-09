describe.skip('Complete process add tracking', () => {
    before(() => {
        cy.clearCookies();
        cy.fixture('user.json').as('userData');
        cy.get('@userData').then((userData) => {
            cy.login(userData.username, userData.password)
        })
    });

    after(() => {
        cy.clearCookies();
    });

    beforeEach(() => {
        cy.Cookies();
    });

    it.skip('should add new tracking to an order', () => {
        cy.visit('businesses#/tracked_orders');
        cy.get('.content-body').should("exist").should("be.visible");
        cy.get('[ng-click="addTracking()"]').contains('Add Tracking Number').should('exist').should('be.visible')
            .click({force: true});
        cy.get('form#add_tracking_order_form').should('exist').should('be.visible');
        cy.get('[form="add_tracking_order_form"]').contains('Save').should("be.disabled");
        cy.get('#modal_tracking_number').focus().type('test_tracking');
        cy.get('form#add_tracking_order_form [aria-label="Choose carrier activate"]').click();
        cy.get('input[aria-label="Choose carrier"]').focus().type('UP').type('{enter}');
        cy.get('form#add_tracking_order_form [aria-label="Search by purchase id activate"]').click();
        cy.get('input[aria-label="Search by purchase id"]').focus().type('YOKAH82 05.29.2019').type('{enter}').wait(1000);
        cy.get('table :nth-child(1) > .product_input_qty > .form-control').focus().type('2');
        cy.get('[form="add_tracking_order_form"]').contains('Save').should("be.enabled");
        cy.get('[form="add_tracking_order_form"]').contains('Save').click().wait(1500);
        cy.get('.ui-pnotify > .alert').contains('Tracking number added successfully').should('exist').should('be.visible');
        cy.focused().should('have.attr', 'id').and('eq', 'modal_tracking_number');
    });
});