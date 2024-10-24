import React from "react";

import css from "./NotFoundPage.module.css";

const NotFoundPage = () => {
  return <div className={css.notFoundWrapper}><span className={css.statusCode}>404</span> Page not found</div>;
};

export default NotFoundPage;
