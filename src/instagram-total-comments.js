//create posts array for the feed
//populate this object with one post object

const post = {
    id: "1",
    likes: 0,
    username: "kwesie",
    timestamp: "15:45",
    comments: []
};

const posts = [
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

posts.push(
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

posts.pop();
console.log(posts);

//add a new property called shares and new prop to all posts
const postWithShaare = posts.map((item, index) => {
    return {...item, shares: 0, duration: 0}
})
console.log(postWithShaare);
//Filter
console.log(posts.filter((item, index) => (item.likes > 50)));
console.log(posts.filter((item, index) => (item.comments.length === 0 )));

//Find
console.log(posts.find((item) => {
    return item.id == 0;
}));

// Reduce 
console.log(posts.reduce((acc, item) => acc += item.likes , 0));
let acc = 0;
for (let i = 0; i < posts.length; i++) {
    acc = acc + posts[i].likes;
}
console.log(acc);

posts.reduce((acc, item) => acc += item.comments.length, 0);




//Add new prop to all posts
console.log(posts.map((item, index) => {
    return {...item, duration: 0}
}));

posts.find((item, index) => item.username === "akhilboddu");

