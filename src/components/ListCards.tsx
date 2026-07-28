// import { useNavigate } from "react-router-dom";
import Card from "./Card";
import logements from "../data/logements.json"


export default function ListCard() {
    // // function component( {/logements/:id} ) {
    //     const navigate = useNavigate();
    // }

    // const goToDetailsPages = () => {
    //     navigate('../pages/Details.tsx/logements/:id')
    // }
    return (
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
    );
}