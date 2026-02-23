// 11. Functional Programming
const products = [
    { product: 'banana', price: 3 },
    { product: 'mango', price: 6 },
    { product: 'potato', price: ' ' },
    { product: 'avocado', price: 8 },
    { product: 'coffee', price: 10 },
    { product: 'tea', price: '' },
]


// Print the price of each product using forEach
products.forEach(product => {
    console.log(product.price);
});

// Print the product items as follows using forEach
// The price of banana is 3 euros.
// The price of mango is 6 euros.
// The price of potato is unknown.
// The price of avocado is 8 euros.
// The price of coffee is 10 euros.
// The price of tea is unknown.
products.forEach(product => console.log(`The price of ${product.product} is ${product.price} euros.`))

// Calculate the sum of all the prices using forEach
let sum = 0;
products
    .filter(product => typeof product.price === 'number')
    .forEach(product => sum += product.price)
console.log(sum);

// Create an array of prices using map and store it in a variable prices
const prices =
    products
        .map(product => product.price)

console.log(prices);

// Filter products with prices
const productsWithPrices = products.filter(p => typeof p.price === 'number')
console.log(productsWithPrices)

// Use method chaining to get the sum of the prices(map, filter, reduce)
const sumP =
    products
        .filter(p => typeof p.price === 'number')
        // .map(p => p.price)
        .reduce((acc, cur) => acc + cur.price, 0)
console.log(sumP);

// Calculate the sum of all the prices using reduce only
const sumP2 =
    products.reduce((acc, cur) => typeof cur.price === 'number' ? acc + cur.price : acc, 0)
console.log(sumP2);

// Find the first product which doesn't have a price value
const noPriceProduct = products.find(p => typeof p.price !== 'number')
console.log(noPriceProduct);

// Find the index of the first product which does not have price value
const noPriceIndex = products.findIndex(p => typeof p.price !== 'number')
console.log(noPriceIndex);

// Check if some products do not have a price value
const isSomeNoPrice = products.some(p => typeof p.price !== 'number')
console.log(isSomeNoPrice);

// Check if all the products have price value
const isAllPrice = products.every(p => typeof p.price === 'number')
console.log(isAllPrice);

// Explain the difference between forEach, map, filter and reduce
/**
 * forEach: no return
 * map: return new arr with equal length
 * filter: return new with filtered items
 * reduce: return 1 value
 */

// Explain the difference between filter, find and findIndex
/**
 * filter: return new arr
 * find: return first item
 * findIndex: return first index
 */
// Explain the difference between some and every
/**
 * some: return true if some items match the criteria
 * every: return true if every items match the criteria
 */