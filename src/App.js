
import Nav from "./Components/NavBar";
import HomePage from "./Components/Home";
import Social from "./Components/Socials";
import AboutMe from "./Components/About";
import Skill from "./Components/Skills";
import Project from "./Components/Projects";
import Exp from "./Components/Experience";
function App() {
  return (
    <div>
       <Nav />
       <HomePage />
       <AboutMe />
       <Skill />
       <Project /> 
       <Exp />

       <Social />
    </div>
  );
}

export default App;
