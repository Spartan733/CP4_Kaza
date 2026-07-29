import {useState} from 'react';

type CarouselProps = {
    pictures: string[];
}
function Carousel({pictures}: CarouselProps) {
    const [currentImage, setCurrentImage] = useState(0);

    function nextImage() {
        if (currentImage === pictures.length - 1) {
            setCurrentImage(0);
        } else {
            setCurrentImage(currentImage + 1)
        }
    }

    function previousImage() {
        if (currentImage === 0 ) {
            setCurrentImage(pictures.length - 1);
        } else {
            setCurrentImage(currentImage - 1);
        }
    }

    return(
        <div className='carousel'>
            <img
                src={pictures[currentImage]}
                alt={`Photo ${currentImage + 1}`}
                className='carousel_image'
            />

            {pictures.length > 1 && (
                <>
                    <button className='carousel_left' onClick={previousImage}>
                        ❮
                    </button>

                    <button className='carousel_right' onClick={nextImage}>
                        ❯
                    </button>

                    <p className='conteur_img'>
                        {currentImage + 1} / {pictures.length}
                    </p>
                </>
            )}
        </div>
    );
}

export default Carousel