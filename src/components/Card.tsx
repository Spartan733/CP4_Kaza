import { Link } from "react-router-dom";
// import logements from '../data/logements.json';

type CardProps = {
    id: string;
    images: string[];
    title: string;
    location: string;
    tags: string[];
    rating: string;
};

// function GetIdOnClick =  (id: string) => {
//     console.log("Id dela carte récupérer :", id)
// }


export default function Card({images, title, location, tags, rating} : CardProps) {
    return(
            <div>
                <Link to={`../components/detailCard.tsx`}>
                    {/* // onClick={() => GetIdOnClick()} */}
                    <img src={images[0]} alt={title} />
                </Link>
                <h2>{title}</h2>
                <p>{location}</p>
                <p>{tags}</p>
                <p>{rating}</p>
            </div>
        
    );
}
