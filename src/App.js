import ReactDOM from "react-dom/client"
import Nav from "./components/Nav"
import Hero from "./components/Hero"
import About from "./components/About"
import Experience from "./components/Experience"
import Projects from "./components/Projects"
import Contacts from "./components/Contacts"
import Footer from "./components/Footer"

let App=()=>{
    return(
       <div className="xl:mx-96 mx-5">
           <Nav/>
        <Hero/>
        <About/>
        <Experience/>
        <Projects/>
        <Contacts/>
        <Footer/>
       </div>
    
    )
}

let root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<App/>)