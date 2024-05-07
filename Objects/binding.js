
const isAuthenticated = true;
let user = {
    wishlist : []
}

class Product{
    constructor(name, price) {
        this.name = name;
        this.price = price;
        this.addToWishlist = this.addToWishlist.bind(this);
    }

    handleAddToWishlist() {
        if (isAuthenticated) {
            setTimeout(this.addToWishlist, 1000);
        }
        else {
            console.log("Please sign in to add items to the wishlist")
        }
    }

    addToWishlist() {
        user.wishlist.push(this.name);
        console.log(`${this.name} has been added to wishlist`);
        console.log(user.wishlist);
    }
}

const product = new Product("bat", 20);
console.log(product.handleAddToWishlist());
console.log(user.wishlist);