import { BrowserRouter } from "react-router-dom"
import {About , Contact , Experience , Feedbacks , Hero , Navbar , Tech , Works , StarsCanvas}  from './components/index'
function App() {


  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary top-0">
        <div className=" bg-cover bg-no-repeat bg-center">
          <Navbar/>
          <Hero/>         
        </div>
        <div className="">
        <About/>
        </div>
        <Experience/>
        <Tech/>
        <Works/>
        <Feedbacks/>
        <div className="relative z-1">
          <Contact/>
          <StarsCanvas/>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
