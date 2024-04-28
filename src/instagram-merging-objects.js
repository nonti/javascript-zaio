//merging object
const profile = {
    username: "",
    email: "",
    password: "",
    posts: 0,
    followers: 0,
    following: 0,
    picture: "",
    fullName: "",
    bio: "",
    link: "",
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
};

const signedUpUser = {
    username: "kwesie",
    email: "kwesi@gmail.com",
    password: "redgt9nw!"
}


//with the {} we have merged a new object
const newUser = Object.assign({}, profile, signedUpUser);
newUser.password = "417hdfy";
console.log("combinedObjects", newUser);
console.log("emptyProfileObject ", profile);
console.log("signUpObject ", signedUpUser);


const signedUpUser2 = {
    username: "kwesie",
    email: "kwesi@gmail.com",
    password: "redgt9nw!"
}