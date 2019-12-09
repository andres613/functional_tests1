describe.skip('Add Amazon Credit Card', () => {
    before(() => {
        cy.fullLogin();
    });

    after(() => {
        cy.clearCookies();
    });

    beforeEach(() => {
        cy.Cookies();
    });

    it('should get into amazon credit card list view', function () {
        cy.get('[data-cy="sidebar-toggle"]').should('be.visible').click();
        cy.get('[data-cy="sidebar-internal-amazon-menu"]').should('be.visible').click();
        cy.get('[data-cy="sidebar-internal-amazon-cc"]').should('be.visible').click();
        cy.get('[data-cy="amazon-cc-table"]').should('exist').should('be.visible');
        cy.get('[data-cy="add-amazon-cc"]').should('exist').should('be.visible').click();
        cy.get('[data-cy="amazon-modal-form"]').should('exist').should('be.visible');
        cy.get('[data-cy="input-amazon-card-name"]').should('be.visible').focus().type('Amazon Card Test');
        cy.get('[data-cy="input-amazon-last-digits"]').should('be.visible').focus().type('43768');
        cy.get('[data-cy="input-amazon-expiration-date"] span.input-group-addon').should('be.visible').click();
        cy.get('.datepicker tbody > :nth-child(6) > :nth-child(2)').should('be.visible').click();
        cy.get('[data-cy="input-amazon-credit-available"]').should('be.visible').focus().type('500000');
        cy.get('[data-cy="input-amazon-account"] .accounts-single-filter').should('be.visible').click();
        cy.get('[data-cy="input-amazon-account"] .active > .ui-select-choices-row-inner').should('be.visible').click();
        cy.get('[data-cy="internal-amazon-add-cc"]').should('be.visible').click();
        cy.get('.alert .ui-pnotify-text').should('be.visible').contains('Amazon Credit Card added successfully').should('be.visible')
    });
});