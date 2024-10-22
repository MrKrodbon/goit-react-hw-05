import css from "./CastCard.module.css";

const CastCard = ({ actor: { name, profile_path, character } }) => {
  return (
    <div>
      <img
        src={`https://image.tmdb.org/t/p/w500${profile_path}`}
        className={css.img}
      />
      <p>{name}</p>
      <p>Character: {character}</p>
    </div>
  );
};

export default CastCard;
