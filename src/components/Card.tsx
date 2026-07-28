import { Link } from "react-router-dom";

type CardProps = {
    id: string;
    images: string[];
    title: string;
    location: string;
    tags: string;
    hostName: string;
    hostPictures: string;
    rating: string;
    desc: string;
    stuff: string;
};

export default function Card({id, images, title, location, tags, rating} : CardProps) {
    return(
            <div>
                <Link to={`../pages/Details.tsx/logements/${id}`}>
                    <img src={images[0]} alt={title} />
                </Link>
                <h2>{title}</h2>
                <p>{location}</p>
                <p>{tags}</p>
                <p>{rating}</p>
            </div>
        
    );
}
