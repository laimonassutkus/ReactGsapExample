import logo from './logo.svg';
import './App.css';
import { gsap } from "gsap";
import { useLayoutEffect, useRef } from 'react';


function App() {
  // Create a reference object that will be used for an html (usually a div element). 
  // Use it like this: <div ref={comp}>. This way you say that we are going to target/modify 
  // elements that are only wihtin that div.  
  const comp = useRef(null)

  // This is where we are going to apply all animations. 
  // It all starts by calling "useLayoutEffect" function.
  useLayoutEffect(() => {
    let gsap_context = gsap.context(() => {
      // All animations are happening in a timeline, hence we need to create one.
      const timeline = gsap.timeline({ repeat: -1 })

      // Start targeting elements and animating them. 
      timeline.to("#App-logo", {
        opacity: 0,
        duration: 2,
        delay: 2
      }).to("#App-logo", {
        opacity: 1,
        duration: 2
      })
    }, comp)

    return () => gsap_context.revert()
  }, [])

  return (
    // Here we reference that "useRef" object.
    <div className="App" ref={comp}>
      <header className="App-header">
        <img src={logo} id="App-logo" className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
