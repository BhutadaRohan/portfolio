import { About, Contact, Experience, Home, Navbar, Projects, Skills } from "./components";
import "./App.css"
function App() {
  return (
    <div className="body">
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
