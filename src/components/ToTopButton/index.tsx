import { Button } from '@material-tailwind/react';
import { useState, useEffect } from 'react';
import topButton from 'src/assets/icons/toTopButton.svg';

const ToTopButton = () => {
    const [backToTop, setBackToTop] = useState<boolean>(false);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if(window.scrollY > 200) {
                setBackToTop(true);
            } else {
                setBackToTop(false);
            }
        });
    }, [])

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <>
            {backToTop && (
                <Button
                onClick={scrollToTop}
                className='fixed right-5 bottom-5 z-50 bg-transparent p-0 shadow-none hover:shadow-none'
                >
                    <div className='w-16 h-16 bg-white rounded-full shadow-lg'>
                        <img className='w-full h-full object-cover' src={topButton} alt="button" />
                    </div>
                </Button>)
            }
        </>
    );
}

export default ToTopButton;