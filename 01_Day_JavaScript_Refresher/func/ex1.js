// Declare a function fullName and it takes firstName, lastName as a parameter and it returns your full - name.
function fullName(firstName, lastName) {
    return `Your full name: ${firstName} ${lastName}`
}
console.log(fullName('Duong', 'Bui'));

// Declare a function addNumbers and it takes two two parameters and it returns sum.
function addNumbers(firstNum, secondNum) {
    return firstNum + secondNum;
}
console.log(addNumbers(1, 2));

// Area of a circle is calculated as follows: area = π x r x r. Write a function which calculates _areaOfCircle
function calCircleArea(radius) {
    return Math.PI * radius * radius
}
console.log(calCircleArea(10));

// Temperature in oC can be converted to oF using this formula: oF = (oC x 9/5) + 32. 
// Write a function which convert oC to oF convertCelciusToFahrenheit.
function ceciusToF(cecius) {
    return (cecius * 9 / 5) + 32
}
console.log(ceciusToF(36));

/**
 * Body mass index(BMI) is calculated as follows: bmi = weight in Kg / (height x height) in m2. 
 * Write a function which calculates bmi. 
 * BMI is used to broadly define different weight groups in adults 20 years old or older.
 * Check if a person is underweight, normal, overweight or obese based the information given below.
    The same groups apply to both men and women.
    Underweight: BMI is less than 18.5
    Normal weight: BMI is 18.5 to 24.9
    Overweight: BMI is 25 to 29.9
    Obese: BMI is 30 or more
 */
function bmiCalculate(weight, height) {
    const bmi = weight / (height * height)
    switch (true) {
        case bmi < 18.5: return 'Underweight'
        case (18.5 <= bmi) && (bmi <= 24.9): return 'Normal weight'
        case 25 <= bmi && bmi <= 29.9: return 'Over weight'
        default: return "obese"
    }
}
console.log(bmiCalculate(58, 1.7));

// Write a function called checkSeason, it takes a month parameter and 
// returns the season:Autumn, Winter, Spring or Summer.
function checkSeason(month) {
    if (1 <= month && month <= 3) return 'spring'
    if (4 <= month && month <= 6) return 'summer'
    if (7 <= month && month <= 9) return 'autumn'
    if (10 <= month && month <= 12) return 'winter'
}

console.log(checkSeason(3));


//level 2
// Quadratic equation is calculated as follows: ax2 + bx + c = 0. 
// Write a function which calculates value or values of a quadratic equation, solveQuadEquation.

function solveQuadEquation(a, b, c) {
    const delta = b * b - 4 * a * c
    if (delta < 0) return 'No real roots'

    const x1 = (-b + Math.sqrt(delta)) / (2 * a)
    const x2 = (-b - Math.sqrt(delta)) / (2 * a)
    return { x1, x2 }

}

console.log(solveQuadEquation(1, 2, -3));

// Declare a function name printArray. It takes array as a parameter and it prints out each value of the array.
const printArray = function (array = []) {
    array.forEach((element) => console.log(element))
}
printArray([1, 2])

// Write a function name showDateTime which shows time in this format: 08/01/2020 04:08 using the Date object.
const showDateTime = function () {
    const now = new Date()
    const day = now.getDate().toString().padStart(2, '0')
    const month = (now.getMonth() + 1).toString().padStart(2, '0')
    const year = now.getFullYear().toString()

    const hour = now.getHours().toString().padStart(2, '0')
    const minute = now.getMinutes().toString(2, '0')
    console.log(`${day}/${month}/${year} ${hour}:${minute}`);
}
showDateTime()

// Declare a function name swapValues. This function swaps value of x to y.
// swapValues(3, 4) // x => 4, y=>3
let x = 1
let y = 2
function swapValues(x, y) {
    return [y, x]
}
[x, y] = swapValues(x, y)
console.log(`x => ${x}, y => ${y}`);

// Declare a function name reverseArray. 
// It takes array as a parameter and it returns the reverse of the array (don't use method).
/**
    console.log(reverseArray([1, 2, 3, 4, 5]))
    //[5, 4, 3, 2, 1]
    console.log(reverseArray(['A', 'B', 'C']))
    //['C', 'B', 'A']
 */

function reverseArray(arr) {
    const length = arr.length
    for (let i = 0; i < (length - 1) / 2; i++) {
        const temp = arr[i]
        arr[i] = arr[length - 1 - i]
        arr[length - 1 - i] = temp
    }
    return arr
}
const arr = [1, 2, 3, 'a']
console.log(reverseArray(arr));
console.log(arr);

// Declare a function name capitalizeArray. It takes array as a parameter and it returns the - capitalizedarray.
function capitalizeArray(arr) {
    arr.map((_, i) => arr[i] = arr[i].toUpperCase())
    return arr
}
console.log(capitalizeArray(['a']));

// Declare a function name addItem. It takes an item parameter and it returns an array after adding the item
function addItem(item, array) {
    array.push(item)
    return array
}
console.log(addItem(1, [2, 3]));

// Declare a function name removeItem. It takes an index parameter and it returns an array after removing an ite
function removeItem(index, arr) {
    arr.splice(index, 1)
    return arr
}
console.log(removeItem(1, ['a', 'b', 'c']));

// Declare a function name evensAndOdds . It takes a positive integer as parameter and it counts number of evens and odds in the number.

function evensAndOdds(number) {
    const count = { evens: 0, odds: 0 }
    while (number > 0) {
        if (((number % 10) % 2) == 0) count.evens++
        else count.odds++

        number = Math.floor(number / 10);
    }
    return count
}

console.log(evensAndOdds(1234));

//    Write a function which takes any number of arguments and return the sum of the arguments
function add(...args) {
    return args.reduce((acc, e) => acc + e, 0)
}

console.log(add(1, 2, 3, 4));

//    Declare a function name userIdGenerator. When this function is called it generates seven character id. The function return the id.
function userIdGenerator() {
    let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';

    for (let i = 0; i < 7; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);

        result += characters.charAt(randomIndex);
    }

    return result;
}

console.log(userIdGenerator());

// Exercises: Level 3

// Call your function shuffleArray, it takes an array as a parameter and it returns a shuffled array
function shuffleArray(arr) {

}
// Call your function factorial, it takes a whole number as a parameter and it return a factorial of the number
function factorial(num) {
    let fac = 1;
    for (let i = 1; i <= num; i++) {
        fac *= i
    }
    return fac
}
console.log(factorial(5));

// Call your function isEmpty, it takes a parameter and it checks if it is empty or not
function isEmpty(value) {
    if (value === null) return true
    if ((value.length == 0) || (Object.keys(value).length == 0)) return true
    return false
}
console.log(isEmpty(null));
console.log(isEmpty([]));
console.log(isEmpty({}));
console.log(isEmpty({ a: 1 }));
console.log(isEmpty([1]));

// Write a function called average, it takes an array parameter and returns the average of the items. 
// Check if all the array items are number types. If not give return reasonable feedback.
function average(arr) {
    if (arr.some((e) => isNaN(e))) return 'The array must contain all number item'
    return arr.reduce((acc, e) => acc + e, 0) / arr.length

}
console.log(average([1, 1, 3.5]));
