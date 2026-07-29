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
  tags,
  location,
  rating,
}: CardProps) {
  const ratingNumber = Number(rating);

  return (
    <Link to={`/logement/${id}`}>
      <div className="card">
        <img src={images[0]} alt={title} />

        <h2>{title}</h2>

        <p>{location}</p>
        
        <div className="tags">
            {tags.map((tag) => (
                <span key={tag}>{tag}</span>
            ))}
        </div>

        <div className="rating">
            {[1, 2, 3, 4, 5].map((star) => (
                <span
                    key={star}
                    className={star <= ratingNumber ? "filled" : ""}
                >
                    ★
                </span>
            ))}
        </div>
        
      </div>
    </Link>
  );
}
