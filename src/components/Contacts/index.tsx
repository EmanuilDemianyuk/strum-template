import { Button } from '@material-tailwind/react';

import * as img from "./re-export";
import ImageBox from '../ImageBox';
import { contactPhone } from 'src/constants/contactPhone';

const CLIP_PATH = "polygon(10% 4%, 40% 4%, 44% 0%, 100% 0%, 100.2% 100.5%, 50% 100.5%, 0% 100.5%, 0% 0%, 6% 0%)";

const Contacts = () => {
    return (
        <section
            id='contact'
            className='bg-BrandYellow w-full min-h-[680px] lg:min-h-[600px] xl:min-h-[470px] relative pt-16 xl:pt-24 mt-16'
            style={{ clipPath: CLIP_PATH }}
        >
            <div className='container p-4 w-full h-full'>
                <div className='flex flex-col gap-2'>
                    <h3 className='text-3xl font-bold max-w-[600px]'>Якщо потрібний якісний електромонтаж - телефонуйте!</h3>
                    <a
                        href={`tel: ${contactPhone}`}
                        aria-label={`Зателефонувати за номером ${contactPhone}`}
                        className='inline-block max-w-[300px]'
                    >
                        <Button
                            size='lg'
                            className='text-BrandYellow w-full rounded-full mt-8 flex justify-center items-center gap-2 bg-black'
                        >
                            <span>Зателефонувати</span>
                            <div className='w-10 h-10 bg-black rounded-full'>
                                <img
                                    className='w-full h-full object-cover p-2'
                                    src={img.phoneIcon}
                                    alt="phone"
                                />
                            </div>
                        </Button>
                    </a>
                </div>
            </div>

            <div className='absolute top-[360px] md:top-[290px] lg:top-[140px] xl:top-[10px] right-0 md:right-20 lg:right-44 z-10'>
                <div className=' relative'>

                    <ImageBox
                        title={"human"}
                        image={img.callUs}
                        imageWebP={img.callUsWebP}
                        className='max-w-350px sm:max-w-[400px] md:max-w-[520px]'
                    />

                    <div className='max-w-[60px] max-h-[60px] sm:max-w-[80px] sm:max-h-[80px] md:max-w-[100px] md:max-h-[100px] bg-white rounded-full absolute z-20 top-40 left-2 sm:opacity-100 md:top-56 md:left-[-5px] opacity-0'>
                        <img
                            className='w-full h-full object-cover rounded-2xl shadow-2xl shadow-white'
                            src={img.strumLogo}
                            alt="logoIcon"
                        />
                    </div>
                </div>
            </div>

            <div className='absolute top-[322px] sm:top-[273px] lg:top-[193px] xl:top-[63px] right-0'>
                <ImageBox
                    title={"house"}
                    image={img.house}
                    imageWebP={img.houseWebP}
                    className='max-w-[700px] opacity-70'
                />
            </div>
        </section>
    );
}

export default Contacts;