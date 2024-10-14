import React from 'react'
import lara from "../assets/images/pexels-lara-jameson-9623794.jpg"

export default function ImageExample() {
  return (
    <>
        <h3>Display Images Example here</h3>
        {/* If images are in src folder */}
        <img src={require("../assets/images/pexels-cottonbro-6803543.jpg")} height={200} alt="pexels-cottonbro-6803543" />
        &nbsp;&nbsp;
        <img src={lara} height={200} alt="pexels-lara-jameson-9623794"  />
        <br/>
        {/* If images are in public folder */}
        <img src="/images/pexels-cottonbro-6804595.jpg" height={200} alt="pexels-cottonbro-6804595" />
    </>
  )
}
