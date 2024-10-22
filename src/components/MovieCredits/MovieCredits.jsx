import React, { act, useEffect, useState } from "react";
import { getMovieCredits } from "../../api/movies-api";
import { useParams } from "react-router-dom";
import CastCard from "../CastCard/CastCard";

import css from "./MovieCredits.module.css";

const MovieCredits = () => {
  const { movieId } = useParams();
  const [castArray, setCastArray] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await getMovieCredits(movieId);
      setCastArray(response.cast);
    })();
  }, []);

  return (
    <div>
      <ul className={css.ul}>
        {castArray.length === 0 ? (
          <p>There is something empty</p>
        ) : (
          castArray.map((actor) => {
            return (
              <li key={actor.id} className={css.li}>
                <CastCard actor={actor} />
              </li>
            );
          })
        )}
      </ul>
    </div>
  );
};

export default MovieCredits;
