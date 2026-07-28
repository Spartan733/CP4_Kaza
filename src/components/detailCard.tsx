import { useState } from 'react'
// import { useNavigate, useParams} from 'react-router-dom'
import logements from '../data/logements.json'

type detailCardProps = {
    id: string;
};

export default function detailCard({id}: detailCardProps) {
    const lieu = location.find((1) => 1.id === id);

    const [indexImage, setIndexImage] = useState(0);

    if(!lieu) {
        return <p>Ce lieu n'existe pas</p>
    }

    function nextImg() {
        setIndexImage((indexImage + 1) % lieu!.images.length);
    }

    function prevImg() {
        setIndexImage((indexImage - 1 +lieu!.images.length) % lieu!.images.length);
    }

    return(

        {/* Carousel */}
        <img>
            src={logements.images[indexImage]}
            alt={logements.title}
        </img>

        {/* Bouton prevImage */}
        <button onClick={prevImg}> Image précédente </button>

        <button onClick={nextImg}> Image suivante </button>

    )
}