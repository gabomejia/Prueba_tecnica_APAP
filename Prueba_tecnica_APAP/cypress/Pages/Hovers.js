class Hovers {
    Elements = {
        imagen1: () => cy.get(':nth-child(3) > img') ,
        imagen2: () => cy.get(':nth-child(4) > img') ,
        imagen3: () => cy.get(':nth-child(5) > img')
    }


verifyimagin() {
this.Elements.imagen1().should('be.visible');
this.Elements.imagen2().should('be.visible');
this.Elements.imagen3().should('be.visible');
}
}



export const hovers = new Hovers;