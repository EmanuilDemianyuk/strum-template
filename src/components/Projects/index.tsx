import SocialMedia from '../SocialMedia';
import ProjectCard from './ProjectCard';
import imageOne from 'src/assets/images/projects-1.jpeg';
import imageTwo from 'src/assets/images/projects-2.jpeg';
import imageThree from 'src/assets/images/projects-3.jpeg';
import imageFour from 'src/assets/images/projects-4.jpeg';

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
                    img={imageThree}
                    link='https://www.instagram.com/p/CyAQAwfNPzx/'
                    />

                    <ProjectCard
                    title='ЗАМІСЬКІ БУДИНКИ'
                    img={imageTwo}
                    link='https://www.instagram.com/p/CtydkpfOvuI/'
                    />

                    <ProjectCard
                    title='МОНТАЖ ЗАЗЕМЛЕННЯ'
                    img={imageFour}
                    link='https://www.instagram.com/p/CpHeNvFKxV9/'
                    />

                    <ProjectCard
                    title='МОНТАЖ СИСТЕМ ОСВІТЛЕННЯ'
                    img={imageOne}
                    link='https://www.instagram.com/p/CqAIAUiuKYt/'
                    />
                </div>
            </div>
        </section>
    );
}

export default Projects;