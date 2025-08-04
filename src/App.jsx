import React from 'react'
import { ScrollTrigger , SplitText } from 'gsap/all'
import gsap from 'gsap'
import Nav from './Components/Nav'
gsap.registerPlugin(ScrollTrigger, SplitText)
const App = () => {
  return (
    <main>
      <Nav />
    </main>
  )
}

export default App
