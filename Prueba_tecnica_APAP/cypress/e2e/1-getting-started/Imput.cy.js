import { Imput } from "../../Pages/imputsPage"; 

describe("Imput de numero", () => {
    beforeEach(() => {
        cy.visit("https://the-internet.herokuapp.com/inputs");
    });

  
  
    it(" Validar que el imput permita ingresar números enteros positivos.", () => {
        Imput.TypeNumber('3')
    });

    it(" Validar que el imput permita ingresar números enteros Negativo.", () => {
        Imput.TypeNumber('-10')
    });

    it(" Validar que el imput permita ingresar números enteros Negativo.", () => {
        Imput.TypeNumber('10.10')
    });



  });

