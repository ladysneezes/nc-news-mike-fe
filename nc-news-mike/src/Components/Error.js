import React from "react";

const Error = props => {
  const { error } = props;
  if (error) return <p>{error.response.data.msg}</p>;
  else return <p>ERRRRORRRRR</p>;
};

export default Error;
