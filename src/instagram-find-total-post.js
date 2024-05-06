//create posts array for the feed
//populate this object with one post object

const post = {
    id: "1",
    likes: 0,
    username: "kwesie",
    timestamp: "15:45",
    comments: []
};

const postsInKenya = [
    {
        id: "0",
        likes: 20,
        username: "kwesie",
        timestamp: "15:45",
        comments: [
            {
                username: "kwesie",
                comment: "Nice picture",
                id: "xhbjjdsASDddsa",
            },
        ],
    },
];
const postsInSouthAfrica = [];

postsInSouthAfrica.push(
    post,
    {
        id: "2",
        likes: 0,
        username: "nonty",
        timestamp: "15:48",
        comments: []
    },
    {
        id: "3",
        likes: 0,
        username: "kwetzy",
        timestamp: "15:50",
        comments: []
    },
    {
        id: "4",
        likes: 0,
        username: "leeane",
        timestamp: "15:58",
        comments: []
    },
    {
        id: "5",
        likes: 0,
        username: "fedora",
        timestamp: "16:15",
        comments: []
},
);

const totalPost = [...postsInKenya, ...postsInSouthAfrica];
console.log(postsInKenya, postsInSouthAfrica);

