import React from "react";

import css from "./ReviewCard.module.css";

const ReviewCard = ({ review: { author, content } }) => {
  return (
    <div className={css.reviewWrapper}>
      <h4 className={css.author}>{author}</h4>
      <p>{content}</p>
    </div>
  );
};

export default ReviewCard;
