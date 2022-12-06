import React from "react";
import { ErrorType } from "../../types/types";

interface Props {
  error: ErrorType;
}

const Error: React.FC<Props> = ({ error }) => {
  return <div style={{ color: "tomato" }}>{error.message}</div>;
};

export default Error;
