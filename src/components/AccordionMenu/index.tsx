import AccordionElement from "./AccordionElement";

import * as data from './re-export';

const AccordionMenu = () => {

    return (
        <section
            id="price"
            className='w-full pt-16 md:pt-32'
        >
            <div className="container p-4">
                <div className='text-center mb-8'>
                    <h3 className='text-3xl font-bold'>Ціни</h3>
                    <p className="py-4">
                        <em>* ціну необхідно уточнити, оскільки вона може варіюватися залежно від об'єкта та обсягу роботи</em>
                    </p>
                </div>
                <AccordionElement
                    id={1}
                    title={"Монтаж електропроводки*"}
                    description={data.InstallationOfElectricalWiring}
                />
                <AccordionElement
                    id={2}
                    title={"Електричний щиток*"}
                    description={data.ElectricShield}
                />
                <AccordionElement
                    id={3}
                    title={"Інтернет, телебачення, акустика*"}
                    description={data.InternetTelevisionAcoustics}
                />
                <AccordionElement
                    id={4}
                    title={"Встановлення фурнітури (розеток, вимикачів, світильників тощо)*"}
                    description={data.InstallationOfFittings}
                />
                <AccordionElement
                    id={5}
                    title={"Сигналізація та відеонагляд*"}
                    description={data.AlarmAndVideo}
                />
                <AccordionElement
                    id={6}
                    title={"Електрична тепла підлога*"}
                    description={data.ElectricHeatedFloor}
                />
            </div>
        </section>
    );
}

export default AccordionMenu;
