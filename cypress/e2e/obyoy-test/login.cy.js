
describe('app', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/login')

        cy.title().should('eq', 'React App')

        cy.get('#email').type("admin@gmail.com")
        cy.get('#password').type("admin@gmail.com")
        cy.get('.css-1kbhu3k').click()

        cy.get(':nth-child(1) > .css-1f6dkbv').should('have.text', 'Leaderboard (Balance)')
    });

    // after(() => {
    //     // logout
    //     cy.get(':nth-child(4) > .chakra-button').click()
    // });

    it('leaderboard', () => {
        cy.get('div.css-1ldz320 > p').should('have.length', 10)
        cy.get('.css-1wior1j > .chakra-link').should('have.text', 'See Full List').click()
        cy.get('.css-2osv7').should('have.text', 'Leaderboard Full List')
        // cy.get('.css-2osv7').should('not.have.text', 'Avik')
        cy.get('div.css-k7a1k9 > div').last().contains('5')
        cy.wait(2000)
        cy.go('back')
        // cy.go('forward')
    });

    it('translate', () => {
        cy.get('.css-yuzr4z > .chakra-button').should('have.text', 'Start').click()
        cy.get('.css-tzly11').should('have.length', 1)
        cy.get('#input').type("sdjsd dskdsj sdkd")
        cy.wait(1000)
        cy.get('.css-yuzr4z > .chakra-button').click()

        cy.wait(2000)

        cy.get('.css-yuzr4z > .chakra-button').should('have.text', 'Start').click()
        cy.get('.css-tzly11').should('have.length', 1)
        cy.get('#input').type("sdjsd dskdsj sdkd")
        cy.wait(1000)
        cy.get('.css-1nqtald > .chakra-button').click()
        cy.get('.css-tzly11').should('have.length', 1)

        cy.wait(2000)
        cy.get('[href="/"] > .chakra-text').click()
    });

    it('profile', () => {
        cy.get('.css-vmcsws').should('have.text', 'Profile').click()
        cy.get("a[href='/profile']").contains('My Profile').click()
        cy.get('.css-jevn3j > .css-0 > :nth-child(1)').should('contain', 'Tarif Ezaz')

        cy.wait(2000)

        cy.get('.css-yauonv').should('have.text', 'Change Your Photo').click()
        cy.wait(2000)
        cy.get('.css-tl3ftk > .chakra-stack > :nth-child(2)').should('have.text', 'Cancel').click()

        cy.wait(2000)
        cy.get('.css-1ce5cee').should('have.text', 'Edit Personal Info').click()
        cy.wait(2000)
        cy.get('.css-eewrou').should('have.text', 'Cancel').click()

        cy.wait(2000)
        cy.get('[href="/"] > .chakra-text').should('have.text', 'Home').click()

        // cy.get('#input').type("sdjsd dskdsj sdkd")
    });

    it('Withdraw', () => {
        cy.get('.css-vmcsws').should('have.text', 'Profile').click()
        cy.get("a[href='/withdraw']").contains('Withdraw').click()

        cy.get('.css-xmy5wn > :nth-child(1) > :nth-child(2)').should('contain', '395')
        cy.get('.css-1kcxfkn > div').should('have.length', 4)
        cy.get('.css-1kcxfkn > :nth-child(2) > :nth-child(2)').should('have.text', '533')

        cy.wait(1000)
        cy.get('#amount').type("23").should('have.value', '23')

        cy.wait(1000)
        // cy.get('select').select('Bank Transfer') // Select the option
        cy.get('#system').select('Bank Transfer').should('have.value', 'Bank Transfer')

        cy.wait(1000)
        cy.get('#info').type('dbl').should('have.value', 'dbl')

        cy.wait(1000)
        cy.get('form > .chakra-button').should('have.text', 'Send Withdraw Request').click()

        cy.wait(1000)
        cy.get('#amount').should('have.value', '')
    });

    it('Custom', () => {
        cy.get('.css-vmcsws').should('have.text', 'Profile').click()
        cy.get("a[href='/custom']").contains('Custom').click()
        cy.get('.css-cyknnk').should('contain', 'Welcome')

        cy.get('input[type=file]').selectFile('cypress/fixtures/example.json')
        cy.wait(1000)
        cy.get('div.css-0 > .chakra-button').click()    // nothing in function
        cy.wait(1000)
        cy.reload()

        cy.get('#newDatasetName').type("23").should('have.value', '23')
        cy.wait(1000)
        cy.get('.chakra-text > .chakra-button').should('have.text', 'Create a new dataset').click()
        cy.get('#newDatasetName').should('have.value', '')

        cy.wait(1000)
        cy.get('.css-16x7qod > .chakra-stack > :nth-child(1)').should('have.text', '1. dummy dataset 111').click()
        cy.get('.css-qb8q4m').contains('dummy dataset 111')
        cy.wait(1000)
        cy.get('#lineInput').type("23").should('have.value', '23')
        cy.get('#translatedLineInput').type("23fdfsdfs").should('have.value', '23fdfsdfs')
        cy.wait(1000)
        cy.get('form > :nth-child(4) > .chakra-button').should('have.text', 'Cancel').click()
        cy.get('.css-cyknnk').should('contain', 'Welcome')

        cy.wait(1000)
        cy.get('.css-16x7qod > .chakra-stack > :nth-child(1)').should('have.text', '1. dummy dataset 111').click()
        cy.get('.css-qb8q4m').contains('dummy dataset 111')
        cy.wait(1000)
        cy.get('#lineInput').type("23").should('have.value', '2323')   // need to clear input feild for cancel
        cy.get('#translatedLineInput').type("23fdfsdfs").should('have.value', '23fdfsdfs23fdfsdfs')
        cy.wait(1000)
        cy.get('.css-yuzr4z > .chakra-button').should('have.text', 'Submit').click()
        cy.get('.css-cyknnk').should('contain', 'Welcome')

        cy.wait(1000)
        cy.get('.css-16x7qod > .chakra-stack > :nth-child(1)').should('have.text', '1. dummy dataset 111').click()
        cy.get('.css-qb8q4m').contains('dummy dataset 111')
        cy.wait(1000)
        cy.get('#lineInput').type("23").should('have.value', '23')
        cy.get('#translatedLineInput').type("23fdfsdfs").should('have.value', '23fdfsdfs')
        cy.wait(1000)
        cy.get('.chakra-stack > .css-1nqtald > .chakra-button').should('have.text', 'Submit & Next').click()
        cy.get('#lineInput').should('have.value', '')
        cy.get('#translatedLineInput').should('have.value', '')
        cy.wait(1000)
        cy.get('form > :nth-child(4) > .chakra-button').should('have.text', 'Cancel').click()
        cy.get('.css-cyknnk').should('contain', 'Welcome')
    });

    it.only('Dashboard-All User', () => {
        cy.get('.css-vmcsws').should('have.text', 'Profile').click()
        cy.get("a[href='/dashboard']").contains('Dashboard').click()
        cy.get('.css-2osv7').should('contain', 'Admin Dashboard')

        cy.get('.css-1ev1cfq > button:nth-child(1)').should('contain', 'All User').click()
        // cy.get('.css-1m4657y').should('contain', 'User Management')







        // cy.get('input[type=file]').selectFile('cypress/fixtures/example.json')
        // cy.wait(1000)
        // cy.get('div.css-0 > .chakra-button').click()    // nothing in function
        // cy.wait(1000)
        // cy.reload()

        // cy.get('#newDatasetName').type("23").should('have.value', '23')
        // cy.wait(1000)
        // cy.get('.chakra-text > .chakra-button').should('have.text', 'Create a new dataset').click()
        // cy.get('#newDatasetName').should('have.value', '')

        // cy.wait(1000)
        // cy.get('.css-16x7qod > .chakra-stack > :nth-child(1)').should('have.text', '1. dummy dataset 111').click()
        // cy.get('.css-qb8q4m').contains('dummy dataset 111')
        // cy.wait(1000)
        // cy.get('#lineInput').type("23").should('have.value', '23')
        // cy.get('#translatedLineInput').type("23fdfsdfs").should('have.value', '23fdfsdfs')
        // cy.wait(1000)
        // cy.get('form > :nth-child(4) > .chakra-button').should('have.text', 'Cancel').click()
        // cy.get('.css-cyknnk').should('contain', 'Welcome')

        // cy.wait(1000)
        // cy.get('.css-16x7qod > .chakra-stack > :nth-child(1)').should('have.text', '1. dummy dataset 111').click()
        // cy.get('.css-qb8q4m').contains('dummy dataset 111')
        // cy.wait(1000)
        // cy.get('#lineInput').type("23").should('have.value', '2323')   // need to clear input feild for cancel
        // cy.get('#translatedLineInput').type("23fdfsdfs").should('have.value', '23fdfsdfs23fdfsdfs')
        // cy.wait(1000)
        // cy.get('.css-yuzr4z > .chakra-button').should('have.text', 'Submit').click()
        // cy.get('.css-cyknnk').should('contain', 'Welcome')

        // cy.wait(1000)
        // cy.get('.css-16x7qod > .chakra-stack > :nth-child(1)').should('have.text', '1. dummy dataset 111').click()
        // cy.get('.css-qb8q4m').contains('dummy dataset 111')
        // cy.wait(1000)
        // cy.get('#lineInput').type("23").should('have.value', '23')
        // cy.get('#translatedLineInput').type("23fdfsdfs").should('have.value', '23fdfsdfs')
        // cy.wait(1000)
        // cy.get('.chakra-stack > .css-1nqtald > .chakra-button').should('have.text', 'Submit & Next').click()
        // cy.get('#lineInput').should('have.value', '')
        // cy.get('#translatedLineInput').should('have.value', '')
        // cy.wait(1000)
        // cy.get('form > :nth-child(4) > .chakra-button').should('have.text', 'Cancel').click()
        // cy.get('.css-cyknnk').should('contain', 'Welcome')
    });



})


