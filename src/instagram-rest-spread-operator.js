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
};


// spread... creates a new copy
const newUser = { ...profile, ...signedUpUser };
newUser.password = "417hdfy";
console.log("combinedObject", newUser);
console.log("emptyProfileObject ", profile);
console.log("signUpObject ", signedUpUser);


// rest ... gets the rest of the parameters 
function sum(a, b, ...args) {
    //sum all the parameters /arguments
    console.log(a , b ,args);
}

sum(22, 55, 77, 41, 56, 24, 89);