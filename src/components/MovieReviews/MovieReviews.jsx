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
      try {
        const response = await getMovieReviews(movieId);

        setReviewArray(response.results);
      } catch (error) {
        setReviewArray([]);
        throw new Error("Error of search reviews");
      }
    })();
  }, [movieId]);

  return (
    <div>
      <ul className={css.ul}>
        {reviewArray.length === 0 ? (
          <p className={css.emptyReviewField}>
            There is no reviews... Be the first!
          </p>
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
