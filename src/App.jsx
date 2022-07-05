import Intro from "./components/Intro/Intro";
import Portfolio from "./components/Portfolio/Portfolio";
import Topbar from "./components/topbar/Topbar";
import Work from "./components/works/Work";
import Contact from "./components/contact/Contact";
import Testimonial from "./components/Testimonials/Testimonial";
import './app.scss'
import { useState } from "react";
import Menu from "./components/menu/Menu";
import Education from "./components/education/Education";
function App() {

  const [menuOpen , setMenuOpen ] = useState(false)


  return (
    <div className="app">
    
    <Topbar menuOpen={menuOpen} setMenuOpen = {setMenuOpen} />
    <Menu menuOpen={menuOpen} setMenuOpen = {setMenuOpen} />
    <div className="sections"> 
    
    <Intro />
    <Education />
    <Portfolio/>
    <Work/>
    <Testimonial />
    <Contact />
    </div>
    </div>
  );
}

export default App;
