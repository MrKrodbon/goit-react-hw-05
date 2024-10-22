import React from "react";

const ReviewCard = ({ review: { author, content, updated_at } }) => {
  return (
    <div>
      <h4>{author}</h4>
      <p>{content}</p>
      <p>{updated_at}</p>
    </div>
  );
};

export default ReviewCard;
