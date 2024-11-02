import React, { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './Navbar'
import Home from './Home'

export default function App() {
    let [language, setLanguage] = useState("hi")
    let [search, setSearch] = useState("")

    function changeLanguage(data) {
        setLanguage(data)
    }

    function changeSearch(data) {
        setSearch(data)
    }

  return (
    <>
    <BrowserRouter>
        <Navbar changeLanguage={changeLanguage} changeSearch={changeSearch} />
        <Routes>
            <Route path="" element={<Home search={search} language={language} q="All" />} />
            <Route path="/All" element={<Home  search={search} language={language} q="All" />} />
            <Route path="/Politics" element={<Home  search={search} language={language} q="Politics" />} />
            <Route path="/Crime" element={<Home  search={search} language={language} q="Crime" />} />
            <Route path="/Education" element={<Home  search={search} language={language} q="Education" />} />
            <Route path="/Science" element={<Home  search={search} language={language} q="Science" />} />
            <Route path="/Technology" element={<Home  search={search} language={language} q="Technology" />} />
            <Route path="/Games" element={<Home  search={search} language={language} q="Games" />} />
            <Route path="/Olympics" element={<Home  search={search} language={language} q="Olympics" />} />
            <Route path="/Cricket" element={<Home  search={search} language={language} q="Cricket" />} />
            <Route path="/Entertainment" element={<Home  search={search} language={language} q="Entertainment" />} />
            <Route path="/Finance" element={<Home  search={search} language={language} q="Finance" />} />
            <Route path="/India" element={<Home  search={search} language={language} q="India" />} />
            <Route path="/World" element={<Home  search={search} language={language} q="World" />} />
            <Route path="/Jokes" element={<Home  search={search} language={language} q="Jokes" />} />
            <Route path="/*" element={<Home q="All" />} />
        </Routes>
    </BrowserRouter>
    </>
  )
}
