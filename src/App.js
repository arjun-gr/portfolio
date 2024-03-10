import ReactDOM from "react-dom/client"
import Nav from "./components/Nav"
import Hero from "./components/Hero"
import About from "./components/About"

let App=()=>{
    return(
       <div className="xl:mx-96 mx-5">
           <Nav/>
        <Hero/>
        <About/>
       </div>
    
    )
}

let root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<App/>)