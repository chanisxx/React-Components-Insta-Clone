const dummyData = [
    {
        username: "philzcoffee",
        thumbnailUrl: 'https://icon2.cleanpng.com/20180320/sqe/kisspng-twitch-computer-icons-streaming-media-youtube-live-tv-twitch-icon-5ab19172461392.001176751521586546287.jpg',
        imageUrl: 'https://images.unsplash.com/photo-1477763858572-cda7deaa9bc5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1876&q=80',
        likes: 400,
        timestamp: "July 17th 2017, 12:42:40 pm",
        comments: [
            {
                username: "philzcoffee",
                text: "We've got more than just coffees!"
            },
            {
                username: "biancasaurus",
                text: "Looks delicious!"
            },
            {
                username: "martinseludo",
                text: "Can't wait to try it!"
            }
        ]
    },
    {
        username: "twitch",
        thumbnailUrl: 'https://icon2.cleanpng.com/20180320/sqe/kisspng-twitch-computer-icons-streaming-media-youtube-live-tv-twitch-icon-5ab19172461392.001176751521586546287.jpg',
        imageUrl: 'https://images.unsplash.com/photo-1566577134770-3d85bb3a9cc4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3750&q=80',
        likes: 4307,
        timestamp: "July 15th 2017, 03:12:09 pm",
        comments: [
            {
                username: "twitch",
                text: "Epic Street Fighter action here in Vegas!"
            },
            {
                username: "michaelmarzetta",
                text: "Omg that match was crazy"
            },
            {
                username: "themexican_leprechaun",
                text: "What a setup"
            },
            {
                username: "dennis_futbol",
                text: "It that injustice"
            }
        ]
    }
];

// console.log(dummyData.length);
// console.log(dummyData[0].comments[0].text);
// console.log(dummyData[1]);

// const newArray = dummyData.forEach(item => {
//     item.comments.forEach(object => {
//         console.log(object.text);
//     })
// })

// const theArray = dummyData.forEach(element => {
//     console.log(element.timestamp);
// })

// const anArray = dummyData.forEach(value => {
//     value.comments.forEach(item => {
//         console.log(item.username);
//     })
// })

// const newArray = dummyData.map(element => {
//     return element.timestamp;
// })


export default dummyData;
