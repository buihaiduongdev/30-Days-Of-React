/** EX1
Create a function called getPersonInfo. 
The getPersonInfo function takes an object parameter. 
The structure of the object and the output of the function is given below. 
Try to use both a regular way and destructuring and compare the cleanness of the code. 
If you want to compare your solution with my solution, check this link. 
 */
const person = {
    firstName: 'Asabeneh',
    lastName: 'Yetayeh',
    age: 25,
    country: 'Finland',
    job: 'Instructor and Developer',
    skills: [
        'HTML',
        'CSS',
        'JavaScript',
        'React',
        'Redux',
        'Node',
        'MongoDB',
        'Python',
        'D3.js',
    ],
    languages: ['Amharic', 'English', 'Suomi(Finnish)'],
}

/*
Asabeneh Yetayeh lives in Finland. He is  25 years old. He is an Instructor and Developer. He teaches HTML, CSS, JavaScript, React, Redux, Node, MongoDB, Python and D3.js. He speaks Amharic, English and a little bit of Suomi(Finnish)
*/
function getPersonInfo(person) {
    const { firstName, lastName, age, country, job, skills, languages } = person
    const [firstLang, secondLang, thirdLang] = languages
    return `${firstName} ${lastName} lives in ${country}. He is ${age} years old. He is an ${job}. 
    He teaches ${skills.join(' ')}. 
    He speaks ${firstLang}, ${secondLang} and a little bit of ${thirdLang}`
}

console.log(getPersonInfo(person));

