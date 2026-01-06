import Header from "./components/header";
import Hero from "./hero";
import About from "./about"; 
import Projects from "./projects";
import Experience from "./experiencias";
import Contato from "./contato";


export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <About />
      <Projects />
      <Experience />
      <Contato />
     

    </div>
  );
}
