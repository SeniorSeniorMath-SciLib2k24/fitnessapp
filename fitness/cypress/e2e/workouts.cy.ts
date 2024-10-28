describe("Workouts Page", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.contains("Workouts").click();
  });

  it("displays the Workouts section with the correct iframe", () => {
    cy.get("section#workouts").should("be.visible");
    cy.get("iframe[title='Workouts']")
      .should("be.visible")
      .and("have.attr", "src", "https://comp491-todolist.netlify.app/");
  });
});
