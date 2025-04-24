const family = ['Peter', 'Ann', 'Alex', 'Linda'];

function showFamily(arr) {
    if(arr.length === 0){
        return "Семья пуста";
    } else{
       return `Семья состоит из: ${arr.slice().join(" ")}`;
    }
    
}

const favoriteCities = ['liSBon', 'ROME', 'miLan', 'Dublin'];

function standardizeStrings(arr) {
    arr.forEach(city =>{
       console.log(city.toLowerCase());
    });
}

console.log(standardizeStrings(favoriteCities));