import "./MountainInfo.scss";

export const MountainInfo = (props) => {
  const { name, description } = props;

  return (
    <div className="mountain-info">
      <h2>{name}</h2>
      <p>{description}</p>
    </div>
  );
};
