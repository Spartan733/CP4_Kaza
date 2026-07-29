// import { useNavigate } from "react-router-dom";
import Card from "./Card";
import logements from "../data/logements.json"

import '../styles/ListCard.scss'


export default function ListCard() {
    
    return (
        <div className="list_card">
            {logements.map((logements) => (
                <Card
                    key={logements.id}
                    id={logements.id}
                    images={logements.pictures}
                    title={logements.title}
                    location={logements.location}
                    tags={logements.tags}
                    rating={logements.rating}
                />
            ))} 
        </div>
    );
}