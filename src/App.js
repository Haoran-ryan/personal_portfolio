import About from "./components/About";
import About2 from "./components/About2";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Works from "./components/Works";

function App() { 
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <About2 />
      <Skills />
      <Works />
      <Contact />
    </div>
  );
}
export default App;