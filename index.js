// ReactDOM.render(<p>Hi ! React</p> , document.getElementById("root"))

// creating the unordered list using react
// ReactDOM.render(
//     <p>
//         <ul>
//             <li>Apple</li>
//             <li>Ball</li>
//             <li>Cat</li>
//         </ul>
//     </p>,
// document.getElementById("root"))

// inserting the google link using react
// ReactDOM.render(<a href="https://www.google.com/">click here</a>,document.getElementById("root"))

// function MainContent() {
//     return (
//     <p>Hi! can i learn React.js ?</p>
//     )
// }


// ReactDOM.render(
//     <div>
//     <MainContent />
//     </div>,
// document.getElementById("root")
//     )

/*

Challenge - recreate the above line of code in vanilla JS by creating and appending
an h1 to our div#root (without using innerHTML)

- Create the h1 element
- Give it some text content
- Give it a class name of "header"
- Append it as a child of the div#root

*/

/*

const h1 = document.createElement("h1")
h1.textContent = "hi there i am Mr Ujjwal"
h1.className = "header"
document.getElementById("root").append(h1)

*/
// function MainContent(){
//     return(
//     <h3>Hi there! can i come into the react class?</h3>
        
//     )
// }
// function SubContent(){
//     return(<button>click me</button>)
// }
// ReactDOM.render(
//     <div>
//         <MainContent />
//         <SubContent />
//     </div> , document.getElementById("root")
// )

// const page =( 
//     <div>
//         <h1 className="header">This is JSX </h1>
//         <p>This is paragraph</p>
//     </div>
// )
    
//     console.log(page)
// ReactDOM.render(page,document.getElementById("root"))
/*
Create a navbar in JSX:
    - Use the senantic 'nav' element as the parent wrapper
    - Have an h1 element with the brand anme of your"website"
    - Insert an unordered list for the other nav elements
        -Inside the 'ul', have three 'li's for "pricing","about",and "Contact"
    - Don't worry about styling yet - it'll jsut be plain-looking HTML for now.
        */
const navbar = (
    <nav>
        <h1>MyCourse</h1>
        <ul>
            <li>Pricing</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
    </nav>
)
ReactDOM.render(
    navbar , document.getElementById("root")
)