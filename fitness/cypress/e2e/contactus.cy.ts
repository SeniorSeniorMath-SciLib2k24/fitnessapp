describe("template spec", () => {
  beforeEach(() => {
    cy.viewport(1280, 800);
    cy.visit("/");
    cy.contains("Join Now").click();
  });

  it("Requires input", () => {
    cy.get('[placeholder="NAME"]').should("be.empty");
    cy.get('[placeholder="EMAIL"]').should("be.empty");
    cy.get('[placeholder="MESSAGE"]').should("be.empty");

    // cy.contains('This field is required').should('not.be.visible')
    cy.get('button[type="submit"]').click();

    // name
    cy.get('[placeholder="NAME"]')
      .next("p")
      .should("be.visible")
      .and("contain.text", "This field is required.");

    // email
    cy.get('[placeholder="EMAIL"]')
      .next("p")
      .should("be.visible")
      .and("contain.text", "This field is required.");

    // message
    cy.get('[placeholder="MESSAGE"]')
      .next("p")
      .should("be.visible")
      .and("contain.text", "This field is required.");
  });

  it("Sends Form Correctly", () => {
    cy.get('[placeholder="NAME"]').type("Megan");
    cy.get('[placeholder="NAME"]').should("have.value", "Megan");

    cy.get('[placeholder="EMAIL"]').type("fake@email.com");
    cy.get('[placeholder="EMAIL"]').should("have.value", "fake@email.com");

    cy.get('[placeholder="MESSAGE"]').type("please send me the workout");
    cy.get('[placeholder="MESSAGE"]').should(
      "have.value",
      "please send me the workout",
    );

    cy.contains("SUBMIT").click();
  });

  it("Error on max character length", () => {
    cy.get('[placeholder="NAME"]').type(
      "Meganhfhsjsdjdkkdjkjfkhjfhfdhfhdsjdskddjkjkdjdfjdjdjddjdjjdkjkdjdkjdjkdjddkjdkjdkjdjkdjkdjkdjkddkjdjkjdkkjdkjddsdhkhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh",
    );
    // cy.get('[placeholder="NAME"]').should('have.value', 'Megan')

    cy.get('[placeholder="EMAIL"]').type("fake@email");
    cy.get('[placeholder="EMAIL"]').should("have.value", "fake@email");

    cy.get('[placeholder="MESSAGE"]').type("please send me the workout");
    cy.get('[placeholder="MESSAGE"]').should(
      "have.value",
      "please send me the workout",
    );

    cy.contains("SUBMIT").click();

    cy.contains("Max length is 100 characters.");
    cy.contains("Invalid email address");

    // cy.get('#form-validation').within(() => {
    //   // at first both input elements are invalid
    //   cy.get('input:invalid').should('have.length', 2)

    //   cy.log('**enter the item**')
    //   cy.get('#item').type('push pin')
    //   cy.get('input:invalid').should('have.length', 1)
    // })
  });
});
