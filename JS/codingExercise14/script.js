const students = ['Peter', 'Andrew', 'Ann', 'Mark', 'Josh', 'Sandra', 'Cris', 'Bernard', 'Takesi', 'Sam'];

function sortStudentsByGroups(arr) {
    let team1 = [],
        team2 = [],
        team3 = [],
        extra = [];  // Масив для залишкових студентів
    let sortedArray = arr.slice().sort();

    // Розподіл студентів по групах
    for (let i = 0; i < sortedArray.length; i++) {
        if (i < 3) {
            team1.push(sortedArray[i]);
        } else if (i < 6) {
            team2.push(sortedArray[i]);
        } else if (i < 9) {
            team3.push(sortedArray[i]);
        } else {
            extra.push(sortedArray[i]);  // Додаємо залишкових студентів до масиву extra
        }
    }

    // Використовуємо тернарний оператор для формування рядка з залишковими студентами
    return [
        team1, 
        team2, 
        team3, 
        `Оставшиеся студенты: ${extra.length === 0 ? '-' : extra.join(', ')}`
    ];
}

console.log(sortStudentsByGroups(students));
