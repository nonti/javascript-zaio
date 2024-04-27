//object destructuring
// the destructuring assignment sysntax is a javascript expression
// that makes it possible to unpack values from arrays,
// or properties from objects, into distinct variables

const profile = {
    username: "kwetsie",
    posts: 55,
    followers: 488,
    following: 144,
    picture: "link",
    fullName: "kwetsimani Mbowane",
    bio: "Some information",
    link: "zaio.io",

    // create a function within an object
    // info() {
         //destructuring
    //     const { username, posts, following, followers, link, bio} = this;
    //     return `
    //     Info for : ${this.username}
    //     Posts: ${this.posts}
    //     Followers: ${this.followers}
    //     Following: ${this.following}
    //     bio: ${this.bio}
    //     link: ${this.link} `
    // },

    posted() {
        this.posts = this.posts + 1;
        return `${this.username} just posted a photo
        Total number of posts updated to : ${this.posts}
        `;
    }
}


//access info from an object
// console.log(profile.info());
// console.log(profile.posted());

const info = (profile) => {
         //destructuring
        const { username, posts, following, followers, link, bio} = profile;
        return `
        Info for : ${this.username}
        Posts: ${this.posts}
        Followers: ${this.followers}
        Following: ${this.following}
        bio: ${this.bio}
        link: ${this.link} `
}
    console.log(profile);