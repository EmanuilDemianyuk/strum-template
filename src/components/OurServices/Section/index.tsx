import { SectionProps } from "src/types";

const Section = ( { title, img }: SectionProps ): JSX.Element => {
  return (
    <div className='text-center md:text-start'>
        <div className='w-20 h-20 bg-BrandYellow rounded-2xl mx-amd:mx-0'>
            <img src={img} alt="icon" />
        </div>
        <h5 className='py-3 font-medium text-xl'>{title}</h5>
    </div>
  )
}

export default Section;