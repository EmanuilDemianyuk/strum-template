import SocialMedia from '../SocialMedia';
import ProjectCard from './ProjectCard';
import ImageBox from '../ImageBox';

import { projectData } from './constant/projectData';

const imgClass = 'h-full w-full rounded-xl object-cover object-center';

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
                    {projectData.map(({ title, image, imageWebP, id, link }) => {
                        return (
                            <ProjectCard title={title} link={link} key={id}>
                                <ImageBox {...{ title, image, imageWebP }} className={imgClass} />
                            </ProjectCard>
                        )
                    })}
                </div>
            </div>
        </section>
    );
}

export default Projects;