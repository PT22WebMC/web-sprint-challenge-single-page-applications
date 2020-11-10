describe("Testing the pizza order form", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });
  it("Fills out the form", () => {
    const name = "Melanie";
    const address = "86-04 150th St.";
    const price1 = "$17.99";
    const price2 = "$17.99";
    const price3 = "$17.99";
    cy.get(".homePage-button").click();
    cy.get('[placeholder="Full Name"]').type(name).should("have.value", name);
    cy.get('[name="address"]').type(address).should("have.value", address);

    cy.get('[name="chicken"], [name="mushroom"]').check().should("be.checked"); //and it passes

    cy.get("#select-tag")
      .select(`Small ${price1}`)
      .should("have.value", "small");

    cy.get("form").submit();
  });
});
