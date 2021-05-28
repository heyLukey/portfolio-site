import React from "react";
import "./Page404.css";

// Page to be rendered on invalid url
const Page404 = () => {
  return (
    <React.Fragment>
      <div id="page-404">
        <h1>404</h1>
        <h4>The page you are looking for does not exist!</h4>
      </div>
    </React.Fragment>
  );
};

export default Page404;
