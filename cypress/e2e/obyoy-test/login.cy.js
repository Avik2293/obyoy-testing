
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

    it('Dashboard-All User', () => {
        cy.get('.css-vmcsws').should('have.text', 'Profile').click()
        cy.get("a[href='/dashboard']").contains('Dashboard').click()
        cy.get('.css-2osv7').should('contain', 'Admin Dashboard')

        cy.get('.css-1ev1cfq > button:nth-child(1)').should('contain', 'All User').click()
        cy.get('.css-1m4657y').should('contain', 'User Management')
        cy.get('.css-zipzvv > div').should('have.length', 4)
        cy.get('.css-zipzvv > div > :nth-child(2) > :nth-child(4)').should('have.contain', 'Tarif Ezaz')
        cy.wait(1000)
        cy.get(':nth-child(2) > .css-asczgi > .chakra-button').should('contain', 'View').click()
        cy.wait(1000)
        cy.get('.css-1m4657y').should('have.contain', 'User ID: 2234')
        cy.get('.css-1kcxfkn > div').should('have.length', 4)
        cy.get(':nth-child(2) > :nth-child(7)').should('have.contain', 'Bkash')
        cy.get('.css-1kcxfkn > :nth-child(2) > :nth-child(7)').should('have.contain', 'Bkash')

        cy.go('back')
        cy.get('#selectedUser').type("23fdfsdfs").should('have.value', '23fdfsdfs')
        cy.get('.css-1kbhu3k').should('have.text', 'Show').click()
        cy.wait(1000)
        cy.get('.css-2osv7').should('have.contain', 'Invalid User Id, No data Found')
        cy.wait(1000)
        cy.get('.chakra-modal__footer > .chakra-button').should('have.text', 'Close').click()
        // cy.get('.css-1oqu1uq').should('have.text', 'Close').click()

        cy.wait(1000)
        cy.get('#selectedUser').type("224").should('have.value', '224')
        cy.get('.css-1kbhu3k').should('have.text', 'Show').click()
        cy.wait(1000)
        cy.get('.css-d7zz > :nth-child(2)').should('have.contain', 'Shahid Alom')
        cy.wait(1000)
        cy.get('.css-1oqu1uq').should('have.text', 'Close').click()

        cy.wait(1000)
        cy.get('#selectedUser').type("224").should('have.value', '224')
        cy.get('.css-1kbhu3k').should('have.text', 'Show').click()
        cy.wait(1000)
        cy.get('.css-d7zz > :nth-child(2)').should('have.contain', 'Shahid Alom')
        cy.wait(1000)
        cy.get('.css-d7zz > .chakra-stack > .css-0 > .chakra-button').should('have.text', 'View Withdraw History').click()
        cy.get('.css-1m4657y').should('have.contain', 'User ID: 224')
        cy.get('.css-1kcxfkn > div').should('have.length', 2)
        cy.get('.css-1xml8sx > :nth-child(4)').should('have.contain', '5233')

        cy.go('back')
        cy.get('#selectedUser').type("224").should('have.value', '224')
        cy.get('.css-1kbhu3k').should('have.text', 'Show').click()
        cy.wait(1000)
        cy.get('.css-d7zz > :nth-child(2)').should('have.contain', 'Shahid Alom')

        cy.wait(1000)
        cy.get('.css-d7zz > .chakra-stack > .css-lk1cco > .chakra-button').should('have.text', 'Delete').click()
        cy.get('.css-gdcm09 > p').should('have.contain', 'delete this user?')
        cy.get('body > div:nth-child(6) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > section:nth-child(1) > footer:nth-child(3) > button:nth-child(1)').should('have.contain', 'Cancel').click()
        // cy.get('.css-192qrng > .css-1oqu1uq').should('have.contain', 'Cancel').click({ multiple: true, force: true })

        cy.get('.css-d7zz > .chakra-stack > .css-lk1cco > .chakra-button').should('have.text', 'Delete').click()
        cy.get('.css-gdcm09 > p').should('have.contain', 'delete this user?')
        cy.get('.css-18gm9gg').should('have.text', 'Delete').click()

        cy.reload()
        cy.get('.css-zipzvv > div').should('have.length', 4)
        cy.get('.css-zipzvv > div > :nth-child(2) > :nth-child(4)').should('have.contain', 'Tarif Ezaz')

        cy.get(':nth-child(2) > .css-asczgi > .chakra-button').should('have.text', 'View').click()
        cy.get('.css-1m4657y').should('have.contain', 'User ID: 2234')
        cy.get('.css-1kcxfkn > div').should('have.length', 4)
        cy.get('.css-1xml8sx > :nth-child(4)').should('have.contain', '5233')
        cy.go('back')

        cy.get("body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(2) > p:nth-child(11) > button:nth-child(1)").should('have.text', 'Delete').click()
        cy.get('.css-1oqu1uq').should('have.text', 'Cancel').click()
        cy.get("body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(2) > p:nth-child(11) > button:nth-child(1)").should('have.text', 'Delete').click()
        cy.get('.css-18gm9gg').should('have.text', 'Delete').click()
        cy.get('.css-zipzvv > div > :nth-child(2) > :nth-child(4)').should('not.have.contain', 'Tarif Ezaz')
    });

    it('Dashboard-Dataset Input', () => {
        cy.get('.css-vmcsws').should('have.text', 'Profile').click()
        cy.get("a[href='/dashboard']").contains('Dashboard').click()
        cy.get('.css-2osv7').should('contain', 'Admin Dashboard')

        cy.get('.css-1ev1cfq > button:nth-child(2)').should('contain', 'Dataset Input').click()
        cy.get('.css-1m4657y').should('have.contain', 'Dataset for Translate')

        cy.wait(1000)
        cy.get('input[type=file]').selectFile('cypress/fixtures/example.json')
        cy.wait(1000)
        cy.get('div.css-0 > .chakra-button').click()    // nothing in function
        cy.wait(1000)
        cy.reload()
        cy.wait(1000)
        cy.get('.css-1ev1cfq > button:nth-child(2)').should('contain', 'Dataset Input').click()

        cy.get('.css-qduwun').should('contain', 'All Datasets Info')
        cy.get('.css-zipzvv > .css-1kcxfkn').should('have.length', 4)
        cy.get('.css-zipzvv > div > :nth-child(2) > :nth-child(3)').should('have.contain', 'dummy dataset 1')
        cy.wait(1000)
        // cy.get('.css-zipzvv > div > :nth-child(2) > :nth-child(10)').should('have.contain', 'Delete').click()
        // cy.get('.css-1kcxfkn > .chakra-stack > .css-lk1cco > p > .chakra-button').should('have.contain', 'Delete').click()
        cy.get("div[id='tabs-:rp:--tabpanel-1'] div[class='chakra-table__container css-zipzvv'] div:nth-child(2) p:nth-child(10) button:nth-child(1)").should('have.contain', 'Delete').click()
        cy.wait(1000)
        cy.get('.css-10e0d5b').should('have.contain', 'Delete Dataset')

        cy.get('.css-1oqu1uq').should('have.contain', 'Cancel').click()
        cy.wait(1000)
        cy.get("div[id='tabs-:rp:--tabpanel-1'] div[class='chakra-table__container css-zipzvv'] div:nth-child(2) p:nth-child(10) button:nth-child(1)").should('have.contain', 'Delete').click()
        cy.wait(1000)
        cy.get('.css-18gm9gg').should('have.text', 'Delete').click()
        cy.get('.css-qduwun').should('contain', 'All Datasets Info')
        cy.wait(1000)
        cy.get('.css-zipzvv > .css-1kcxfkn').should('have.length', 4)
        cy.get('.css-zipzvv > div > :nth-child(2) > :nth-child(3)').should('have.contain', 'dummy dataset 11')
    });

    it.only('Dashboard-Custom Dataset', () => {
        cy.get('.css-vmcsws').should('have.text', 'Profile').click()
        cy.get("a[href='/dashboard']").contains('Dashboard').click()
        cy.get('.css-2osv7').should('contain', 'Admin Dashboard')

        cy.get('.css-1ev1cfq > button:nth-child(3)').should('contain', 'Custom Dataset').click()
        cy.get('.css-1m4657y').should('have.contain', 'All Custom Datasets Info')

        // cy.get('.css-qduwun').should('contain', 'All Datasets Info')
        // cy.get('.css-zipzvv > .css-1kcxfkn').should('have.length', 4)
        // cy.get('.css-zipzvv > div > :nth-child(2) > :nth-child(3)').should('have.contain', 'dummy dataset 1')
        // cy.wait(1000)
        // // cy.get('.css-zipzvv > div > :nth-child(2) > :nth-child(10)').should('have.contain', 'Delete').click()
        // // cy.get('.css-1kcxfkn > .chakra-stack > .css-lk1cco > p > .chakra-button').should('have.contain', 'Delete').click()
        // cy.get("div[id='tabs-:rp:--tabpanel-1'] div[class='chakra-table__container css-zipzvv'] div:nth-child(2) p:nth-child(10) button:nth-child(1)").should('have.contain', 'Delete').click()
        // cy.wait(1000)
        // cy.get('.css-10e0d5b').should('have.contain', 'Delete Dataset')

        // cy.get('.css-1oqu1uq').should('have.contain', 'Cancel').click()
        // cy.wait(1000)
        // cy.get("div[id='tabs-:rp:--tabpanel-1'] div[class='chakra-table__container css-zipzvv'] div:nth-child(2) p:nth-child(10) button:nth-child(1)").should('have.contain', 'Delete').click()
        // cy.wait(1000)
        // cy.get('.css-18gm9gg').should('have.text', 'Delete').click()
        // cy.get('.css-qduwun').should('contain', 'All Datasets Info')
        // cy.wait(1000)
        // cy.get('.css-zipzvv > .css-1kcxfkn').should('have.length', 4)
        // cy.get('.css-zipzvv > div > :nth-child(2) > :nth-child(3)').should('have.contain', 'dummy dataset 11')
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