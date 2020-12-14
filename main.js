console.log("20 12 14 JS Classes 01 Practice"); // files linked

// movie class with properties name, rating, and year released
class Movie {
    constructor(name, rating, yearReleased){
        this.name = name;
        this.rating = rating;
        this.yearReleased = yearReleased;
    }
    // CLASS METHODS
    // output all movie properties in a formatted string
    outputMovie(){
        console.log(`The movie ${this.name} came out in ${this.yearReleased} and has a rating of ${this.rating}`);
    }
    // accept a new rating and update the rating property
    changeRating(newRating){
        this.rating = newRating;
    }
    // accept a new year released and update the year released property\
    changeYear(newYear){
        this.yearReleased = newYear;
    }
}

// Create two instances of the movie class with different property values. 
let favMovie = new Movie("The Discovery", "5 Stars", "2019");
let secondFavMovie = new Movie("Freak", "3 stars", "2017");

// // Call the outputMovie method on both movies.
favMovie.outputMovie();
secondFavMovie.outputMovie();

// Update the rating and the year released
favMovie.changeYear("2020");
favMovie.outputMovie();
favMovie.changeRating("4 stars");
favMovie.outputMovie();