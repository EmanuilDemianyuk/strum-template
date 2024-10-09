import SocialMedia from '../SocialMedia';
import ProjectCard from './ProjectCard';

import * as img from "./re-export";

const Projects = () => {
    return (
        <section
            id='projects'
            className='w-full pt-16 md:pt-32'
        >
            <div className='container p-4 flex flex-col justify-center w-full h-full'>
                <div className='flex justify-between items-center mb-8'>
                    <h3 className='text-2xl sm:text-3xl font-bold'>Наші проекти</h3>
                    <SocialMedia />
                </div>

                <div className='grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
                    <ProjectCard
                        title='ЕЛЕКТРОМОНТАЖ У КВАРТИРАХ'
                        link='https://www.instagram.com/p/CyAQAwfNPzx/'
                    >
                        <picture>
                            <source srcSet={img.imageThreeWebP} />
                            <img
                                className="h-full w-full rounded-xl object-cover object-center"
                                src={img.imageThree}
                                alt="image"
                                loading="lazy"
                            />
                        </picture>
                    </ProjectCard>

                    <ProjectCard
                        title='ЗАМІСЬКІ БУДИНКИ'
                        link='https://www.instagram.com/p/CtydkpfOvuI/'
                    >
                        <picture>
                            <source srcSet={img.imageTwoWebP} />
                            <img
                                className="h-full w-full rounded-xl object-cover object-center"
                                src={img.imageTwo}
                                alt="image"
                                loading="lazy"
                            />
                        </picture>
                    </ProjectCard>

                    <ProjectCard
                        title='МОНТАЖ ЗАЗЕМЛЕННЯ'
                        link='https://www.instagram.com/p/CpHeNvFKxV9/'
                    >
                        <picture>
                            <source srcSet={img.imageFourWebP} />
                            <img
                                className="h-full w-full rounded-xl object-cover object-center"
                                src={img.imageFour}
                                alt="image"
                                loading="lazy"
                            />
                        </picture>
                    </ProjectCard>

                    <ProjectCard
                        title='МОНТАЖ СИСТЕМ ОСВІТЛЕННЯ'
                        link='https://www.instagram.com/p/CqAIAUiuKYt/'
                    >
                        <picture>
                            <source srcSet={img.imageOneWebP} />
                            <img
                                className="h-full w-full rounded-xl object-cover object-center"
                                src={img.imageOne}
                                alt="image"
                                loading="lazy"
                            />
                        </picture>
                    </ProjectCard>
                </div>
            </div>
        </section>
    );
}

export default Projects;