describe("basic test", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("contains correct heading", () => {
    cy.contains("React Mini Projects");
  });

  it("dark mode", () => {
    cy.contains("span", "Toggle theme")
      .closest("button")
      .should("be.visible")
      .and("not.be.disabled")
      .click();

    cy.contains("div", "Dark").click();
    cy.get("html").should("have.attr", "style", "color-scheme: dark;");
    cy.screenshot();
  });

  it("light mode", () => {
    cy.contains("span", "Toggle theme")
      .closest("button")
      .should("be.visible")
      .and("not.be.disabled")
      .click();

    cy.contains("div", "Light").click();
    cy.get("html").should("have.attr", "style", "color-scheme: light;");
    cy.screenshot();
  });
});
