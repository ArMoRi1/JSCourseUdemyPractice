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

console.log(findFunc(cart));
// Очікуваний результат: {totalPrice: 2500, totalItems: 6, averagePrice: 416.67}
