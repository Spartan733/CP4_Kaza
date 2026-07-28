import { useState } from 'react'
// import { useNavigate, useParams} from 'react-router-dom'
import logements from '../data/logements.json'

type detailCardProps = {
    id: string;
    images: string[];
    title: string;
    location: string;
    tags: string[];
    hostName: string;
    hostPictures: string;
    rating: string;
    desc: string;
    stuff: string;
};

// const [indexImage, setIndexImage] = useState(0);

export default function detailCard({id}: detailCardProps) {
    // const lieu = location.find((1) => 1.id === id),

    // if(!lieu) {
    //     return <p>Ce lieu n'existe pas</p>
    // }

    // function nextImg() {
    //     setIndexImage((indexImage + 1) % lieu!.images.length);
    // }

    // function prevImg() {
    //     setIndexImage((indexImage - 1 +lieu!.images.length) % lieu!.images.length);
    // }

    return(
        <div>
            <p>BJR</p>
        </div>
    )
}