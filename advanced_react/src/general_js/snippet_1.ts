function addUptoTheNumber(number: number) {

    let total: number = 0

    for (let i = 1; i <= number; i++) {
        total += i;
    }

    return total;
}

const t1 = performance.now();
console.log(addUptoTheNumber(1031312121));
const t2 = performance.now();
console.log((t2 - t1) * 1000);

function addUptoTheNumber2(number: number) {
    return number * (number + 1) / 2;
}
const t11 = performance.now();
console.log(addUptoTheNumber2(1031312121));
const t21 = performance.now();
console.log((t21 - t11) * 1000);

function addUptoTheNumber3(number: number) {
    if (number % 2 === 0) {
        return number * (number / 2) + number / 2;
    } else {
        const previousNumber = number - 1;
        return (previousNumber * (previousNumber / 2)) + (number + previousNumber / 2);
    }
}


const t12 = performance.now();
console.log(addUptoTheNumber3(1031312121));
const t22 = performance.now();
console.log((t22 - t12) * 1000);
