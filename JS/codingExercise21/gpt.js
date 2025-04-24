const users = [
    {name: 'Anna', age: 21},
    {name: 'Ivan', age: 35},
    {name: 'Olga', age: 19}
];
function getUsersNames(data){
    return data.map((user)=>user.name);
}

//------------------------------------------------------
const products = [
    {name: 'Phone', price: 1300},
    {name: 'Tablet', price: 900},
    {name: 'Monitor', price: 1000},
    {name: 'Mouse', price: 300}
];

function getAffordableProducts(products){
    return products.filter((item)=>item.price <= 1000)
}

//------------------------------------------------------

const orders = [
    {id: 1, delivered: true},
    {id: 2, delivered: true},
    {id: 3, delivered: false}
];

function areAllOrdersDelivered(orders){
    return orders.every(item => item.delivered === true);
}

//------------------------------------------------------

const transactions = [
    {amount: 300},
    {amount: -100},
    {amount: 700}
];

function getTotalTransactionAmount(transactions){
    return transactions.reduce((sum, item) => {
        return sum += item.amount;
    }, 0);
}

//------------------------------------------------------
const students = [
    {name: 'Anna', grade: 45},
    {name: 'Ivan', grade: 75},
    {name: 'Olga', grade: 55},
    {name: 'Max', grade: 30}
];
function getPassingStudents(students){
    return students.filter(item => item.grade >= 50);
}

//------------------------------------------------------

const products2 = [
    {name: 'Phone', price: 1300, category: 'electronics'},
    {name: 'Tablet', price: 900, category: 'electronics'},
    {name: 'Shirt', price: 30, category: 'clothing'}
];
function getProductsByCategory(products2, neededCategory){
    return products2.filter(item => item.category === neededCategory);
}


//------------------------------------------------------

const people = [
    {name: "Анна", category: "developer"},
    {name: "Іван", category: "designer"},
    {name: "Марія", category: "developer"}
];

const groupedByCategory = people.reduce((groups, person) => {
    const category = person.category;
    if (!groups[category]){
        groups[category] = [];
    }
    groups[category].push(person);
    return (groups);
},{});
// console.log(groupedByCategory);

//----------------------------------------------------
const words = ['apple', 'banana', 'pineapple', 'orange', 'strawberry'];

function getTheLongest(words){
    return words.reduce((theLongest, current)=>{
        if(current.length > theLongest.length){
            theLongest = current;

        }
        return theLongest;
    })
}

//----------------------------------------------------
// Приклад вхідних даних
const peopleAVGMinMAx = [
    {name: 'Іван', age: 25},
    {name: 'Марія', age: 32},
    {name: 'Олег', age: 17},
    {name: 'Наталя', age: 42}
];

function avgMinMax(people){

    return people.reduce((acc, item, index)=>{
        acc.sum+=item.age;

        if(item.age < acc.min){
            acc.min = item.age;
        }
        if(item.age > acc.max){
            acc.max = item.age;
        }
        acc.avg = acc.sum / people.length;
        if(index === people.length-1){
            delete acc.sum;
        }
        return acc;
    }, {avg: 0, max: -Infinity, min: Infinity, sum: 0});
}

// console.log(avgMinMax(peopleAVGMinMAx));
// Очікуваний результат: {average: 29, max: 42, min: 17}

//----------------------------------------------------

const params = {
    page: 1,
    size: 10,
    sort: 'name',
    filter: 'active'
};

function urlCreating(arr){
    return Object.entries(arr)
        .map(([key, value])=>`${key}=${value}`)
        .join('&');

}
// console.log(urlCreating(params));
// Очікуваний результат: 'page=1&size=10&sort=name&filter=active'


//----------------------------------------------------

// Приклад вхідних даних
const cart = [
    {name: 'Laptop', price: 1200, quantity: 1},
    {name: 'Phone', price: 500, quantity: 2},
    {name: 'Headphones', price: 100, quantity: 3}
];

function findFunc(cart){
    return cart.reduce((acc, item, index)=>{
        acc.totalPrice += item.price * item.quantity;
        acc.totalItems += item.quantity;
        if(cart.length === index+1) {
            acc.avgPrice = Number((acc.totalPrice / acc.totalItems).toFixed(2));
        }
        return acc;
    }, {totalPrice:0, totalItems:0, avgPrice:0});
}

// Очікуваний результат: {totalPrice: 2500, totalItems: 6, averagePrice: 416.67}


//----------------------------------------------------


const studentsGrades = [
    {name: 'Anna', subjects: [{name: 'Math', grade: 75}, {name: 'English', grade: 82}, {name: 'Physics', grade: 58}]},
    {name: 'Ivan', subjects: [{name: 'Math', grade: 64}, {name: 'English', grade: 55}, {name: 'Physics', grade: 70}]},
    {name: 'Olga', subjects: [{name: 'Math', grade: 90}, {name: 'English', grade: 94}, {name: 'Physics', grade: 88}]},
    {name: 'Max', subjects: [{name: 'Math', grade: 45}, {name: 'English', grade: 58}, {name: 'Physics', grade: 62}]}
];

//
// function fourthTask(studentsGrades){
//   return studentsGrades.reduce((acc, student)=>{
//         let indGrades
//
//       // const totalMath  = student.subjects.reduce((sum, subject)=> sum += subject.grade.filter(item => item.name === 'Math'));
//   // const totalEnglish
//       // const totalPhysics
//   });
// }
// console.log(fourthTask(studentsGrades));


function thirdTask(studentsGrades){
    return studentsGrades.reduce((acc, student) =>{
       const total = student.subjects.reduce((sum, subject) =>sum+=subject.grade, 0);
       const avg = Number(total / student.subjects.length).toFixed(2);
        if (avg > acc.avg) {
            return { name: student.name, avg: avg };
        }
       return acc;
    }, {name:'', avg: 0});
}


// console.log(thirdTask(studentsGrades));


function secondTask(studentsGrades){
    return studentsGrades.reduce((acc, student)=>{
        const total = student.subjects.reduce((sum, subject)=> sum += subject.grade, 0)
        let avg;
        avg = Number(total / student.subjects.length).toFixed(2);
        acc.push({name: student.name, avg: avg})
        return acc;
    }, [])
}

console.log(secondTask(studentsGrades));
function firstTask(students) {
    return students.filter(student => student.subjects.every(subject => subject.grade >=60)).map(student => student.name);
}
// console.log(firstTask(studentsGrades));


//---------------------------------------------------------------------
// Напишіть функцію, яка аналізує банківські транзакції за певний період
// і повертає детальну інформацію про доходи, витрати, баланс та категорії витрат

// const transactions = [
//     {id: 1, type: 'income', amount: 1000, category: 'salary', date: '2023-01-15'},
//     {id: 2, type: 'expense', amount: 200, category: 'groceries', date: '2023-01-16'},
//     {id: 3, type: 'expense', amount: 500, category: 'rent', date: '2023-01-20'},
//     {id: 4, type: 'income', amount: 300, category: 'freelance', date: '2023-01-25'},
//     {id: 5, type: 'expense', amount: 150, category: 'groceries', date: '2023-02-03'},
//     {id: 6, type: 'expense', amount: 50, category: 'entertainment', date: '2023-02-10'}
// ];
//
// function analyzeTransactions(transactions, startDate = null, endDate = null) {
//     // Ваш код тут
// }









