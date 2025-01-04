import { useState } from 'react';
import {
    Accordion,
    AccordionHeader,
    AccordionBody,
} from "@material-tailwind/react";
import Arrow from 'src/assets/icons/accordionArrow';
import { AccordionProps } from 'src/types';
import Line from './Line';
import { getRandomFourDigitNumber } from 'src/function';


const AccordionElement = ({ id, title, description }: AccordionProps) => {
    const [open, setOpen] = useState(0);

    const PRICE_AVAILABILITY = false;

    const handleOpen = (value: number) => setOpen(open === value ? 0 : value);


    return (
        <>
            <Accordion
                open={open === id}
                icon={<Arrow id={id}
                    open={open} />}>
                <AccordionHeader
                    onClick={() => handleOpen(id)}
                    className=''>
                    {title}
                </AccordionHeader>
                <AccordionBody>
                    <div className='grid grid-rows-1 grid-cols-4 bg-BrandYellow p-2 py-4 text-center text-lg'>
                        <p className='col-span-2'>Найменування</p>
                        <p>Один.вимр</p>
                        <p>Ціна/один, грн.</p>
                    </div>
                    {
                        description.map(el => {
                            const { name, unit, price, comments } = el;
                            return <Line
                                key={getRandomFourDigitNumber()}
                                name={name}
                                unit={unit}
                                price={PRICE_AVAILABILITY ? price.toString() : "*"}
                                comments={comments}
                            />
                        })
                    }
                </AccordionBody>
            </Accordion>
        </>
    )
}

export default AccordionElement;