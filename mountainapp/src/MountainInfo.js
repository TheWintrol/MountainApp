import "./MountainInfo.scss";

export const MountainInfo = (props) => {
  const { name, description, image } = props;

  return (
    <div className="mountain-info">
      <h2>{name}</h2>
      <p>{description}</p>
      <img src={image} alt={name} />
    </div>
  );
};
