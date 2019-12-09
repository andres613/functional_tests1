// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This is will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })
Cypress.Commands.add("login", (username, password) => {
  cy.visit("/login");
  cy.get('#login_value').type(username);
  cy.get('#password').type(password);
  cy.get('.hidden-xs').click({ force: true })
});


Cypress.Commands.add("CreateGiftCardOrder", (OrderType, RegularSupplier, VendorSupplier, Store, Referral, OrderNumber, Tags, Amount, AmountSaved) => {
  cy.visit('https://thecornercloud.com/developers/index.php/businesses#/purchase_orders')
  cy.get('[ng-click="addOrderModal()"]').click({ force: true })
  cy.get(':nth-child(1) > .col-sm-5 > .ui-select-container > .ui-select-match > .btn-default').click()
  cy.contains('#ui-select-choices-row-3-', OrderType).click()
  cy.get('[ng-show="fields.gco_supplier_id.visible"] > .col-sm-5 > .ui-select-container > .ui-select-match > .btn-default').click()
  cy.contains('#ui-select-choices-row-4-', RegularSupplier).click()
  cy.get(':nth-child(4) > .col-sm-5').click()
  cy.contains('#ui-select-choices-row-5-', VendorSupplier).click()

  cy.get('[ng-show="fields.gco_card_type_id.visible"] > .col-sm-5').click()
  cy.get('input[aria-owns="ui-select-choices-6"]').type(Store)
  cy.contains('#ui-select-choices-row-6-', Store).click()

  cy.get('[ng-show="fields.gco_referral_id.visible"] > .col-sm-5').click()
  cy.get('#ui-select-choices-row-7-').click()
  
  cy.get('[ng-show="fields.business_invoices_order_id.visible"] > .col-sm-8 > .form-control').type(OrderNumber)
  cy.get('.selectize-input > input').type(Tags)
  cy.get('[ng-show="fields.gco_amount.visible || fields.gco_amount_saved.visible"] > div.col-sm-3 > .form-control').type(Amount)
  cy.get('.col-sm-2 > .form-control').type(AmountSaved)
  cy.get('[ng-show="formData.business_orders_id==0"] > .btn-primary').click()
})


Cypress.Commands.add("CreateGiftCard", (Supplier, Business, SupplierOrderId, CardCode, Amount, Pin) => {
  cy.visit("https://thecornercloud.com/developers/index.php/gift_cards/create")
  cy.get('.col-sm-4 > .control-group > .controls > #s2id_supplier_id > .select2-choice').click().wait(1000)
  cy.contains('#select2-results-9 li div', Supplier).click()
  cy.get('.col-sm-4 > .control-group > .controls > #s2id_businesses_id > .select2-choice').click().wait(1000)
  cy.contains('#select2-results-10 li div', Business).click()
  
  cy.get('.col-sm-4 > #giftcard_orders_id').type(SupplierOrderId)
  cy.get('#giftcard_code').type(CardCode)
  cy.get('.col-sm-4 > #giftcard_amount').type(Amount)
  cy.get('#giftcard_pin').type(Pin)
  cy.get(':nth-child(9) > .col-sm-4 > .btn-primary').click()
});

