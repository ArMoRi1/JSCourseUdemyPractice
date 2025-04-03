'use strict';

const films = [
	{
		name: 'Titanic',
		rating: 9
	},
	{
		name: 'Die hard 5',
		rating: 5
	},
	{
		name: 'Matrix',
		rating: 8
	},
	{
		name: 'Some bad film',
		rating: 4
	}
];

function showGoodFilms(arr) {
	arr = arr.filter( item => item.rating >= 8);
	return arr;
}

function showListOfFilms(arr) {
	return arr.map(item => item.name).join(', ');
}

function setFilmsIds(arr) {
	return arr.map((item, index) =>{
		item.id = index;
		return item;
	});

}

const tranformedArray = setFilmsIds(films);

function checkFilms(arr) {
	return arr.every((item)=>item.id !== null);
}

checkFilms(tranformedArray);