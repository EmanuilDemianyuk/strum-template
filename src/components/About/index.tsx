import aboutImage from 'src/assets/images/aboutImage.jpeg';
import aboutImageWebP from 'src/assets/images/webP/aboutImage_webP.webp';


const About = () => {
    return (
        <section
            id='about'
            className='w-full pt-16 md:pt-32'
        >
            <div className='container p-4 flex flex-col justify-center w-full h-full'>
                <div className='flex flex-wrap justify-between lg:flex-nowrap'>
                    <div className='basis-full order-2 lg:order-1 lg:basis-6/12'>
                        <h3 className='text-3xl font-bold mb-4'>Про Strum</h3>
                        <p className='mb-8 text-BrandGray'>Ми спеціалізуємось на наданні послуг високоякісного електромонтажу. Наші досвідчені спеціалісти швидко та надійно виконають Ваш проєкт професійним інструментом, по доступним цінам.</p>
                        <div
                            className='flex flex-col gap-6 lg:flex-row lg:gap-20 font-medium text-xl mb-8'>
                            <div className='flex flex-col gap-6'>
                                <span className='border-b-4 border-BrandYellow'>&#10003; Висока якість</span>
                                <span className='border-b-4 border-BrandYellow'>&#10003; Швидко та надійно</span>
                                <span className='border-b-4 border-BrandYellow'>&#10003; Договір</span>
                            </div>
                            <div className='flex flex-col gap-6'>
                                <span className='border-b-4 border-BrandYellow'>&#10003; Гарантія</span>
                                <span className='border-b-4 border-BrandYellow'>&#10003; Доступні ціни</span>
                                <span className='border-b-4 border-BrandYellow'>&#10003; Знижки на матеріал</span>
                            </div>
                        </div>
                        <div className='bg-black text-BrandYellow rounded-2xl inline-block max-w-[400px]'>
                            <p className='p-4 font-light'>Ви можете звʼязатись із нами за цим номером телефону
                                <a href="tel:+380501918692" className='px-2'>
                                    <span className='underline text-lg inline-block'> +380-50-191-86-92</span>
                                </a>
                            </p>
                        </div>
                    </div>

                    <div className='basis-full order-1 lg:order-2 lg:basis-5/12 mb-8 lg:mb-0'>
                        <div className='h-full'>
                            <picture>
                                <source srcSet={aboutImageWebP} type="image/webp" />
                                <img
                                    style={{ clipPath: "polygon(50% 0%, 100% 32%, 100.5% 100.5%, 0% 100.5%, 0% 32%)" }}
                                    className='w-full h-full object-cover rounded-2xl'
                                    src={aboutImage}
                                    alt="about image"
                                    loading="lazy"
                                />
                            </picture>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;