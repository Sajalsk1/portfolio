import Navbar from "./components/Navbar/Navbar";
import Intro from "./components/Navbar/Intro/Intro";
import Services from "./components/Navbar/Services/Services";
import Expereinces from "./components/Navbar/Expereinces/Expereinces";
import Works from "./components/Navbar/Works/Works";
import Portfolio from "./components/Navbar/Portfolio/Portfolio";
import Testimonial from "./components/Navbar/Testimonials/Testimonials";
import Contact from "./components/Navbar/Contact/Contact";
import Footer from "./components/Navbar/Footer/Footer";
import './App.css'


function App() {
  return (
    <div className="App">
     <Navbar/>
     <Intro/>
    <Services/>
    <Expereinces/>
    <Works/>
    <Portfolio/>
    <Testimonial/>
    <Contact/>
    <Footer/>

    </div>
  );
}

export default App;
