//1
const emptyArr = []
console.log(emptyArr)
//2
const numArr = [1, 2, 3, 4, 5]
console.log(numArr)

//3 
console.log(numArr.length)

//4
const numArrLength = numArr.length;
console.log(numArr[0], numArr[(numArrLength - 1) / 2], numArr[numArrLength - 1])

//5
const mixedDataType = [1, '2', { number: 3 }, [4], true, null, undefined]
console.log(mixedDataType.length)

//6
const companiesName = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'
const itCompanies = companiesName.split(', ')

//7
console.log(itCompanies)

//8
const itCompaniesLength = itCompanies.length;
console.log(itCompaniesLength)

//9
console.log(itCompanies[0], itCompanies[(itCompaniesLength - 1) / 2], itCompanies[itCompaniesLength - 1])

//10
itCompanies.forEach((company) => console.log(company))

//11 modify for advance
const toUpperCaseItCompanies = itCompanies.map((c) => {
    const [first, ...rest] = c
    return first.toUpperCase() + rest.join('').toLowerCase();
})
console.log(toUpperCaseItCompanies)

//12 
const others = itCompanies.slice(0, -1)
const last = itCompanies.slice(-1);
console.log(`${others.join(', ')} and ${last} are big IT companies.`)

//13 
const isExist = (arr, company) => arr.includes(company);
console.log(isExist(itCompanies, 'Google'));

//14
const withFilter = itCompanies.filter(c => {
    const count = (c.match(/o/gi) || []).length
    return count >= 2
})
console.log(withFilter);

const withReduce = itCompanies.reduce((acc, c) => {
    const count = (c.match(/o/gi) || []).length
    return count >= 2 ? [...acc, c] : acc
}, [])
console.log(withReduce);

//15
console.log(itCompanies.sort());


//16
console.log(itCompanies.reverse());

//17
const [f, s, t, ...rest] = itCompanies
console.log([f, s, t]);

