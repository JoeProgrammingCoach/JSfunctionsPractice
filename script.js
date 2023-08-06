/*const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const sortedNums = numbers.filter((number) => number > 5 )

const content = document.querySelector('.content')

sortedNums.map(number => {
})

console.log(sortedNums)


let wizards = ['Hermione', 'Neville', 'Gandalf'];


content.innerHTML = wizards.map(function (wizard) {
	return '<li>' + wizard + '</li>';
}).join('');

/*content.innerHTML = sortedNums.forEach(num => {
return '<div>' + num + '</div>'
}) 

content.innerHTML = sortedNums.map(function (num)
{
return '<div>' + num + '</div>'
}).join('')

/*content.innerHTML = sortedNums.map((num) => {
    return '<div>' + num + '</div>'
}).join('') 
*/

let numbs = [1, 2, 3, 4, 5],
    tootal = 0;
      
numbs.forEach(function (numbah) {
    tootal += numbah;
});
console.log(tootal); // 15

const total = [1, 2, 3, 4, 5].reduce(function (previous, current) {
    return previous + current;
}, 10);
console.log(total); // 15


const fiveNums = [1, 2, 3, 4, 5]

const subtractFromHundred = fiveNums.reduce(function(prev, current) {
return prev - current
}, 100)
console.log("Value for fiveNums is " + subtractFromHundred)




const numbersArr = [67, 90, 100, 37, 60];

const ttotal = numbersArr.reduce(function(accumulator, currentValue){
    console.log("accumulator is " + accumulator + " current value is " + currentValue);
    return accumulator + currentValue;
}, 0);

console.log("total : "+ ttotal);