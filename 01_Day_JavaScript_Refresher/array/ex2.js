// ex level 2
// 1
import countries from './countries.js'
import webTechs from './web_tech.js'

// 2
let text =
    'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'

const words = text.split(/[ .,]+/).filter(Boolean)
console.log(words)
console.log(words.length)

//3a
const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
shoppingCart.splice(0, 0, "Meat")
console.log(shoppingCart);

//3b
// shoppingCart.push("Honey")
// console.log(shoppingCart);

//3c
shoppingCart.pop();
console.log(shoppingCart);

//3d
shoppingCart.forEach((food, i) => shoppingCart[i] = (food == "Tea" ? "Green Tea" : food))
console.log("3d", shoppingCart);

//4
countries.includes('Ethiopia') ? console.log('ETHIOPIA') : countries.push('Ethiopia')

//5
webTechs.includes('Sass') ? console.log('Sass is a CSS preprocess')
    : webTechs.push('Sass'), console.log(webTechs)

//6
const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node', 'Express', 'MongoDB']

// const fullStack = frontEnd.concat(backEnd)
const fullStack = [...frontEnd, ...backEnd]
console.log(fullStack)

//

