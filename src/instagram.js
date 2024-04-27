// Instagram Profile
/*

get data 
console.log(profile.username, profile['posts'], profile.followers, profile.bio);

const post = {
    likes: 50431,
    comments: 647,
    username: "kwetsie",
    timeStamp: "15:12"

}

console.log(`${post.username} just posted a photo with ${post.likes} likes`);

modify post
profile.posts = profile.posts + 1;
console.log(profile);

create new key
profile.email = "nonty@gamil.com";
profile.phoneNumber = "0789578667";
console.log(profile);

delete property
delete profile.phoneNumber;
console.log(profile);
*/


const profile = {
    username: "kwetsie",
    posts: 55,
    followers: 488,
    folowing: 144,
    picture: "link",
    fullName: "kwetsimani Mbowane",
    bio: "Some information",
    link: "zaio.io",

    // create a function within an object
    info() {
        return `
        Info for : ${this.username}
        Posts: ${this.posts}
        Followers: ${this.followers}
        Following: ${this.following}
        bio: ${this.bio}
        link: ${this.link} `
    },

    posted() {
        this.posts = this.posts + 1;
        return `${this.username} just posted a photo
        Total number of posts updated to : ${this.posts}
        `;
    }
}


//access info from an object
console.log(profile.info());
console.log(profile.posted());
console.log(profile.posted());
console.log(profile.posted());
// Everytime-a user creates a post

