describe('Get Into Amazon Credit Card module', () => {
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
        cy.get('[data-cy="amazon-cc-table"]').should('exist').should('be.visible')
    });
});