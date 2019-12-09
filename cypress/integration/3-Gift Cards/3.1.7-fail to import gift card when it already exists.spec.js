describe('fail to import gift card', () => {
    beforeEach(() => {
        cy.fixture('user.json').as('userData')
        cy.get('@userData').then((userData) => {
            cy.login(userData.username, userData.password)
        })
    })
    
    it('Fail importing Gift Card when it already exists', () => {
        cy.get('@userData').then((userData) => {
            cy.CreateGiftCard(userData.RegularSupplier, userData.VendorSupplier_Store, userData.OrderNumber, userData.OrderNumber, userData.Amount, userData.Pin)
            cy.get('p').contains(userData.msnExist).should('exist').should('be.visible').wait(3000)
        })
    })
    /*
    it('Fail importing Gift Card when amount is 0', () => {
        cy.get('@userData').then((userData) => {
            cy.CreateGiftCard(userData.RegularSupplier, userData.VendorSupplier_Store, userData.OrderNumber, userData.OrderNumber, '0', userData.Pin)
            cy.get('p').contains(userData.amountZero).should('exist').should('be.visible')
        })
    })
     
    it('Fail import Gift Card when order does not exist', () => {
        cy.get('@userData').then((userData) => {
            cy.CreateGiftCard(userData.RegularSupplier, userData.VendorSupplier_Store, userData.nOrderNumber, userData.nOrderNumber, userData.Amount, userData.Pin)
            cy.get('p').contains(userData.orderDNotExist).should('exist').should('be.visible')
        })
    })
    
    it('Fail importing Gift Card when order is already fully loaded', () => {
        cy.get('@userData').then((userData) => {
            cy.CreateGiftCard(userData.RegularSupplier, userData.VendorSupplier_Store, userData.OrderNumber, userData.nOrderNumber, '200', userData.Pin)
            cy.get('p').contains(userData.cardOrdAlreadyFullyLoaded).should('exist').should('be.visible')
        })
    })
    
    it('Create Gift Card Order', () => {
        cy.get('@userData').then((userData) => {
            cy.CreateGiftCardOrder(userData.OrderType, userData.RegularSupplier, userData.VendorSupplier_Store, userData.VendorSupplier_Store, 'Referral', userData.OrderNumber, userData.tags, userData.Amount, userData.Amount)
            cy.wait(3000).get('h2').contains(userData.PODetails).should('exist')
        })
    })
    
    it('Add gift card to the partially received order ', () => {
        cy.get('@userData').then((userData) => {
            cy.CreateGiftCard(userData.RegularSupplier, userData.VendorSupplier_Store, userData.OrderNumber, userData.CardCode, userData.Amount, userData.Pin)
            cy.get('div').contains(userData.giftCardWCS).should('exist').should('be.visible')
        })
    });
    
    it('Fail importing gift card because the amount exceeds total order partially received ', () => {
        cy.get('@userData').then((userData) => {
            cy.CreateGiftCard(userData.RegularSupplier, userData.VendorSupplier_Store, userData.OrderNumber, userData.CardCode, userData.Amount, userData.Pin)
            cy.get('p').contains(userData.dNotHEBA).should('exist').should('be.visible')
        })
    });
    
    it('Fail importing gc that its amount is greater than pending amount to load in the order', () => {
        cy.get('@userData').then((userData) => {
            cy.CreateGiftCard(userData.RegularSupplier, userData.VendorSupplier_Store, userData.OrderNumber, userData.CardCode, '10000', userData.Pin)
            cy.get('p').contains(userData.dNotHEB).should('exist').should('be.visible')
        })
    })
    
    
    /*
    it('Create partially received gift card order', () => {
        cy.get('@userData').then((userData) => {
            cy.CreateGiftCardOrder(userData.OrderType, userData.RegularSupplier, userData.VendorSupplier_Store, userData.VendorSupplier_Store, 'Referral', userData.OrderNumber, userData.tags, "", userData.amount)
            //cy.CreateGiftCardOrder(userData.OrderType, userData.RegularSupplier, userData.VendorSupplier_Store, userData.VendorSupplier_Store, 'Referral', userData.OrderNumber, userData.tags, userData.amount, userData.amount)
            cy.wait(3000).get('h2').contains(userData.PODetails)
        })
    });
    */
});