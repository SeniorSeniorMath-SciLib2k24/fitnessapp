describe("Contact Us Page E2E Tests", () => {
  beforeEach(() => {
    cy.viewport(1280, 800);
    cy.visit("/");
    cy.contains("Join Now").click();
  });

  it("should display the correct header and description", () => {
    cy.contains("JOIN NOW TO GET IN SHAPE").should("be.visible");
    cy.contains(
      "Send us an email to jumpstart your ethereal transformation. All it takes! One email!",
    ).should("be.visible");
  });

  it("should display the contact form", () => {
    cy.get("form").should("exist");
    cy.get('[placeholder="NAME"]').should("be.visible");
    cy.get('[placeholder="EMAIL"]').should("be.visible");
    cy.get('[placeholder="MESSAGE"]').should("be.visible");
    cy.get("button[type='submit']")
      .should("contain", "SUBMIT")
      .should("be.visible");
  });

  it("requires input for name, email, and message", () => {
    cy.get("button[type='submit']").click();

    cy.get('[placeholder="NAME"]')
      .next("p")
      .should("be.visible")
      .and("contain.text", "This field is required.");
    cy.get('[placeholder="EMAIL"]')
      .next("p")
      .should("be.visible")
      .and("contain.text", "This field is required.");
    cy.get('[placeholder="MESSAGE"]')
      .next("p")
      .should("be.visible")
      .and("contain.text", "This field is required.");
  });

  it("sends form correctly with valid inputs", () => {
    cy.get('[placeholder="NAME"]').type("Megan");
    cy.get('[placeholder="EMAIL"]').type("fake@email.com");
    cy.get('[placeholder="MESSAGE"]').type("please send me the workout");

    cy.contains("SUBMIT").click();

    cy.contains("This field is required.").should("not.exist");
    cy.contains("Max length is 100 characters.").should("not.exist");
    cy.contains("Invalid email address").should("not.exist");
  });

  it("shows errors on invalid input", () => {
    cy.get('[placeholder="NAME"]').type("M".repeat(101));
    cy.get('[placeholder="EMAIL"]').type("invalid@email");
    cy.get('[placeholder="MESSAGE"]').type("please send me the workout");

    cy.contains("SUBMIT").click();

    cy.contains("Max length is 100 characters.").should("be.visible");
    cy.contains("Invalid email address").should("be.visible");
  });

  it("displays the correct contact image", () => {
    cy.get('img[alt="contact-us-page-graphic"]').should("be.visible");
  });
});
