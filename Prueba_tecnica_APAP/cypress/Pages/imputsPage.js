class imput {
    Elements = {
       ImputNumber: () => cy.get('input') ,

    }


TypeNumber(imputnumber) {
this.Elements.ImputNumber().type(imputnumber)
}
}


export const Imput = new imput;