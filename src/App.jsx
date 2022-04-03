import React from 'react'
import Header from "./components/header/Header"
import Nav from "./components/nav/Nav"
import About from "./components/about/About"
import Portfolio from './components/portfolio/Portfolio'
import Contacts from './components/contacts/Contacts'
import Footer from './components/footer/footer'

const App = () => {
  return (
    <div>
      <Nav />
      <Header />
      <About />
      <Portfolio />
      <Contacts />
      <Footer />
    </div>
  )
}

export default App
