const numbers = [1,2,3,4,5];

const sumArray = (arr) => {
    let sum = 0 ;
    for(let num of arr) {
        sum += num;
    }
    return sum;
}

const total = sumArray(numbers);

console.log(total);