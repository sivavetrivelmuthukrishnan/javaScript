// Using the same function with multiple objects

var movie1;
var movie2;
var movie3;
var movie;
var showMovieInfo;

movie1 = {
    title: "Inside Out",
    actors: "Amy Poehler, Bill Hader",
    directors: "Pete Doctor, Ronaldo Del Carmen"
};

movie2 = {
    title: "Spectre",
    actors: "Daniel Craig, Christoph Waltz",
    directors: "Sam Mendes"
};

movie3 = {
    title: "Star Wars: Episode VII - The Force Awakens",
    actors: "Harrison Ford, Mark Hamill, Carrie Fisher",
    directors: "J.J.Abrams"
};

showMovieInfo = function () {
    console.log("Movie information for " + movie.title);
    console.log("------------------------------");
    console.log("Actors: " + movie.actors);
    console.log("Directors: " + movie.directors);
    console.log("------------------------------");
};

movie = movie1;
showMovieInfo();

movie = movie2;
showMovieInfo();

movie = movie3;
showMovieInfo();
var quiz;
var quiz1;
var quiz2;
var quiz3;

quiz1 = {
    question : "Who won 2024 t20 cricket cup ?",
    Option1 : "India",
    Option2 : "SA",
    Option3 : "WI",
    Option4 : "Aus",

}

quiz2 = {
    question : "Who was runner up in 2024 t20 cricket cup ?",
    Option1 : "India",
    Option2 : "SA",
    Option3 : "WI",
    Option4 : "Aus",

}

quizinfo = function() {
    console.log("Multiple choice qutions  ");
    console.log("Question " + quiz.question);
    console.log("(option 1) " + quiz.Option1);
    console.log("(option 2) " + quiz.Option2);
    console.log("(option 3) " + quiz.Option3);
    console.log("(option 4) " + quiz.Option4);

   
}
quiz = quiz1;
quizinfo()

quiz = quiz2;
quizinfo()

/* Further Adventures
 *
 * 1) Create an object to represent
 *    a multiple choice quiz question.
 *
 * 2) Create two more quiz question objects.
 *
 * 3) Create a function to show
 *    the question and answer options.
 *
 * 4) Use the same variable assignment technique
 *    as above to display all three questions
 *    on the console.
 *
 */