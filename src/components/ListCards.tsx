import Card from "./Card";
import logements from "../data/logements.json"

type listCardProps = {
    onCardClick: (id: string) => void;
}

export default function ListCard() {
    return (
        <div>
            {logements.map((logements) => (
                <Card
                    key={logements.id}
                    images={logements.pictures}
                    title={logements.title}
                    location={logements.location}
                    onClick={() => onCardClick(logements.id)}
                />
            ))} 
        </div>
    );
}