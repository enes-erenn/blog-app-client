import React from "react";

interface Props {
  error: ErrorType;
}

export type ErrorType = {
  message: string;
};

const Error: React.FC<Props> = ({ error }) => {
  return <div style={{ color: "tomato" }}>{error.message}</div>;
};

export default Error;
