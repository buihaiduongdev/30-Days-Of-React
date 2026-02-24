/**
Exercises: What is React?

    What is React?
    -> a library written in js from meta

    What is a library?
    -> bult-in function for user to use

    What is a single page application?
    -> web that dont redirect when navigate to other routes

    What is a component ?
    -> an UI code that can be reuse

    What is the latest version of React?
    -> 2026: reactv19

    What is DOM?
    -> Document Object model: use to manipulate html elements

    What is React Virtual DOM?
    -> only change DOM for the element that has been changed

    What does a web application or a website(composed of) have?
    -> FE and BE

Exercises: Why React?

    Why did you chose to use react?
    -> can reuse components, used by big company and has a large community 

    What measures do you use to know popularity ?
    -> npm install counter, github stars

    What is more popular, React or Vue ?
    -> React

Exercises: JSX

    What is an HTML element?
    -> piece of code that told browser to display website

    How to write a self closing HTML element?
    -> <input />

    What is an HTML attribute? Write some of them
    -> to change how HTML display and work (style, id, class, for,...)

    What is JSX?
    -> JS XML use to write both HTML and javascript in one place
    
    What is babel?
    -> use to translate JSX/TSX to react code

    What is a transpiler?

Exercises: JSX Elements

    What is a JSX element?
    -> the same as HTML element but for JSX file

    Write your name in a JSX element and store it in a name variable
    -> const MyName = <h1>Bui Hai Duong</h1>

    Write a JSX element which displays your full name, country, title, gender, email, phone number. 
    Use h1 for the name and p for the rest of the information and store it in a user variable
    -> const User = (
        <>
            <h1>Bui Hai Duong</h1>
            <p>Viet Name - Student - Male - haiduongtinhoc@gmail.com - 034xxxx</p>
        </>
    )

    Write a footer JSX element
    const Footer = <footer>Copyright - Bui Hai Duong</footer>
Exercises: Inline Style

    Create a style object for the main JSX
    -> const mainStyle = {width: 'auto', backGroundColor: 'black'}

    Create a style object for the footer and app JSX
    -> const footerStyle = {width: 'auto', backGroundColor: 'black'}
    -> const appStyle = {width: 'auto', backGroundColor: 'black'}

    Add more styles to the JSX elements
    ->const Footer = <footer style={footerStyle}>Copyright - Bui Hai Duong</footer>

Exercises: Internal Styles

    Apply different styles to your JSX elements
    ->const Footer = <footer style={{...footerStyle, color: 'white'}}>Copyright - Bui Hai Duong</footer>

Exercise: Inject data to JSX

    Practice how to make JSX element and injecting dynamic data(string, number, boolean, array, object)
    const name = 'Bui Hai Duong'
    const year = 2026
    ->const Footer = <footer style={{...footerStyle, color: 'white'}}>Copyright - {name} - {year]</footer>

    const skils = ['JS', 'React', 'Express']
    const skillElement = skils.map(skill => <li>{skill}</li> )

 */