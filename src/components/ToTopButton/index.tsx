import { useState, useEffect } from 'react';
import topButton from 'src/assets/icons/toTopButton.svg';

const ToTopButton = () => {
    const [backToTop, setBackToTop] = useState<boolean>(false);

    useEffect(() => {
        window.addEventListener('scroll', () => window.scrollY > 200 ? setBackToTop(true) : setBackToTop(false));
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
                <button
                onClick={scrollToTop}
                className='fixed right-7 bottom-7 z-50 w-14 h-14 bg-white rounded-full shadow-lg animate-bounce'
                >
                    <img className='w-full h-full object-cover' src={topButton} alt="button" />
                </button>
                )
            }
        </>
    );
}

export default ToTopButton;