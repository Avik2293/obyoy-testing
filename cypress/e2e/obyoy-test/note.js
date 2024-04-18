

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