import AccordionElement from "./AccordionElement";
import InstallationOfFittings from 'src/PriceData/InstallationOfElectricalWiring.json';
import ElectricShield from  'src/PriceData/ElectricShield.json';
import AlarmAndVideo from 'src/PriceData/AlarmAndVideo.json';
import ElectricHeatedFloor from 'src/PriceData/ElectricHeatedFloor.json';
import InternetTelevisionAcoustics from 'src/PriceData/InternetTelevisionAcoustics.json';
import InstallationOfElectricalWiring from 'src/PriceData/InstallationOfElectricalWiring.json'
 
const AccordionMenu = () => {

  return (
    <div className="container py-8" id="price">
        <AccordionElement
            id={1}
            title={"Монтаж електропроводки*"}
            description={InstallationOfElectricalWiring}
        />
        <AccordionElement
            id={2}
            title={"Електричний щиток*"}
            description={ElectricShield}
        />
        <AccordionElement
            id={3}
            title={"Інтернет, телебачення, акустика*"}
            description={InternetTelevisionAcoustics}
        />
        <AccordionElement
            id={4}
            title={"Встановлення фурнітури (розеток, вимикачів, світильників тощо)*"}
            description={InstallationOfFittings}
        />
        <AccordionElement
            id={5}
            title={"Сигналізація та відеонагляд*"}
            description={AlarmAndVideo}
        />
        <AccordionElement
            id={6}
            title={"Електрична тепла підлога*"}
            description={ElectricHeatedFloor}
        />
    </div>
  )
}

export default AccordionMenu;
