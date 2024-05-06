posts.map((item, index) => {
    return {...item, shares: 0}
}).posts.forEach((item, index) => {
    console.log(`
        ${item.username}   | ${item.timestamp}
        IMAGE
        ${item.likes} likes  | ${item.comments.length} comments  | 10shares 
    `);
})
