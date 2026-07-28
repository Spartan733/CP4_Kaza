import { Link } from "react-router-dom";

type CardProps = {
    id: string;
    images: string[];
    title: string;
    location: string;
};

export default function Card({id, images, title, location} : CardProps) {
    return(
        <Link to={`/logements/${id}`}>
            <div>
                <img src={images[0]} alt={title} />

                <h2>{title}</h2>

                <p>{location}</p>
            </div>
        </Link>
    );
}