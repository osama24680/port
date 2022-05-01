import React from "react";
import Header from "./Components/Header/Header.jsx"
import Navbar from "./Components/Navbar/Navbar"
import About from "./Components/About/About"
import Experience from "./Components/Experience/Experience"
import Services from "./Components/Services/Services"
import Portofolio from "./Components/Portofolio/Portofolio"
import Testimonial from "./Components/Testimonial/Testimonial"
import Contact from "./Components/Contact/Contact"
import Footer from "./Components/Footer/Footer"

 function App() {
  return (
    <div>
        <Header />
        <Navbar />
        <About />
        <Experience />
        <Services />
        <Portofolio />
        <Testimonial />
        <Contact />
        <Footer />
    </div>
  );
}
export default App;