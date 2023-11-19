import { Button } from '@material-tailwind/react';
import phoneIcon from 'src/assets/icons/phone.svg';
import React from 'react';

const OurServices = () => {
    return (
        <section
        name='services'
        className='w-full py-32 md:py-60'
        >
            <div className='container p-4 flex flex-col justify-center w-full h-full'>
                <div className='text-center'>
                    <h3 className='text-3xl font-bold mb-4'>Наші послуги</h3>
                    <p className='mb-8 text-BrandGray'>Lorem, ipsum dolor sit amet consectetur adipisicing elit</p>
                </div>

                <div className='grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-12'>
                    <div className='text-center md:text-start'>
                        <div className='w-20 h-20 bg-BrandYellow rounded-2xl mx-auto md:mx-0'>
                            <img src="" alt="icon" />
                        </div>
                        <h5 className='py-3 font-medium text-xl'>Lorem ipsum</h5>
                        <p className=' text-BrandGray'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia, consequatur vero ratione excepturi tempora nesciunt</p>
                    </div>
                    <div className='text-center md:text-start'>
                        <div className='w-20 h-20 bg-BrandYellow rounded-2xl mx-auto md:mx-0'>
                            <img src="" alt="icon" />
                        </div>
                        <h5 className='py-3 font-medium text-xl'>Lorem ipsum</h5>
                        <p className=' text-BrandGray'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia, consequatur vero ratione excepturi tempora nesciunt</p>
                    </div>
                    <div className='text-center md:text-start'>
                        <div className='w-20 h-20 bg-BrandYellow rounded-2xl mx-auto md:mx-0'>
                            <img src="" alt="icon" />
                        </div>
                        <h5 className='py-3 font-medium text-xl'>Lorem ipsum</h5>
                        <p className=' text-BrandGray'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia, consequatur vero ratione excepturi tempora nesciunt</p>
                    </div>
                    <div className='text-center md:text-start'>
                        <div className='w-20 h-20 bg-BrandYellow rounded-2xl mx-auto md:mx-0'>
                            <img src="" alt="icon" />
                        </div>
                        <h5 className='py-3 font-medium text-xl'>Lorem ipsum</h5>
                        <p className=' text-BrandGray'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia, consequatur vero ratione excepturi tempora nesciunt</p>
                    </div>
                    <div className='text-center md:text-start'>
                        <div className='w-20 h-20 bg-BrandYellow rounded-2xl mx-auto md:mx-0'>
                            <img src="" alt="icon" />
                        </div>
                        <h5 className='py-3 font-medium text-xl'>Lorem ipsum</h5>
                        <p className=' text-BrandGray'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia, consequatur vero ratione excepturi tempora nesciunt</p>
                    </div>
                    <div className='text-center md:text-start'>
                        <div className='w-20 h-20 bg-BrandYellow rounded-2xl mx-auto md:mx-0'>
                            <img src="" alt="icon" />
                        </div>
                        <h5 className='py-3 font-medium text-xl'>Lorem ipsum</h5>
                        <p className=' text-BrandGray'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia, consequatur vero ratione excepturi tempora nesciunt</p>
                    </div>
                    <div className='text-center md:text-start'>
                        <div className='w-20 h-20 bg-BrandYellow rounded-2xl mx-auto md:mx-0'>
                            <img src="" alt="icon" />
                        </div>
                        <h5 className='py-3 font-medium text-xl'>Lorem ipsum</h5>
                        <p className=' text-BrandGray'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia, consequatur vero ratione excepturi tempora nesciunt</p>
                    </div>
                    <div className='flex flex-col justify-center items-center text-center bg-black text-white rounded-2xl p-4'>
                        <h5 className='font-medium text-xl'>Lorem ipsum</h5>
                        <p className='p-3'>Lorem ipsum, dolor sit amet consectetur adipisicing elit</p>
                        <Button 
                        size='sm' 
                        className='text-black rounded-full flex items-center gap-2 bg-BrandYellow'>
                            <span>Зателефонувати</span> 
                            <div className='w-6 h-6 bg-black rounded-full'>
                                <img className='w-full h-full object-cover p-2' src={phoneIcon} alt="icon" />
                            </div>
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default OurServices;