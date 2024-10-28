/// <reference types="cypress" />

describe("Benefits page E2E Tests", () => {
  beforeEach(() => {
    cy.viewport(1280, 800); // desktop view
    cy.visit("/");
    cy.contains("Benefits").click();
  });

  it("should load the benefits page and display the main sections", () => {
    cy.get("section#benefits").should("be.visible");
    cy.contains("MORE THAN JUST WORKOUTS.").should("be.visible");
    cy.contains(
      "Our workout plan can provide a total lifestyle revamp. Don't worry about your enemies - they'll be so impressed by your muscles that they'll bow to your feet. You'll live so long it'll just be you and the stars someday. Your brain will grow three sizes and so will your heart - like the Grinch!",
    ).should("be.visible");
    cy.contains("Impress people").should("be.visible");
    cy.contains(
      "Do a lot of pushups, which will make people say 'wow'!",
    ).should("be.visible");
    cy.contains("Strong Muscles").should("be.visible");
    cy.contains("Lift heavy things.").should("be.visible");
    cy.contains("Live Longer").should("be.visible");
    cy.contains(
      "Workouts can help you live past the heat death of the sun!",
    ).should("be.visible");

    // Select each benefit card and confirm it contains an SVG icon
    cy.get(".mt-5.rounded-md").each(($el) => {
      cy.wrap($el).find("svg[data-slot='icon']").should("be.visible");
      cy.wrap($el).contains("Learn More").should("be.visible");
    });

    cy.get('img[alt="benefits-page-graphic"]').should("be.visible");
    cy.contains("MILLIONS OF HAPPY GYM-GOERS YIPEE!").should("be.visible");
    cy.contains(
      "At Megan's Gym, we focus on helping our members achieve their fitness dreams and more! Lift a car! Punch through a mountain! Do it all!",
    ).should("be.visible");
    cy.contains(
      "Follow our workout plan and you'll be stronger than One-Punch-Man! That's a Megan Guarantee. Push Sisyphus's rock all the way up the hill!",
    ).should("be.visible");
    cy.get(".before\\:content-abstractwaves").should("be.visible");
    cy.get(".before\\:content-sparkles").should("be.visible");
    cy.get("section#benefits")
      .find('a[href="#contactus"]')
      .contains("Join Now")
      .should("be.visible");
  });

  it('should navigate to Contact Us on "Join Now" button click and apply active styling', () => {
    cy.get("section#benefits")
      .find('a[href="#contactus"]')
      .contains("Join Now")
      .should("be.visible")
      .click();
    cy.get(`a[href="#contactus"]`).should("have.class", "text-primary-500");
  });

  it('should navigate to Contact Us on "Learn More" button click and apply active styling', () => {
    cy.get(".mt-5.rounded-md").each(($el) => {
      cy.wrap($el).find("svg[data-slot='icon']").should("be.visible");
      cy.wrap($el).contains("Learn More").should("be.visible").click();
      cy.get(`a[href="#contactus"]`).should("have.class", "text-primary-500");
    });
  });
});
