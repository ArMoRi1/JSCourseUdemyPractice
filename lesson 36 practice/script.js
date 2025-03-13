"use strict"

const personalMovieDB = { 
	count: 0, 
	movies: {}, 
	actors: {}, 
	genres: [], 
	privat: false, 
	start: function (){
		personalMovieDB.count = +prompt("How many films have you watched?", "");
	
		while(personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)){
			personalMovieDB.count = +prompt("How many films have you watched?", "");
		}
	},

	rememberMyFilms: function (){
		for(let i = 0; i < 2; i++){
			const a = prompt("What was one of the last films that you watched?", ""); 
			const b = prompt("How would you rate this film?", ""); 
			
			if((a != null) && (b != null) && (a != '') && (b != '') && a.length < 50){
				personalMovieDB.movies[a] = b;
				console.log('done');
			} else {
				console.log('error');
				i--;
			}	
		}
	},

	rateMovieCount: function (){
		if (personalMovieDB.count < 10) {
			console.log("You've watched quite a few films");
		} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
			console.log("You're a casual viewer");
		} else if (personalMovieDB.count >= 30) {
			console.log("You're a movie buff");
		} else {
			console.log("An error occurred");
		}
	},
	showDatabase: function (hidden){
		if(!hidden){
			console.log(personalMovieDB);
		}
	},

	toggleVisibleMyDB: function(){
		if(personalMovieDB.privat){
			personalMovieDB.privat = false;
		} else{
			personalMovieDB.privat = true;
		}
	},

	writeYourGenres: function (){
		for(let i = 0; i < 3; i++){
			let genre = prompt(`What is your favorite genre #${i+1}`, "");
			
			if(genre === '' || genre == null){
				console.log('You entered the wrong data!');
				i--
			}else{
				personalMovieDB.genres[i] = genre;
			}
		}
		personalMovieDB.genres.forEach((item, i) =>{
			console.log(`Your favourite genre is ${i+1} - ${item}`);
		})
	},
} 













// start();
// rememberMyFilms();
// rateMovieCount();
// showDatabase(personalMovieDB.privat);
// writeYourGenres();
