describe('fail to import gift card', () => {
    beforeEach(() => {
        cy.fixture('user.json').as('userData')
        cy.get('@userData').then((userData) => {
            cy.login(userData.username, userData.password)
        })
    })
/*
    it('Fail importing Gift Card when it already exists', () => {
        cy.get('@userData').then((userData) => {
            cy.CreateGiftCard('Buying Group', 'Best Buy', 'aaaa0000', 'aaaa0000', '100', '0000')
            cy.get('p').contains(userData.msnExist).should('exist').should('be.visible').wait(3000)
        })
    })
/*
    it('Fail importing Gift Card when amount is 0', () => {
        cy.get('@userData').then((userData) => {
            cy.CreateGiftCard('Buying Group', 'Best Buy', 'aaaa0000', 'aaaa0000', '0', '0000')
            cy.get('p').contains(userData.amountZero).should('exist').should('be.visible')
        })
    })
/** 
    it('Fail import Gift Card when order does not exist', () => {
        cy.get('@userData').then((userData) => {
            cy.CreateGiftCard('Buying Group', 'Best Buy', 'aaaa-0000', 'aaaa-0000', '100', '0000')
            cy.get('p').contains(userData.orderDNotExist).should('exist').should('be.visible')
        })
    })
/** 
    it('Fail importing Gift Card when order is already fully loaded', () => {
        cy.get('@userData').then((userData) => {
            cy.CreateGiftCard('Buying Group', 'Best Buy', 'aaaa0000', 'aaaa-0000', '200', '0000')
            cy.get('p').contains(userData.cardOrdAlreadyFullyLoaded).should('exist').should('be.visible')
        })
    })
/** */
    it('Create Gift Card Order', () => {
        cy.get('@userData').then((userData) => {
            cy.CreateGiftCardOrder(userData.OrderType, userData.RegularSupplier, userData.VendorSupplier_Store, userData.VendorSupplier_Store, 'Referral', userData.OrderNumber, userData.tags, userData.amount, userData.amount)
            //cy.get('p').contains("Purchasing Order Details").should('exist').should('be.visible')
        })
    })
/** 
    it('Create partially received gift card order', () => {
        cy.CreateGiftCardOrder('Gift Card Order', 'Buying Group', 'Best Buy', 'Best Buy', 'Buying Group', '3333', 'Testing', '500', '100')
    });
/**/
/*
    it('Add gift card to the partially received order ', () => {
        cy.CreateGiftCard('Buying Group', 'Best Buy', '3333', '651458489414', '200', '0000')
    });
/*
    it('fail importing gift card because the amount exceeds total order partially received ', () => {
        cy.CreateGiftCard('Buying Group', 'Best Buy', '3333', '651458684651', '500', '0000')
        cy.get('p').contains("Gift card order 3333 doesn't have enough balance to add $500.00").should('exist').should('be.visible')
    });
/*
    it('fail importing gc that its amount is greater than pending amount to load in the order', () => {
        cy.CreateGiftCard('Buying Group', 'Best Buy', '2222', '645564864623', '10000', '0000')
        cy.get('p').contains("Gift card order 2222 doesn't have enough balance to add $10000.00").should('exist').should('be.visible')
    })*/
});