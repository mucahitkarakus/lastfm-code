/* eslint-disable no-undef */
import { mount } from "cypress/react18";
import Card from "../../src/components/Card/Card"

describe("Card Test", () => {
  beforeEach(() => {
    mount(
      <Card
        item={{
          image: [
            {
              "#text":
                "https://lastfm.freetls.fastly.net/i/u/174s/b04745bef612d93a78a6c336eef830c8.png",
              size: "large",
            },
            {
              "#text":
                "https://lastfm.freetls.fastly.net/i/u/174s/b04745bef612d93a78a6c336eef830c8.png",
              size: "large",
            },
            {
              "#text":
                "https://lastfm.freetls.fastly.net/i/u/174s/b04745bef612d93a78a6c336eef830c8.png",
              size: "large",
            },
            {
              "#text":
                "https://lastfm.freetls.fastly.net/i/u/174s/b04745bef612d93a78a6c336eef830c8.png",
              size: "large",
            },
          ],
          
          name: "Views",
          playcount: 33778933,
          url: "https://www.last.fm/music/Drake/Views",
        }}
        name="Drake"
      />
    );
  });

  it("image test", () => {
    cy.get(".image").should("be.visible");
    cy.get(".image").should("have.css", "height", "174px");
    cy.get(".image").should("have.css", "width", "174px");
  });

  it("name testing", () => {
    cy.get(".name").should("be.visible");
    cy.get(".name").should("have.css", "font-size", "13.28px");
    cy.get(".name").should("have.css", "font-weight", "700");
  });

  it("listeners testing", () => {
    cy.get(".playcount").should("be.visible");
    cy.get(".playcount").should("have.css", "font-size", "16px");
  });
});