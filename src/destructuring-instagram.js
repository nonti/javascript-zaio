

const post = {
    likes: 20,
    username: "kwesie",
    timeStamp: "14:25",
    comments: 25
}
//do object structuring 
const { username, likes, timeStamp, comments } = post;
console.log(`${post.username} just posted a photo with ${post.likes} likes
            it was posted at ${post.timeStamp}, and currently has ${post.comments} comments`);