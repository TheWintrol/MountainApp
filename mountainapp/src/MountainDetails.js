import { useParams, Link } from "react-router-dom";

export const MountainDetails = ({ mountains }) => {
  const { id } = useParams();
  const mountain = mountains.find((m) => m.name === id);

  if (!mountain) {
    return <div>Mountain not found</div>;
  }

  const { name, description, image } = mountain;

  return (
    <div>
      <h2>{name}</h2>
      <p>{description}</p>
      <img src={image} alt={name} />
      <Link to="/">Back to Mountains</Link>
    </div>
  );
};