/*
Cypress.Commands.add("Cookies", () => {
  Cypress.Cookies.preserveOnce('bf_session')
  Cypress.Cookies.preserveOnce('ci_csrf_token')
  Cypress.Cookies.preserveOnce('adminer_key')
  Cypress.Cookies.preserveOnce('adminer_permanent')
  Cypress.Cookies.preserveOnce('adminer_sid')
});



Cypress.Commands.add("logout", () => {
  cy.visit("/logout");
  cy.wait(2000);
});

Cypress.Commands.add("typeElement", (element, text) => {
  cy.get(element)
    .type(text, { force: true })
    .should("have.value", text);
});


Cypress.Commands.add("DateFilter", () => {
  cy.get('.row-filters-chat > .ng-isolate-scope > .reports-dates-filter-cnt > .dropdown > #dropdownMenu1').click();
  cy.get('.row-filters-chat > .ng-isolate-scope > .reports-dates-filter-cnt > .dropdown > .dropdown-menu').should('be.visible')
  cy.get('a').contains('Custom').click()
  cy.get('.modal-footer > .btn-primary').should('not.be.enabled')
  cy.get(':nth-child(1) > .ng-pristine > .input-group > .input-group-addon').click()
  cy.get(':nth-child(3) > :nth-child(5)').click()
  cy.get(':nth-child(2) > .ng-pristine > .input-group > .input-group-addon').click()
  cy.get(':nth-child(3) > :nth-child(7)').click()
  cy.get('.modal-footer > .btn-default').should('be.visible')
  cy.get('.modal-footer > .btn-primary').should('be.visible').click()
});

Cypress.Commands.add("FilterPurchase", () => {
  cy.get('[style="height: 300px; background-color: #ecedf0;"] > :nth-child(1) > report-line-chart.ng-isolate-scope > .panel > .panel-body > .report-filter-control > .pull-right').click()
  cy.get('.panel > .modal-content').should('be.visible')
  cy.get('.col-sm-6 > .ng-isolate-scope > .reports-dates-filter-cnt > .dropdown > #dropdownMenu1').click()
  cy.get('.col-sm-6 > .ng-isolate-scope > .reports-dates-filter-cnt > .dropdown > .dropdown-menu > :nth-child(6) > a').should('be.visible').click()
  cy.get(':nth-child(1) > .ng-pristine > .input-group > .input-group-addon').click()
  cy.get('.datepicker').should('be.visible')
  cy.get('.datepicker-days > .table-condensed > thead > :nth-child(1) > .datepicker-switch').click()
  cy.get('span').contains('May').should('be.visible').click()
  cy.get('tbody > :nth-child(2) > :nth-child(3)').click()
  cy.get('[style="z-index: 1070; display: block;"] > .modal-block > .panel > .modal-content > .form-horizontal > .modal-footer > .btn-primary').click()
  cy.get('.modal-footer > .btn-primary').click()
  cy.contains('Purchase Totals').scrollIntoView()
});

Cypress.Commands.add("FilterSale", () => {
  cy.get('[style="height: 300px; background-color: #ecedf0;"] > :nth-child(2) > report-line-chart.ng-isolate-scope > .panel > .panel-body > .report-filter-control > .pull-right').click()
  cy.get('.panel > .modal-content').should('be.visible')
  cy.get('.col-sm-6 > .ng-isolate-scope > .reports-dates-filter-cnt > .dropdown > #dropdownMenu1').click()
  cy.get('.col-sm-6 > .ng-isolate-scope > .reports-dates-filter-cnt > .dropdown > .dropdown-menu > :nth-child(6) > a').click()
  cy.get(':nth-child(1) > .ng-pristine > .input-group > .input-group-addon').click()
  cy.get('.datepicker-days > .table-condensed > thead > :nth-child(1) > .datepicker-switch').click()
  cy.get('span').contains('May').should('be.visible').click()
  cy.get('tbody > :nth-child(2) > :nth-child(3)').click()
  cy.get('[style="z-index: 1070; display: block;"] > .modal-block > .panel > .modal-content > .form-horizontal > .modal-footer > .btn-primary').click()
  cy.get('.modal-footer > .btn-primary').click()
  cy.contains('Sale Totals').scrollIntoView()
});

Cypress.Commands.add("NewOrder", () => {
  cy.get('button').contains('Options').should('exist', 'be.visible').click()
  cy.get('li').contains('New Order').click()
  cy.get('.modal-content').invoke('show').should('be.visible')
  cy.get(':nth-child(1) > .col-sm-5 > .ui-select-container > .ui-select-match > .btn-default').click()
  cy.get(':nth-child(1) > .col-sm-5 > .ui-select-container > .ui-select-search').type('Retail').type('{enter}')
  cy.get('.users-single-filter').click()
  cy.get('.users-single-filter > .ui-select-container > .ui-select-search').type('Test').wait(500).type('{enter}')
  cy.get('.col-sm-7').click()
  cy.get(':nth-child(4) .form-control.ui-select-search').type('coolblue').wait(500)
  // cy.get('.input-group .btn').contains('Add').click()
  // cy.get(':nth-child(1) > .col-sm-8 > .form-control').type('test')
  // cy.get('.btn-primary').contains('Save').click({ force: true })
  cy.get('#customer_pickup').click()
  cy.get(':nth-child(6) > .col-sm-5 > .ui-select-container > .ui-select-match > .btn-default').click()
  cy.get(':nth-child(6) > .col-sm-5 > .ui-select-container > .ui-select-search').type('{enter}')
  cy.get(':nth-child(7) > .col-sm-5 > .ui-select-container > .ui-select-match > .btn-default').click()
  cy.get(':nth-child(7) > .col-sm-5 > .ui-select-container > .ui-select-search').type('NET 0').type('{enter}')
  cy.get('[ng-show="fields.po_number.visible"] > .col-sm-8 > .form-control').type('atlantic test')
  cy.get('[ng-show="formData.order_id==0"] > .btn-primary').click()
});

Cypress.Commands.add("VerifyGiftCard", (Data) => {
  cy.get(Data).should('exist').should('be.visible')
  cy.get(Data + '> :nth-child(8)').should('be.visible')
  cy.get(Data + '> :nth-child(9)').should('be.visible')
})
Cypress.Commands.add('upload_file', (fileName, fileType = '', selector) => {
  cy.get(selector).then(subject => {
    cy.fixture(fileName, 'base64')
      .then(Cypress.Blob.base64StringToBlob)
      .then(blob => {
        const el = subject[0]
        const testFile = new File([blob], fileName, { type: fileType })
        const dataTransfer = new DataTransfer()
        dataTransfer.items.add(testFile)
        el.files = dataTransfer.files
      })
  })
})

Cypress.Commands.add('fullLogin', () => {
    cy.clearCookies();
    cy.fixture('user.json').as('userData');
    cy.get('@userData').then((userData) => {
        cy.login(userData.username, userData.password);
    })
});
*/
