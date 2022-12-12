import React from "react";
import Card from "../components/Card/Card";

const albumItem = {
    images: [{
        "#text":
          "https://lastfm.freetls.fastly.net/i/u/174s/d8888f990ce044e4c856550a7041c83e.png",
        size: "large",
    },{
        "#text":
          "https://lastfm.freetls.fastly.net/i/u/174s/d8888f990ce044e4c856550a7041c83e.png",
        size: "large",
    },{
        "#text":
          "https://lastfm.freetls.fastly.net/i/u/174s/d8888f990ce044e4c856550a7041c83e.png",
        size: "large",
    },{
        "#text":
          "https://lastfm.freetls.fastly.net/i/u/174s/d8888f990ce044e4c856550a7041c83e.png",
        size: "large",
    },
  ],
  name: "Views",
  playcount: 33778933,
  url: "https://www.last.fm/music/Drake/Views"
}

export default{
    title:"Card",
    component: Card,
};

const Template = (args) => <Card {...args} />;

export const KanyeWest = Template.bind({});
  KanyeWest.args={
    item: albumItem,
    name: "Kanye West",
  };

  export const Rihanna = Template.bind({});
  Rihanna.args = {
    item:albumItem,
    name: "Rihanna"
  }

export const Eminem = Template.bind({});
Eminem.args = {
  item:albumItem,
  name: "Eminem"
}