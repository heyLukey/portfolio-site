import React, { useEffect, useState } from "react";
import "./ErrorNotice.css";

// Component that renders if error is caught
const ErrorNotice = ({ errorMsg, setErrorMsg }) => {
  const [errorClass, setErrorClass] = useState("error-hidden");

  // Determine styling based on type of error
  useEffect(() => {
    const determineClass = () => {
      if (errorMsg.replace(/ .*/, "") === "Subject")
        setErrorClass("error-notice arrow-right subject-error");
      else if (errorMsg.replace(/ .*/, "") === "Text")
        setErrorClass("error-notice arrow-right text-error");
      else setErrorClass("error-notice arrow-right");
    };
    determineClass();
  }, [errorMsg]);

  // de-render component on click
  const clearError = () => {
    setErrorMsg(undefined);
  };

  return (
    <React.Fragment>
      <div onClick={clearError} className={errorClass}>
        <div className="error-text">{errorMsg}</div>
      </div>
    </React.Fragment>
  );
};

export default ErrorNotice;
