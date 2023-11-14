import { Button } from '@material-tailwind/react';
import React from 'react';
import workerOne from 'src/assets/images/welcome-worker1.jpeg';
import workerTwo from 'src/assets/images/welcome-worker2.jpg';
import phoneIcon from 'src/assets/icons/phone.svg';

const Welcome = () => {
    return (
        <section 
        className='bg-BrandYellow w-full min-h-[400px] relative' 
        style={{clipPath: "polygon(50% 0%, 100% 0%, 100% 90%, 75% 90%, 70% 100%, 30% 100%, 25% 90%, 0% 90%, 0% 0%)"}}>
            <div className='hidden md:block md:absolute top-8 left-2'>
                <div className='min-h-[300px] max-w-[210px]'>
                    <img className='w-full h-full object-cover rounded-2xl' src={workerOne} alt="worker" />
                </div>
            </div>

            <div className='container p-4 w-full h-full'>
                <div className='flex flex-col justify-center items-center'>
                    <div className='text-lg lg:text-xl font-medium text-BrandGray flex items-center gap-2 my-6'>
                        <span>Безпека</span>
                        <div className='w-2 h-2 rounded-full bg-BrandGray'></div>
                        <span>Надійність</span>
                        <div className='w-2 h-2 rounded-full bg-BrandGray'></div>
                        <span>Якість</span>
                    </div>
                    <h1 className='font-bold text-center text-3xl max-w-[300px] lg:text-5xl lg:max-w-[500px]'>Надаємо послуги професійного електромонтажу</h1>
                    <Button 
                    size='lg'
                    className='rounded-full mt-8 flex items-center gap-2'
                    >
                        <span>Зателефонувати</span> 
                        <div className='w-8 h-8 bg-white rounded-full'>
                            <img className='w-full h-full object-cover p-2' src={phoneIcon} alt="phone" />
                        </div>
                    </Button>
                </div>
            </div>
          
            <div className='hidden md:block md:absolute top-8 right-2'>
                <div className='min-h-[300px] max-w-[210px]'>
                    <img className='w-full h-full object-cover rounded-2xl' src={workerTwo} alt="worker" />
                </div>
            </div>
        </section>
    );
}

export default Welcome;