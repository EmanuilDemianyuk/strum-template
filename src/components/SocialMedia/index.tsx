import { Button } from '@material-tailwind/react';
import instagramLogo from 'src/assets/icons/instagramLogo.svg';

const SocialMedia = () => {
  return (
    <div>
      <div>
        <a 
        href='https://www.instagram.com/strum.cv/' 
        target='_blanck' 
        className='inline-block'
        >
          <Button
          size='md'
          className='rounded-full bg-BrandYellow text-black flex items-center gap-2'
          >
            <span>strum.cv</span>
            <img className='w-6' src={instagramLogo} alt="instaLogo"/>
          </Button>
        </a>
      </div>
    </div>
  );
}

export default SocialMedia;