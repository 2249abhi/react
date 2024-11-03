import React from "react"
import ReactDom from "react-dom/client"
import Parent from "./FunctionalComponent/ContextAPIExample/Parent"

const root = ReactDom.createRoot(document.getElementById('root'))

root.render(
    <>
   <Parent/>
    </>
)


// import React from "react"
// import ReactDom from "react-dom/client"
// import UseRefExample from "./FunctionalComponent/HooksExample/UseRefExample"
// //import Parent from "./FunctionalComponent/HooksExample/UseCallbackExample/Parent"
// //import UseMemoHookExample from "./FunctionalComponent/HooksExample/UseMemoHookExample"
// //import UseEffectHookExample from "./FunctionalComponent/HooksExample/UseEffectHookExample"



// const root = ReactDom.createRoot(document.getElementById('root'))

// root.render(
//     <>
//    {/* <UseEffectHookExample /> */}
//    {/* <UseMemoHookExample /> */}
//    {/* <Parent/> */}
//    <UseRefExample/>
//     </>
// )



/* import React from "react"
import ReactDom from "react-dom/client"
import App from "./FunctionalComponent/RoutingExample/App"


const root = ReactDom.createRoot(document.getElementById('root'))

root.render(
    <>
   <App/>
    </>
) */

/* import React from "react"
import ReactDom from "react-dom/client"
import "./assets/css/style.css"
import InputExample from "./FunctionalComponent/InputExample"

const root = ReactDom.createRoot(document.getElementById('root'))

root.render(
    <>
   <InputExample/>
    </>
) */


/* import React from "react"
import ReactDom from "react-dom/client"
import CssExample from "./FunctionalComponent/CssExample"

const root = ReactDom.createRoot(document.getElementById('root'))

root.render(
    <>
    <h3>Hello from index.js file</h3>
   <CssExample/>
    </>
) */



/* import React from "react"
import ReactDom from "react-dom/client"
import Parent from "./FunctionalComponent/LiftingStateUP/SendDataCP/Parent"
import ImageExample from "./FunctionalComponent/ImageExample"

const root = ReactDom.createRoot(document.getElementById('root'))

root.render(
    <>
    <h3>Hello from index.js file</h3>
    <hr/>
    <ImageExample/>
    <hr/>
    <Parent/>
    </>
) */


////Call Data from parent to child
// import React from "react"
// import ReactDom from "react-dom/client"
// import Parent from "./FunctionalComponent/LiftingStateUP/SendDataPC/Parent"

// const root = ReactDom.createRoot(document.getElementById('root'))

// root.render(
//     <>
//     <h3>Hello from index.js file</h3>
//     <hr/>
//     <Parent/>
//     </>
// )


// import React from "react"
// import ReactDom from "react-dom/client"
// import ImportExport,{name1,arr1,emp,helloWorld} from "./FunctionalComponent/ImportExport"
// import StateExample from "./FunctionalComponent/StateExample"
// import ObjectArray from "./FunctionalComponent/ObjectArray"

// const root = ReactDom.createRoot(document.getElementById('root'))

// root.render(
//     <>
//     <h3>Hello from index.js file</h3>
//     <hr/>
//     <ObjectArray/>
//     <hr/>
//     <h3>Name: {name1}</h3>
//     <hr/>
//     <h3>arr1: {arr1.join(', ')}</h3>
//     <hr/>
//     <h3>Employee Details: <br/>
//         Id: {emp.id} <br/>
//         Name: {emp.name}
//     </h3>
//     <hr/>
//     {helloWorld()}
//     <hr/>
//     <h3>Default Function: {ImportExport()}</h3>
//     <hr/>
//     <StateExample/>
//     </>
// )





// import * as Data from "./FunctionalComponent/ImportExport"

// const root = ReactDom.createRoot(document.getElementById('root'))
// root.render(
//     <>
//         <Data.default />
//         {/* use <Data.default/> if all import at once */}

//         <h3>Name: {Data.name1}</h3>
//         <h3>arr1: {Data.arr1}</h3>
//         <h3>Employee Details: <br />
//             Id: {Data.emp.id}<br />
//             Name: {Data.emp.name}<br />
//             Designation: {Data.emp.dsg}<br />
//             Salary: {Data.emp.salary}<br />
//             City: {Data.emp.city}<br />
//             State: {Data.emp.state} <br />
//             HelloWorld function call: {Data.helloWorld()}
//         </h3>

//     </>
// )



// root.render(
//     <React.Fragment>
//         <h1>Hello World!! </h1>
//         <h2>First react program</h2>
//     </React.Fragment>
// )
