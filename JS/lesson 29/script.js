"use strict"
let numberOfFilms;
const personalMovieDB = { 
	count: numberOfFilms, 
	movies: {}, 
	actors: {}, 
	genres: [], 
	privat: false, 
} 

function start(){
	numberOfFilms = +prompt("How many films have you watched?", "").trim();

	while(numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)){
		numberOfFilms = +prompt("How many films have you watched?", "").trim();
	}
}

function rememberMyFilms(){
	for(let i = 0; i < 2; i++){
		const a = prompt("What was one of the last films that you watched?", "").trim(); 
		const b = prompt("How would you rate this film?", "").trim(); 
		
		if((a != null) && (b != null) && (a != '') && (b != '') && a.length < 50){
			personalMovieDB.movies[a] = b;
			console.log('done');
		} else {
			console.log('error');
			i--;
		}	
	}
}

function rateMovieCount(){
	if (personalMovieDB.count < 10) {
		console.log("You've watched quite a few films");
	} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
		console.log("You're a casual viewer");
	} else if (personalMovieDB.count >= 30) {
		console.log("You're a movie buff");
	} else {
		console.log("An error occurred");
	}
}



function showDatabase(hidden){
	if(!hidden){
		console.log(personalMovieDB);
	}
	else{

	}
}

function writeYourGenres(){
	for(let i = 0; i < 3; i++){
		personalMovieDB.genres[i] = prompt(`What is your favorite genre #${i+1}`, "");;
	}
}


start();
rememberMyFilms();
rateMovieCount();
showDatabase(personalMovieDB.privat);
writeYourGenres();
