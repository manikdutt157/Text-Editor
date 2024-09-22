import React from 'react'
import Navbar from './components/Navbar';
import Home from './components/Home'
import Footer from './components/Footer';

const mainHeading = 'Text Editor App'
const App = () => {
  return (
    <>
      <Navbar heading={mainHeading}/>
      {/* <Navbar /> */}

      <Home heading='Enter text' />
      <Footer heading={mainHeading} />
    </>
  )
}

export default App
