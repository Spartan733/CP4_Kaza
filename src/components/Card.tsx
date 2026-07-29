import { Link } from "react-router-dom";


type CardProps = {
    id: string;
    images: string[];
    title: string;
    location: string;
    tags: string[];
    rating: string;
};


export default function Card({
  id,
  images,
  title,
  location,
}: CardProps) {
  return (
    <Link to={`/logement/${id}`}>
      <div className="card">
        <img src={images[0]} alt={title} />

        <h2>{title}</h2>

        <p>{location}</p>
      </div>
    </Link>
  );
}
