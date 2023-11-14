import instagramLogo from 'src/assets/icons/instagramLogo.svg';

const SocialMedia = () => {
  return (
    <div className='max-w-[2em] m-h-[2em]'>
        <a 
        href='https://www.instagram.com/strum.cv/' 
        target='_blanck' 
        className='p-1 rounded-lg border border-BrandYellow hover:bg-gray-700 block'
        >
            <img src={instagramLogo} alt="instaLogo"/>
        </a>
    </div>
  )
}

export default SocialMedia;