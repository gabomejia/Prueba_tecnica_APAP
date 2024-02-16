import { login } from "../../Pages/LoginPage";

describe("Login", () => {
  beforeEach(() => {
    //cy.visit("https://web.facebook.com/?_rdc=1&_rdr");
  });

  it("Iniciar sesión con credenciales válidas", () => {
    cy.visit("https://the-internet.herokuapp.com/login");
    login.TypeUsert('tomsmith')
    login.TypePassworf('SuperSecretPassword!')
    login.ClickBotton()
    login.validatePageText('You logged into a secure area!')
  });

  it("nombre de usuario válido y una contraseña inválida", () => {
    cy.visit("https://the-internet.herokuapp.com/login");
    login.TypeUsert('tomsmith')
    login.TypePassworf('SuperSecretPassword!222')
    login.ClickBotton()
    login.validatePageText(' Your password is invalid!')
  });

  it("nombre de usuario válido y una contraseña inválida", () => {
    cy.visit("https://the-internet.herokuapp.com/login");
    login.TypeUsert('tomsmith222')
    login.TypePassworf('SuperSecretPassword!')
    login.ClickBotton()
    login.validatePageText(' Your username is invalid!')
  });

  it("Dejar el campo de nombre de usuario vacío", () => {
    cy.visit("https://the-internet.herokuapp.com/login");
    login.ClickBotton()
    login.validatePageText(' Your username is invalid!')
  });


});
 