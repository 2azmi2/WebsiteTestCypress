describe('TC_login_01', () => {
  it('passes', () => {
    cy.visit('http://greenvestvsr.herokuapp.com/login')
    cy.get('#username').type('salah');
    cy.get('#password').type('azmi');
    cy.get('form > .btn').click()
  })  
})

describe('TC_login_02', () => {
  it('passes', () => {
    cy.visit('http://greenvestvsr.herokuapp.com/login')
    cy.get('#username').type('azmi');
    cy.get('#password').type('salah');
    cy.get('form > .btn').click()
  })  
})

describe('TC_login_03', () => {
  it('passes', () => {
    cy.visit('http://greenvestvsr.herokuapp.com/login')
    cy.get('#username').type('salah');
    cy.get('#password').type('salah');
    cy.get('form > .btn').click()
  })  
})


describe('TC_login_04', () => {
  it('passes', () => {
    cy.visit('http://greenvestvsr.herokuapp.com/login')
    cy.get('#username').type('azmi');
    cy.get('#password').type('azmi');
    cy.get('form > .btn').click()
  })  
})

describe('TC_beli_01', () => {
  it('passes', () => {
    cy.visit('http://greenvestvsr.herokuapp.com/login')
    cy.get('#username').type('azmi');
    cy.get('#password').type('azmi');
    cy.get('form > .btn').click()
    cy.get(':nth-child(7) > .nav-link').click()
    cy.get('[href="http://greenvestvsr.herokuapp.com/transaksi%20green-bond"]').click()
    cy.get('.link-info').click()
    cy.get('.pb-2 > .shadow-custom-green').click()
    cy.get('#pesan').type('buy')
    cy.get('#total_bayar').type('10000')
    cy.get('.row > :nth-child(2) > .btn').click()
  })  
})

describe('TC_beli_02', () => {
  it('passes', () => {
    cy.visit('http://greenvestvsr.herokuapp.com/login')
    cy.get('#username').type('azmi');
    cy.get('#password').type('azmi');
    cy.get('form > .btn').click()
    cy.get(':nth-child(7) > .nav-link').click()
    cy.get('[href="http://greenvestvsr.herokuapp.com/transaksi%20green-bond"]').click()
    cy.get('.link-info').click()
    cy.get('.pb-2 > .shadow-custom-green').click()
    cy.get('#pesan').type('buy')
    cy.get('#total_bayar').type('asd')
    cy.get('.row > :nth-child(2) > .btn').click()
  })  
})

describe('TC_beli_03', () => {
  it('passes', () => {
    cy.visit('http://greenvestvsr.herokuapp.com/login')
    cy.get('#username').type('azmi');
    cy.get('#password').type('azmi');
    cy.get('form > .btn').click()
    cy.get(':nth-child(7) > .nav-link').click()
    cy.get('[href="http://greenvestvsr.herokuapp.com/transaksi%20green-bond"]').click()
    cy.get('.link-info').click()
    cy.get('.pb-2 > .shadow-custom-green').click()
    cy.get('#pesan').type('buy')
    cy.get('#total_bayar').type('5000000')
    cy.get('.row > :nth-child(2) > .btn').click()
  })  
})

describe('TC_beli_04`', () => {
  it('passes', () => {
    cy.visit('http://greenvestvsr.herokuapp.com/login')
    cy.get('#username').type('azmi');
    cy.get('#password').type('azmi');
    cy.get('form > .btn').click()
    cy.get(':nth-child(7) > .nav-link').click()
    cy.get('[href="http://greenvestvsr.herokuapp.com/transaksi%20green-bond"]').click()
    cy.get('.link-info').click()
    cy.get('.pb-2 > .shadow-custom-green').click()
    cy.get('#pesan').type('buy')
    cy.get('#total_bayar').type('100000000000000000')
    cy.get('.row > :nth-child(2) > .btn').click()
  })  
})
