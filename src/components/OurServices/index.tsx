import ServicesCard from './ServicesCard';
import ImageBox from '../ImageBox';
import { servicesList } from './constant/servicesList';

const imgClass = 'h-full w-full object-cover object-center';

const OurServices = () => {
    return (
        <section
            id='services'
            className='w-full pt-16 md:pt-32'
        >
            <div className='container p-4 flex flex-col justify-center w-full h-full'>
                <div className='text-center'>
                    <h3 className='text-3xl font-bold mb-4'>Наші послуги</h3>
                    <p className='mb-8 text-BrandGray max-w-[600px] mx-auto'>Виконуємо всі види електромонтажних робіт будь-якої складності у квартирах, будинках, котеджах, офісах, готелях, та виробничих приміщеннях</p>
                </div>

                <div className='grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
                    {servicesList.map(({ id, title, image, imageWebP }) => (
                        <ServicesCard
                            key={id}
                            title={title}
                        >
                            <ImageBox {...{ title, image, imageWebP }} className={imgClass} />
                        </ServicesCard>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default OurServices;