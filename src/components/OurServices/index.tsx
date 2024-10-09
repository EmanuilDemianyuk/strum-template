import ServicesCard from './ServicesCard';

import * as img from "./re-export";

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
                    <ServicesCard
                        title='РОЗВЕДЕННЯ (ЗАМІНА) ПРОВОДКИ'
                    >
                        <picture>
                            <source srcSet={img.imageOneWebP} type="image/webp" />
                            <img
                                className="w-full h-full object-cover transition-transform hover:scale-[1.2]"
                                src={img.imageOne}
                                alt="image"
                                loading='lazy'
                            />
                        </picture>
                    </ServicesCard>
                    <ServicesCard
                        title='ВСТАНОВЛЕННЯ СВІТИЛЬНИКІВ, ВИМИКАЧІВ, РОЗЕТОК'
                    >
                        <picture>
                            <source srcSet={img.imageTwoWebP} type="image/webp" />
                            <img
                                className="w-full h-full object-cover transition-transform hover:scale-[1.2]"
                                src={img.imageTwo}
                                alt="image"
                                loading="lazy"
                            />
                        </picture>
                    </ServicesCard>
                    <ServicesCard
                        title='ВСТАНОВЛЕННЯ СИГНАЛІЗАЦІЇ'
                    >
                        <picture>
                            <source srcSet={img.imageThreeWebP} type="image/webp" />
                            <img
                                className="w-full h-full object-cover transition-transform hover:scale-[1.2]"
                                src={img.imageThree}
                                alt="image"
                                loading="lazy"
                            />
                        </picture>
                    </ServicesCard>
                    <ServicesCard
                        title='ВСТАНОВЛЕННЯ ВІДЕОНАГЛЯДУ'
                    >
                        <picture>
                            <source srcSet={img.imageFourWebP} type="image/webp" />
                            <img
                                className="w-full h-full object-cover transition-transform hover:scale-[1.2]"
                                src={img.imageFour}
                                alt="image"
                                loading="lazy"
                            />
                        </picture>
                    </ServicesCard>
                    <ServicesCard
                        title='МОНТАЖ ЕЛЕКТРОЩИТКА'
                    >
                        <picture>
                            <source srcSet={img.imageFiveWebP} type="image/webp" />
                            <img
                                className="w-full h-full object-cover transition-transform hover:scale-[1.2]"
                                src={img.imageFive}
                                alt="image"
                                loading="lazy"
                            />
                        </picture>
                    </ServicesCard>
                    <ServicesCard
                        title='ВЛАШТУВАННЯ ЕЛЕКТРИЧНОЇ ТЕПЛОЇ ПІДЛОГИ'
                    >
                        <picture>
                            <source srcSet={img.imageSixWebP} type="image/webp" />
                            <img
                                className="w-full h-full object-cover transition-transform hover:scale-[1.2]"
                                src={img.imageSix}
                                alt="image"
                                loading="lazy"
                            />
                        </picture>
                    </ServicesCard>
                    <ServicesCard
                        title='СИСТЕМА "РОЗУМНИЙ ДІМ"'
                    >
                        <picture>
                            <source srcSet={img.imageSevenWebP} type="image/webp" />
                            <img
                                className="w-full h-full object-cover transition-transform hover:scale-[1.2]"
                                src={img.imageSeven}
                                alt="image"
                                loading="lazy"
                            />
                        </picture>
                    </ServicesCard>
                    <ServicesCard
                        title='БЛИСКАВКОЗАХИСТ ЗАЗЕМЛЕННЯ'
                    >
                        <picture>
                            <source srcSet={img.imageEightWebP} type="image/webp" />
                            <img
                                className="w-full h-full object-cover transition-transform hover:scale-[1.2]"
                                src={img.imageEight}
                                alt="image"
                                loading="lazy"
                            />
                        </picture>
                    </ServicesCard>
                </div>
            </div>
        </section>
    );
}

export default OurServices;