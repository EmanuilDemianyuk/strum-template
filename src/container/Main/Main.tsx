import About from "src/components/About";
import Contacts from "src/components/Contacts";
import OurServices from "src/components/OurServices";
import Welcome from "src/components/Welcome";

const Main = () => {
  return (
    <main>
      <Welcome />
      <About />
      <OurServices />
      <Contacts />
    </main>
  );
}

export default Main;