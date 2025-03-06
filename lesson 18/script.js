"use strict"
const numberOfFilms = prompt("How many films have you watched?", "");

const personalMovieDB = { 
	count: numberOfFilms, 
	movies: { }, 
	actors:{ }, 
	genres:[], 
	privat: false, 
} 

const theLastWatchedMovie = prompt("What was the last film that you watched?",""); 
const theRateOftheLastWatchedMovie = prompt("How would you rate this film?",""); 

personalMovieDB = { 
	movies:{ 
		theLastWatchedMovie: theRateOftheLastWatchedMovie, 
	},
 };