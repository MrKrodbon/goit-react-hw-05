import React, { useEffect, useState } from "react";

import ReviewCard from "../ReviewCard/ReviewCard";

import { getMovieReviews } from "../../api/movies-api";
import css from "./MovieReviews.module.css";
import { useParams } from "react-router-dom";

const MovieReviews = () => {
  const { movieId } = useParams();
  const [reviewArray, setReviewArray] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await getMovieReviews(movieId);
      setReviewArray(response.results);
    })();
  }, []);

  return (
    <div>
      <ul className={css.ul}>
        {reviewArray.length === 0 ? (
          <p>There is no review... Be the first!</p>
        ) : (
          reviewArray.map((review) => {
            return (
              <li key={review.id} className={css.li}>
                <ReviewCard review={review} />
              </li>
            );
          })
        )}
      </ul>
    </div>
  );
};

export default MovieReviews;
