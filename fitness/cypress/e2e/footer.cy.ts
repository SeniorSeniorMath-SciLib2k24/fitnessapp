describe("Footer Tests", () => {
  beforeEach(() => {
    cy.viewport(1280, 800);
    cy.visit("/");
    cy.get("footer").scrollIntoView();
  });

  it("displays the logo", () => {
    cy.get("footer img[alt='logo']").should("be.visible"); // Check if the logo is visible
  });

  it("displays the commitment message", () => {
    cy.contains(
      "At Megan's Gym, we are committed to helping you meet your fitness goals.",
    ).should("be.visible");
  });

  it("displays the copyright message", () => {
    cy.contains("© Megan's Gym. All Rights Reserved.").should("be.visible");
  });

  it("contains quick links with correct texts", () => {
    const quickLinks = [
      "Home",
      "Benefits",
      "Our Classes",
      "Contact Us",
      "Workouts",
    ];
    quickLinks.forEach((link) => {
      cy.contains(link).should("be.visible");
    });
  });

  it("navigates to the correct sections when quick links are clicked", () => {
    cy.contains("Home").click();
    cy.get(`a[href="#home"]`).should("have.class", "text-primary-500");

    cy.contains("Benefits").click();
    cy.get(`a[href="#benefits"]`).should("have.class", "text-primary-500");

    cy.contains("Our Classes").click();
    cy.get(`a[href="#ourclasses"]`).should("have.class", "text-primary-500");

    cy.contains("Contact Us").click();
    cy.get(`a[href="#contactus"]`).should("have.class", "text-primary-500");

    cy.contains("Workouts").click();
    cy.get(`a[href="#workouts"]`).should("have.class", "text-primary-500");
  });

  it("displays the 'Reach Us' section", () => {
    cy.contains("Reach Us").should("be.visible");
  });

  it("displays the address and checks its link", () => {
    cy.contains("221b Baker St, Marylebone, London NW1 6XE")
      .should("be.visible")
      .should(
        "have.attr",
        "href",
        "https://maps.google.com/?q=221b+Baker+St,+Marylebone,+London+NW1+6XE",
      );
  });

  it("displays the phone number and checks its link", () => {
    cy.contains("020 7224 3688")
      .should("be.visible")
      .should("have.attr", "href", "tel:02072243688");
  });
});
