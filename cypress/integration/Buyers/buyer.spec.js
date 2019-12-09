describe('Buyers', () => {

    before(() => {
        cy.fixture('user.json').as('userData')
        cy.get('@userData').then((userData) => {
            cy.login(userData.Username, userData.password)
        })
    });

    beforeEach(() => {
        cy.Cookies();
    });

    it('load Buyers view', () => {
        cy.visit('/businesses#/buyers')
        cy.get('.content-body').should('be.visible')
    });

    // it('filter Buyer ', () => {
    //     cy.get('.no-margin > :nth-child(2) > .form-control').type('TESTATL')
    //     cy.get('.no-margin > :nth-child(3) > .form-control').type('Test')
    //     cy.get('.col-lg-1 > .btn').click()
    // });

    // it('Buyers Details', () => {
    //     cy.contains('Details').should('be.visible').click()
    //     cy.get('.content-body').should('be.visible').scrollIntoView()
    //     cy.contains('Buyer Details').should('be.visible')
    //     cy.contains('Tracking Numbers').click()
    //     cy.contains('Balance').click()
    //     cy.contains('Referrals').click()
    //     cy.contains('Notes').click()
    // });

    // it('load Buyers Checks Request', () => {
    //     cy.visit('/businesses#/buyers/requests-checks')
    //     cy.get('.content-body').should('exist').should('be.visible')
    //     cy.get('.no-margin').should('be.visible')
    // });

    // it('load  Buyers Checks Payees Names', () => {
    //     cy.visit('/businesses#/buyers/checks-payees-names')
    //     cy.get('.content-body').should('be.visible')
    //     cy.get('.no-margin').should('be.visible')
    // });

    // it('Filter Payees Names', () => {
    //     cy.get('.no-margin > :nth-child(1) > .form-control').type('Test Atlanticsoft')
    //     cy.get('.no-margin > :nth-child(2) > .form-control').type('TESTATL')
    //     cy.contains('Filter').click()
    // });

    // it('load Buyers sign Ups', () => {
    //     cy.visit('/businesses#/buyers/signups')
    //     cy.get('.content-body').should('be.visible')
    // });

    after(() => {
        cy.clearCookies()
    })
})