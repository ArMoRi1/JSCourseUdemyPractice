

"use strict"
const numberOfFilms = +prompt("How many films have you watched?", "");

const personalMovieDB = { 
	count: numberOfFilms, 
	movies: { }, 
	actors:{ }, 
	genres:[], 
	privat: false, 
} 

for(let i=0; i<2; i++){
	const a = prompt("What was one of the last films that you watched?",""); 
	const b = prompt("How would you rate this film?",""); 
	
	if(	(a!=null) && (b!=null) && (a!='') &&(b!='') && a.length < 50){
		personalMovieDB.movies[a] =  b;
		console.log('done');
	}
	else{
		console.log('error');
		i--;
	}	
}


console.log(personalMovieDB);