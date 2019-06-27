import React from "react";

const Error = props => {
  const { error } = props;
  if (error) return <p>{error}</p>;
  else return <p>ERRRRORRRRR</p>;
};

export default Error;
