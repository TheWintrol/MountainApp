import { useParams, Link } from "react-router-dom";

import "./mountainDetails.scss";

export const MountainDetails = ({ mountains }) => {
  const { id } = useParams();
  const mountain = mountains.find((m) => m.name === id);

  if (!mountain) {
    return <div>Mountain not found</div>;
  }

  const { name, description, image } = mountain;

  return (
    <div className="mountain-details">
      <h2>{name}</h2>
      <div className="mountain-content">
        <img className="mountain-image" src={image} alt={name} />
        <p>{description}</p>
      </div>
      <Link to="/" className="back-link">
        Back to Mountains
      </Link>
    </div>
  );
};
