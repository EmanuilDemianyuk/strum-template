import { Button } from '@material-tailwind/react';
import phoneIcon from 'src/assets/icons/phone.svg';
import house from 'src/assets/images/housePng.png';
import callUs from 'src/assets/images/callUs.png';
import strumLogo from 'src/assets/icons/logoStrum.svg';

const Contacts = () => {
    return (
        // <section
        // className='bg-BrandYellow w-full min-h-[470px] pt-16 xl:pt-24' 
        // style={{clipPath: "polygon(10% 4%, 40% 4%, 44% 0%, 100% 0%, 100.2% 100.5%, 50% 100.5%, 0% 100.5%, 0% 0%, 6% 0%)"}}
        // >
        //     <div className='container p-4 w-full h-full flex'>
        //         <div className='basis-2/5'>
        //             <h3 className='text-3xl font-bold max-w-[600px]'>Якщо потрібний якісний електромонтаж - телефонуйте!</h3>
        //             <Button 
        //             size='lg'
        //             className='text-BrandYellow rounded-full mt-8 flex justify-center items-center gap-2 bg-black max-w-[300px]'
        //             >
        //                 <span>Зателефонувати</span> 
        //                 <div className='w-10 h-10 bg-black rounded-full'>
        //                     <img className='w-full h-full object-cover p-2' src={phoneIcon} alt="phone" />
        //                 </div>
        //             </Button>
        //         </div>

        //         <div className='relative basis-3/5'>
        //             <div className=' absolute top-0 right-0'>
        //                 <div className='max-w-[100px] max-h-[100px] bg-white rounded-full'>
        //                     <img 
        //                     className='w-full h-full object-cover rounded-2xl shadow-2xl shadow-white' 
        //                     src={strumLogo} 
        //                     alt="logoIcon" />
        //                 </div>
        //             </div>

        //             <div className=' absolute top-0 right-0'>
        //                 <div>
        //                     <img 
        //                     className='max-w-[400px] md:max-w-[520px]' 
        //                     src={callUs} 
        //                     alt="human" />
        //                 </div>
        //             </div>

        //             <div className=' absolute top-0 right-0'>
        //                 <div>
        //                     <img 
        //                     className='max-w-[700px] opacity-70' 
        //                     src={house} 
        //                     alt="house" />
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        // </section>
        <section
        id='contact'
        className='bg-BrandYellow w-full min-h-[680px] lg:min-h-[600px] xl:min-h-[470px] relative pt-16 xl:pt-24' 
        style={{clipPath: "polygon(10% 4%, 40% 4%, 44% 0%, 100% 0%, 100.2% 100.5%, 50% 100.5%, 0% 100.5%, 0% 0%, 6% 0%)"}}
        >
            <div className='container p-4 w-full h-full'>
                <div className='flex flex-col'>
                    <h3 className='text-3xl font-bold max-w-[600px]'>Якщо потрібний якісний електромонтаж - телефонуйте!</h3>
                    <Button 
                    size='lg'
                    className='text-BrandYellow rounded-full mt-8 flex justify-center items-center gap-2 bg-black max-w-[300px]'
                    >
                        <span>Зателефонувати</span> 
                        <div className='w-10 h-10 bg-black rounded-full'>
                            <img className='w-full h-full object-cover p-2' src={phoneIcon} alt="phone" />
                        </div>
                    </Button>
                </div>
            </div>

            <div className='absolute top-[360px] md:top-[290px] lg:top-[140px] xl:top-[10px] right-0 md:right-20 lg:right-44 z-10'>
                <div className=' relative'>
                    <img 
                    className='max-w-350px sm:max-w-[400px] md:max-w-[520px]' 
                    src={callUs} 
                    alt="human" />
                    <div className='max-w-[60px] max-h-[60px] sm:max-w-[100px] sm:max-h-[100px] bg-white rounded-full absolute z-20 top-40 left-2 sm:left-[-30px] md:top-56 md:left-[-5px]'>
                        <img 
                        className='w-full h-full object-cover rounded-2xl shadow-2xl shadow-white' 
                        src={strumLogo} 
                        alt="logoIcon" />
                    </div>
                </div>
            </div>

            <div className='absolute top-[322px] sm:top-[273px] lg:top-[193px] xl:top-[63px] right-0'>
                <div>
                    <img className='max-w-[700px] opacity-70' src={house} alt="house" />
                </div>
            </div>
        </section>
    );
}

export default Contacts;