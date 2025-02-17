import React from 'react'
import Navbar from "./Component/Navbar/Navbar.jsx";
import Hero from "./Component/Hero/Hero.jsx"

const App = () => {
  return (
    <main className='overflow-x-hidden '>
      <Navbar />
      <Hero />
    </main>
  )
}

export default App;