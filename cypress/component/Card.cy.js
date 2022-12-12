/* eslint-disable no-undef */
import { mount } from "cypress/react18";
import Card from "../../src/components/Card/Card"

describe("Artist Test", () => {
  beforeEach(() => {
    mount(
      <Card
        item={{
          image: [
            {
              "#text":
                "https://lastfm.freetls.fastly.net/i/u/174s/2a96cbd8b46e442fc41c2b86b821562f.png",
              size: "large",
            },
            {
              "#text":
                "https://lastfm.freetls.fastly.net/i/u/174s/2a96cbd8b46e442fc41c2b86b821562f.png",
              size: "large",
            },
            {
              "#text":
                "https://lastfm.freetls.fastly.net/i/u/174s/2a96cbd8b46e442fc41c2b86b821562f.png",
              size: "large",
            },
            {
              "#text":
                "https://lastfm.freetls.fastly.net/i/u/174s/2a96cbd8b46e442fc41c2b86b821562f.png",
              size: "large",
            },
          ],

          name: "Drake",
          listeners: 3665219,
          url: "https://www.last.fm/music/Drake",
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
    cy.get(".name").should("have.css", "margin-bottom", "22.1776px");
    cy.get(".name").should("have.css", "margin-top", "22.1776px");
  });

  it("listeners testing", () => {
    cy.get(".playcount").should("be.visible");
    cy.get(".playcount").should("have.css", "margin-left", "0px");
  });
});