class dropdown {
    Elements = {
        dropdown: () => cy.get('#dropdown') ,
        title: () => cy.get('#password') ,
    }


Select() {
this.Elements.dropdown().Select()
}
}




export const Dropdown = new dropdown;