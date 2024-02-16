class Pagina {
  constructor() {
    this.body = cy.get('body');
  }

  verificaAnchoPaginaEnDispositivo(dispositivo) {
    cy.viewport(dispositivo); // Establece el tamaño del dispositivo
    this.body.should('have.css', 'width', this.getAnchoDispositivo(dispositivo));
  }

  // Función auxiliar para obtener el ancho esperado según el dispositivo
  getAnchoDispositivo(dispositivo) {
    const dispositivos = {
      'iphone-x': '375px',
      'iphone-xs': '414px',
      'ipad-2': '768px',
      'macbook-15': '1440px',
    };

    if (!dispositivos.hasOwnProperty(dispositivo)) {
      throw new Error(`Dispositivo no reconocido: ${dispositivo}`);
    }

    return dispositivos[dispositivo];
  }
}


export const pagina = new Pagina;