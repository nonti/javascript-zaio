/**
    we have a netflix movies library
    dreat a movie class that had the following 
    attributes: id, title, starring, genres
    functions: addGenre(genre), addStars(...stars)
 */

class Movie {
    constructor(id, title, starring =[], genres = []) {
        this.id = id;
        this.title = title;
        this.starring = starring;
        this.genres = genres;
    }

    addGenre(...genre) {
        this.genres = [...genres, ...genre];
        console.log(this.genres);
    }

    addStars(...stars) {
        this.starring = [...this.starring, ...stars];
        console.log(this.stars);
    }
}

const harryPotter = new Movie(1, "Harry Potter 1");
harryPotter.addGenre = ("Drama", "Adventure", "Mystery");
harryPotter.addStars("Emma Watson", "Daniel Radcliffe");
console.log(harryPotter);