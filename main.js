console.log("20 12 14 JS Classes 01 Practice"); // files linked

// Declare a Movie class with properties name, rating, and year released. 
class Movie {
    // Set the value of this properties for each instance in the constructor.
    constructor(movieName, rating, yearReleased){
        this.movieName = movieName;
        this.rating = rating;
        this.yearReleased = yearReleased;
    }
    // The Movie class will also have three methods : outputMovie, changeRating and changeYearReleased. 
    // The outputMovie method will output all movie properties in a formatted string
    outputMovie(){
        console.log(`The movie ${this.movieName} came out in ${this.yearReleased} and has a rating of ${this.rating}`);
    }
    // The changeRating method will accept a new rating an update the rating property of a Movie object.
    changeRating(newRating){
        this.rating = newRating;
        return(`The updated rating is ${this.rating}`);
    }
    // The changeYearReleased method will accept a new year released and update the year released property of a Movie object.
    changeYear(newYear){
        this.yearReleased = newYear;
    }
}
// Create two instances of the movie class with different property values.
let favMovie = new Movie("The Discovery", 5, 2020);
// console.log(favMovie);
favMovie.outputMovie();

// second Movie object
let secondFavMovie = new Movie("Freak", 3, 2019);
secondFavMovie.outputMovie();

// Update the rating 
console.log(favMovie.changeRating(4));

 // update year
favMovie.changeYear(2019);
favMovie.outputMovie();

