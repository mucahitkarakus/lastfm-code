import {mount} from "cypress/react18";
import Card from "../../src/components/Card/Card";

describe("Album Test", () => {
    beforeEach(() => {
      mount(
        <Card
          item={{
            image: [
              {
                "#text":
                  "https://lastfm.freetls.fastly.net/i/u/174s/16255aa135b04922a5a4ed8535e206d4.png",
                size: "large",
              },
              {
                "#text":
                  "https://lastfm.freetls.fastly.net/i/u/174s/16255aa135b04922a5a4ed8535e206d4.png",
                size: "large",
              },
              {
                "#text":
                  "https://lastfm.freetls.fastly.net/i/u/174s/16255aa135b04922a5a4ed8535e206d4.png",
                size: "large",
              },
              {
                "#text":
                  "https://lastfm.freetls.fastly.net/i/u/174s/16255aa135b04922a5a4ed8535e206d4.png",
                size: "large",
              },
            ],
            name: "The Eminem Show",
            playcount: 36127152,
            url: "https://www.last.fm/music/Eminem/The+Eminem+Show",
          }}
          name="Eminem"
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