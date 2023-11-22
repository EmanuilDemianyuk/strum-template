import imageOne from 'src/assets/images/service-1.jpeg';
import imageTwo from 'src/assets/images/service-2.jpeg';
import imageThree from 'src/assets/images/service-3.webp';
import imageFour from 'src/assets/images/service-4.jpeg';
import imageFive from 'src/assets/images/service-5.jpeg';
import imageSix from 'src/assets/images/service-6.jpeg';
import imageSeven from 'src/assets/images/service-7.jpg';
import imageEight from 'src/assets/images/service-8.jpeg';
import Section from './Section';

const OurServices = () => {
    return (
        <section
        id='services'
        className='w-full pb-32 md:pb-60'
        >
            <div className='container p-4 flex flex-col justify-center w-full h-full'>
                <div className='text-center'>
                    <h3 className='text-3xl font-bold mb-4'>Наші послуги</h3>
                    <p className='mb-8 text-BrandGray max-w-[600px] mx-auto'>Виконуємо всі види електромонтажних робіт будь-якої складності у квартирах, будинках, котеджах, офісах, готелях, та виробничих приміщеннях</p>
                </div>

                <div className='grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
                    <Section
                        img={imageOne}
                        title='РОЗВЕДЕННЯ (ЗАМІНА) ПРОВОДКИ'
                    />
                    <Section
                        img={imageTwo}
                        title='ВСТАНОВЛЕННЯ СВІТИЛЬНИКІВ, ВИМИКАЧІВ, РОЗЕТОК'
                    />
                    <Section
                        img={imageThree}
                        title='ВСТАНОВЛЕННЯ СИГНАЛІЗАЦІЇ'
                    />
                    <Section
                        img={imageFour}
                        title='ВСТАНОВЛЕННЯ ВІДЕОНАГЛЯДУ'
                    />
                    <Section
                        img={imageFive}
                        title='МОНТАЖ ЕЛЕКТРОЩИТКА'
                    />
                    <Section
                        img={imageSix}
                        title='ВЛАШТУВАННЯ ЕЛЕКТРИЧНОЇ ТЕПЛОЇ ПІДЛОГИ'
                    />
                    <Section
                        img={imageSeven}
                        title='СИСТЕМА "РОЗУМНИЙ ДІМ"'
                    />
                    <Section
                        img={imageEight}
                        title='БЛИСКАВКОЗАХИСТ ЗАЗЕМЛЕННЯ'
                    />
                </div>
            </div>
        </section>
    );
}

export default OurServices;