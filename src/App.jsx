import React from 'react'
import { ScrollTrigger , SplitText } from 'gsap/all'
import gsap from 'gsap'
import Nav from './Components/Nav'
import Hero from './Components/Hero'
gsap.registerPlugin(ScrollTrigger, SplitText)
const App = () => {
  return (
    <main>
      <Nav />
      <Hero />
      <div className="h-dvh"></div>
    </main>
  )
}

export default App
