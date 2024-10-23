import css from "./CastCard.module.css";

import { POSTER_PATH, DEFAULT_IMG } from "../../constants/constants.js";

const CastCard = ({ actor: { name, profile_path, character } }) => {
  return (
    <div className={css.castCardWrapper}>
      <img
        src={`${
          profile_path ? [`${POSTER_PATH}${profile_path}`] : DEFAULT_IMG
        }  `}
        className={css.img}
        alt="profile_avatar"
      />

      <div className={css.content}>
        <p>{name}</p>
        <p>Character: {character}</p>
      </div>
    </div>
  );
};

export default CastCard;
