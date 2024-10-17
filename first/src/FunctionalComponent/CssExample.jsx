import React from 'react'
// import "../index.css"
import "../assets/css/style.css"
import moduleCSS from "../index.module.css"


const myStyle = {
    heading:{
        backgroundColor:"green",
        color:"white",
        padding:10,
        textAlign:"center"
    },
    para1: {
        backgroundColor:"purple",
        color:"white",
        padding:10,
        textAlign:"justify"
    },
    para2: {
        backgroundColor:"orange"
    }
}

export default function CssExample() {
  return (
    <div className='main'>
        <div className='center'>
            <h1 style={{
                backgroundColor:'navy',
                color:'white'
            }}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab, consequuntur.</h1>
            <h2 style={myStyle.heading}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum, numquam.</h2>
            <p style={myStyle.para1}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque doloribus, totam debitis repellat ipsam ea. Dolores velit suscipit, itaque deserunt quas tempora sit nihil obcaecati ad illo cum facilis adipisci sed expedita distinctio quasi dolor minima quisquam delectus inventore, beatae maxime. Consectetur illum necessitatibus amet, doloremque esse omnis? Aut inventore quam fugit fugiat laborum minus est quod, animi rerum soluta dolor velit adipisci ducimus eligendi optio beatae architecto eos magnam voluptatibus reiciendis voluptatum accusantium molestias. Labore quo blanditiis voluptatum officia dignissimos eligendi sunt beatae accusantium, necessitatibus eum ratione expedita magnam libero ut minus omnis, nobis harum perspiciatis quibusdam molestiae laboriosam?</p>
            <p style={{...myStyle.para1,...myStyle.para2}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam rem dolorum labore voluptatem non impedit dicta. Tenetur accusantium doloribus, dolore cumque inventore minima ipsa et. Incidunt ea vitae unde laudantium!</p>
            <p style={moduleCSS.p}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur optio at, consequatur consequuntur, nobis omnis velit labore quis dicta porro, quia laborum nemo quaerat pariatur a cupiditate magnam ipsum. Saepe.</p>
        </div>
    </div>
  )
}
