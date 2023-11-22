import About from "src/components/About";
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
      <Contacts />
    </main>
  );
}

export default Main;