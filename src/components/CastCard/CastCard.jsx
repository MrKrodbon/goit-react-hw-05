import css from "./CastCard.module.css";

import { POSTER_PATH, DEFAULT_IMG } from "../../constants/constants.js";

const CastCard = ({ actor: { name, profile_path, character } }) => {
  return (
    <div className={css.castCardWrapper}>
      <img src={`${POSTER_PATH}${profile_path}`} className={css.img} />
      <div className={css.content}>
        <p>{name}</p>
        <p>Character: {character}</p>
      </div>
    </div>
  );
};

export default CastCard;
