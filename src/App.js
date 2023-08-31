
import Nav from "./Components/NavBar";
import HomePage from "./Components/Home";
import Social from "./Components/Socials";
import AboutMe from "./Components/About";
import Skill from "./Components/Skills";
import Project from "./Components/Projects";
import Exp from "./Components/Experience";
import Cont from "./Components/Contact";
function App() {
  return (
    <div>
       <Nav />
       <HomePage />
       <AboutMe />
       <Skill />
       <Project /> 
       <Exp />
       <Cont />

       <Social />
    </div>
  );
}

export default App;
