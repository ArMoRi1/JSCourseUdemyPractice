const funds = [
	{amount: -1400},
	{amount: 2400},
	{amount: -1000},
	{amount: 500},
	{amount: 10400},
	{amount: -11400}
];

const getPositiveIncomeAmount = (data) => {
	const arr = data.map(item => item.amount)
		.filter(item => item > 0);
	let sum = 0;
	arr.forEach((item)=>{
		sum +=item;
	});
	return sum;
};


// console.log(getPositiveIncomeAmount(funds));
const getTotalIncomeAmount = (data) => {
	if(data.some(item => item.amount<0)){
		return data.reduce((sum, item)=>{
			return sum+=item.amount;
		}, 0);

	}else{
		return getPositiveIncomeAmount(funds);
	}
};

console.log(getTotalIncomeAmount(funds));