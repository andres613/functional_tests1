describe("Sales", () => {
    before(() => {
        cy.fixture('user.json').as('userData')
        cy.get('@userData').then((userData) => {
            cy.login(userData.Username, userData.password)
        })
    });

    it('Load Sales', () => {
        cy.visit('/businesses#/sales')
        cy.get('body').find('.content-body').should('be.visible')
    });

    it('Creat New Order', () => {
        cy.NewOrder()
    });
    beforeEach(() => {
        cy.Cookies();
    });

    it('Load Order Details', () => {
        cy.visit('/businesses#/sales/details/13371')
        cy.get('.main-order-container').should('be.visible')
        cy.get('.tab-content').should('exist').should('be.visible')
        cy.get('#search-product-to-so > .ui-select-match > .btn-default').click()
        cy.get('#search-product-to-so > .ui-select-search').type('xbox').wait(2000)
        cy.get('.active > .ui-select-choices-row-inner').click()
        cy.get('.form-group > .search-condition-box > .ui-select-container > .ui-select-match > .btn-default').click();
        cy.get('.ui-select-choices-row-inner').contains('New').click()
        cy.get('.form-group .unit_price').type('10000');
        cy.get('fieldset .btn-primary').click().wait(500)
        cy.get('.ui-pnotify-title').should('be.visible').should('be.visible')
    });

    it.only('Load product condition automatically', () => {
        cy.visit('/businesses#/sales/details/13371');
        cy.get('div[ng-model="search.productSelected"]').should('be.visible');
        cy.get('#search-product-to-so > .ui-select-match > .btn-default')
            .click();
        cy.get('#search-product-to-so > .ui-select-search').type('xbox');
        cy.get('.active > .ui-select-choices-row-inner').click();
        cy.get('.form-group > .search-condition-box > .ui-select-container > .ui-select-match > .btn-default')
            .contains('New').should('be.visible');
    });

    it('Load Profit Deatils', () => {
        cy.contains('Profit').click()
        cy.get('.tab-content').should('exist').should('be.visible')
    });

    it('Load Inventory History', () => {
        cy.contains('Inventory History').click({ force: true })
    });
    it('Load Shipping', () => {
        cy.contains('Shipping').click({ force: true })
    });

    it('Load Uploads', () => {
        cy.get('.tabs > .nav').contains('Uploads').click({ force: true })
    });
    it('Loads Notes', () => {
        cy.get('.tabs > .nav').contains('Notes').click({ force: true })
    });

    it('Load Email', () => {
        cy.get('.tabs > .nav').contains('Email').click({ force: true })
        cy.get('.main-order-container').find('.tab-content').should('exist').should('be.visible')
        cy.get('.tab-content').find('.selectize-input').should('be.visible')
        cy.get(':nth-child(3) > .col-md-9 > .form-control').should('exist').should('be.visible')
        cy.get(':nth-child(4) > .col-md-9 > .form-control').should('be.visible')
    });
    it('Return Orders', () => {
        cy.contains('Back to Orders').should('exist').should('be.visible').click()
    });
    after(() => {
        cy.clearCookies()
    })
})