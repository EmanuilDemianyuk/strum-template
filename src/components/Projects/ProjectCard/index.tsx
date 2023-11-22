import React from 'react';
import { Typography } from '@material-tailwind/react';
import { ProjectCardProps } from "src/types";

const ProjectCard = ({ title, img, link }: ProjectCardProps ): JSX.Element => {
    return (
        <a 
        className='group'
        href={link} 
        target='_blanck' >
            <figure className="relative h-96 w-full">
                <img
                className="h-full w-full rounded-xl object-cover object-center"
                src={img}
                alt="image"
                />
                <figcaption className="absolute bottom-8 left-2/4 w-[calc(100%-4rem)] -translate-x-2/4 rounded-xl bg-BrandYellow py-2 px-2 shadow-lg shadow-black/5 text-center group-hover:bg-black group-hover:text-BrandYellow duration-200">
                <div>
                    <Typography variant="h6" className='font-content'>
                        {title}
                    </Typography>
                </div>
                </figcaption>
            </figure> 
        </a>
    );
}

export default ProjectCard;