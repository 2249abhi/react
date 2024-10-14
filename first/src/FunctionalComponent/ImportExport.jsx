import React from "react"

export var name1 = "Abhishek Shrivastav"
export var arr1 = [10,20,30,40,50,60,70,80,90,100]
export var emp = {
    id:1001,
    name:"Abhishek",
    dsg:"developer",
    salary:"100000",
    state:"UP",
    city:"jhansi"
}

export function helloWorld() {
    return (
        <p>Hello world function call </p>
    );
}

function ImportExport () {

    return (
        <h1>This is import export component</h1>
    );
} 

export default ImportExport//default export
//export {name1,arr1,emp}//name export