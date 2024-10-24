import React, { useEffect, useState } from "react";
import { getMovieCast } from "../../api/movies-api";
import { useParams } from "react-router-dom";
import CastCard from "../CastCard/CastCard";

import css from "./MovieCast.module.css";

const MovieCast = () => {
  const { movieId } = useParams();
  const [castArray, setCastArray] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const response = await getMovieCast(movieId);
        setCastArray(response.cast);
      } catch (error) {
        setCastArray([]);
        throw new Error("Error of search actors");
      }
    })();
  }, [movieId]);

  return (
    <div>
      <ul className={css.ul}>
        {castArray.length === 0 ? (
          <p className={css.emptyCastField}>
            There is no information about actors
          </p>
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

export default MovieCast;
