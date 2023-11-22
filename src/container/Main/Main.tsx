import About from "src/components/About";
import AccordionMenu from "src/components/AccordionMenu";
import Contacts from "src/components/Contacts";
import OurServices from "src/components/OurServices";
import Projects from "src/components/Projects";
import Welcome from "src/components/Welcome";

const Main = () => {
  return (
    <main>
      <Welcome />
      <OurServices />
      <About />
      <Projects />
      <AccordionMenu/>
      <Contacts />
    </main>
  );
}

export default Main;