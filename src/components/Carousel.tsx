import { useState } from "react";
import Card from "./Card";
import logements from "../data/logements.json";

const ImgCarou = ({logements.pictures[0]}) => {
    const [index, setIndex] = useState(0);

    const GoToNextImg = () => {
        setIndex((prevIndex) =>
            prevIndex === pictures.lenght - 1 ? 0 : prevIndex +1
        ); 
    };

    const GoToPrevImg = () => {
        setIndex((prevIndex) => 
            prevIndex === 0 ? pictures.lenght - 1 : prevIndex -1
        );
    };


    return(
        <div>
            {logements.map((logements) => (
                <Card
                    key={logements.id}
                    images={logements.pictures}
                    title={logements.title}
                    location={logements.location}
                    tags={logements.tags}
                    // onClick={goToDetailsPages}
                />
            ))}
        </div>
    )
}