import React, { Component } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'
import Home from './Home'

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      language:"hi",
      search:""
    }
  }

  changeLanguage1 = (data)=>{
    this.setState({language:data})
    // console.log(data);
  }

  changeSearch = (data) => {
    this.setState({search:data})
  }
  render() {
    return (
      <BrowserRouter>
        <Navbar changeLanguage1={this.changeLanguage1} changeSearch={this.changeSearch} />
            <Routes>
                <Route path="" element={<Home language2={this.state.language} search={this.state.search} q="All"/>} />
                <Route path="/All" element={<Home language2={this.state.language} search={this.state.search} q="All"/>} />
                <Route path="/Politics" element={<Home language2={this.state.language} search={this.state.search} q="Politics"/>} />
                <Route path="/Crime" element={<Home language2={this.state.language} search={this.state.search} q="Crime"/>} />
                <Route path="/Education" element={<Home language2={this.state.language} search={this.state.search} q="Education"/>} />
                <Route path="/Entertainment" element={<Home language2={this.state.language} search={this.state.search} q="Entertainment"/>} />
                <Route path="/Science" element={<Home language2={this.state.language} search={this.state.search} q="Science"/>} />
                <Route path="/Politics" element={<Home language2={this.state.language} search={this.state.search} q="Politics"/>} />
                <Route path="/Technology" element={<Home language2={this.state.language} search={this.state.search} q="Technology"/>} />
                <Route path="/Games" element={<Home language2={this.state.language} search={this.state.search} q="Games"/>} />
                <Route path="/Olympics" element={<Home language2={this.state.language} search={this.state.search} q="Olympics"/>} />
                <Route path="/*" element={<Home language2={this.state.language} search={this.state.search} q="All"/>} />
            </Routes>
        <Footer/>
      </BrowserRouter>
    )
  }
}