// it.skip
// it.only

// .should('have.value', 'ddf')

// cy.url().should('include','admin')
// .should('contain','adjssksjksd')
// .should('eq','https://adjssksjksd')
// or
// .and('not.contain','adjssksjksd')
// .and('eq','https://adjssksjksd')

// .should('be.visible') // element visible or not
// .should('exist')

// let a = 'dgd'
// cy.get("dddyudyu").then((x) => {
//     let b = x.text()
//     expect(b).to.equal(a)
//     expect(b).to.not.equal(a)
//     or
//     assert.equal(a,b)
//     assert.notEqual(a,b)
// })

// cy.get("dfdjdj").check().should('be.checked') // for radio button
// cy.get("dfdjdj").should('not.be.checked') // for radio button
// cy.get("dfdjdj").uncheck().should('not.be.checked') // for uncheck
// cy.get("dfdjdj").first().check().should('be.checked') // for radio button
// cy.get("dfdjdj").last().check().should('be.checked') // for radio button

// cy.get("dfdjdj").select('sfsd').should('have.value', 'fdf')
// .type('dfFd').type('{enter}')

// cy.get('dgdfd').each(($el, index, $list) => {
//     if ($el.text() == 'sfsfd') {
//         cy.wrap($el).click()
//     }
// })

// cy.on('window:alert',(t) => {     // alert
// cy.on('window:confirm',(t) => {   // alert close by click ok button
//     expect(t).to.contains('dgdgdgg);  // alert auto close
// })
// cy.on('window:confirm',() =>false )   // alert close by cancel button

// cy.window().then((win)=>{    // alert with input
//   cy.stub(win, 'prompt').returns('welcome');
//})

// cy.get('dsdd').trigger('mouseover').click()
//                .rightclick()

// cy.get('ddhdh').drag('dddd',{force:true})    // drag and drop

// cy.get('sdsdjhsd').scrollIntoView({duration:2000})