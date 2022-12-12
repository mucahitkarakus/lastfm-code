import React from 'react'
import ArtistList from '../components/ArtistList/ArtistList';

const AlbumItem = {
    image: [{
        '#text':
        'https://www.last.fm/music/SZA/_/Good+Days',
        size: "medium"
     },
    {
        '#text':
        'https://www.last.fm/music/SZA/_/Good+Days',
        size: "medium"
     },
    {
        '#text':
        'https://www.last.fm/music/SZA/_/Good+Days',
        size: "medium"
     },
    {
        '#text':
        'https://www.last.fm/music/SZA/_/Good+Days',
        size: "medium"
     },
    {
        '#text':
        'https://www.last.fm/music/SZA/_/Good+Days',
        size: "medium"
     },    
    ],
    name:"Sza",
    playcoun: 9212906,
    url:'https://www.last.fm/music/SZA'
};

export default{
    title: "album",
    component: ArtistList,
};

const Template = (args) => <ArtistList {...args} />;

export const Drake = Template.bind({});
Drake.args={
    item: AlbumItem,
    name: "Drake"
};

export const TaylorSwift= Template.bind({});
TaylorSwift.args={
    item:AlbumItem,
    name: "Taylor Swift"  
}

export const TheWeeknd = Template.bind({});
TheWeeknd.args={
    item:AlbumItem,
    name:"The Weeknd"
}