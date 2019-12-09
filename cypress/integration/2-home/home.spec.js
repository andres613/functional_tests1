describe("dashboard", function () {

    before(() => {
        cy.fixture('user.json').as('userData')
        cy.get('@userData').then((userData) => {
            cy.login(userData.Username, userData.password)
        })
    });

    it('load dashboard', () => {
        cy.get('.header').should('be.visible')
        cy.get('.content-body').should('be.visible')
        cy.get('.page-header').should('be.visible')
        cy.contains('Dashboard Reports').should('be.visible')
    });
    beforeEach(()=>{
        cy.Cookies()
    })

    it('Custom Date Filter', () => {
        cy.DateFilter()
    });

    it('visible purchase totals', () => {
        cy.get('[style="height: 300px; background-color: #ecedf0;"] > :nth-child(1)').should('be.visible')
    });
    it('button update  purchase totals', () => {
        cy.get('[style="height: 300px; background-color: #ecedf0;"] > :nth-child(1) > report-line-chart.ng-isolate-scope > .panel > .panel-body > .report-filter-control > [ng-click="refresh()"]').click()
    });
    it('Custom Filter Purchase Totals', () => {
        cy.FilterPurchase()
    });

    it('visible Sale Totals', () => {
        cy.get('[style="height: 300px; background-color: #ecedf0;"] > :nth-child(2)').should('be.visible')
    });

    it('button update sale totals ', () => {
        cy.get('[style="height: 300px; background-color: #ecedf0;"] > :nth-child(2) > report-line-chart.ng-isolate-scope > .panel > .panel-body > .report-filter-control > [ng-click="refresh()"]').should('be.visible').click()
    });

    it('Custom Filter Sale Totals', () => {
        cy.FilterSale()
    });
})