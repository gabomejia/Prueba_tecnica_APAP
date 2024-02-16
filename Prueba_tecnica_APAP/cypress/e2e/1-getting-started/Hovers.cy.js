import { hovers } from "../../Pages/Hovers";



describe("Imagenes", () => {
    beforeEach(() => {
        cy.visit("https://the-internet.herokuapp.com/hovers");
    });

    it(" Validar que las imagenes se muestren bien", () => {
        hovers.verifyimagin()
    });

  });

