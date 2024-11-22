describe('Actividad 12/11', () =>{
    beforeEach(() =>{
        cy.visit('https://automationintesting.online/');
    });
    
    it('Debe contener la dirección del hotel', () =>{
        cy.contains('Shady Meadows B&B The Old Farmhouse, Shady Street, Newfordburyshire, NE1 410S').should('be.visible');
    });
    it('Debe contener el teléfono del hotel', () =>{
        cy.contains('012345678901').should('be.visible');
    });
    it('Debe contener  la dirección de email del hotel', () =>{
        cy.contains('fake@fakeemail.com').should('be.visible');
    });
    it('Una imagen al menos debe ser visible', () =>{
        cy.get('img').should('be.visible');
    });
    it('Confirma que el texto de la descripción del hotel sea el esperado', ()=>{
        cy.get('div[class="row hotel-description"]').contains('Welcome to Shady Meadows, a delightful Bed & Breakfast nestled in the hills on Newingtonfordburyshire. A place so beautiful you will never want to leave. All our rooms have comfortable beds and we provide breakfast from the locally sourced supermarket. It is a delightful place.');
    });    
});