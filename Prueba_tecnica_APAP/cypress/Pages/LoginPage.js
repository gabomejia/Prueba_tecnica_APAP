class Loginpage {
    Elements = {
       User: () => cy.get('#username') ,
       Password: () => cy.get('#password') ,
       Botton: () => cy.get('.radius') ,
       ErrorAlert: () => cy.get('#username'),
       Header: () => cy.get('#flash')
    }

TypeUsert(Usert) {
    this.Elements.User().type(Usert)
}

TypePassworf(Pass) {
    this.Elements.Password().type(Pass)
}

ClickBotton() {
    this.Elements.Botton().click();
 }

 validatePageText(Text) {
    this.Elements.Header().contains(Text)
 }
}



export const login = new Loginpage;