// ex level 3
import countries from "./countries.js";

const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
ages.sort();
const min = ages[0]
const max = ages[ages.length - 1]
console.log(ages);
console.log('min: ', max);
console.log('max: ', min);

const length = ages.length
const mindleI = Math.floor(length / 2)
const isOdd = (length % 2) != 0
const median = isOdd ? ages[mindleI]
    : (ages[mindleI - 1] + ages[mindleI]) / 2
console.log('median', median);

let avgAge = ages.reduce((acc, age) => {
    return acc + age
}, 0)
avgAge = avgAge / length
console.log('avg: ', avgAge);

console.log('range: ', max - min);

console.log('delta min > delta max: ', Math.abs(min - avgAge) > Math.abs(max - avgAge));

const first10countries = countries.slice(0, 10)
console.log(first10countries);

const cLength = countries.length
const cMidleI = Math.floor(cLength / 2)
const cIsOdd = cLength % 2 != 0
const midleCountry = !cIsOdd ? countries[mindleI]
    : [countries[mindleI - 1], countries[mindleI]]

console.log(midleCountry);


const firsthalf = cIsOdd ? countries.slice(0, cMidleI + 1) : countries.slice(0, cMidleI)
const secondhalf = cIsOdd ? countries.slice(cMidleI + 1, cLength) : countries.slice(cMidleI, cLength)
console.log(firsthalf);
console.log(secondhalf);


