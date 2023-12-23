import React from "react";

function getErrorMsg(string: ErrorProps) {
  return <h1>Example</h1>;
}

export default getErrorMsg;

export type ErrorProps = {
  status: string;
};

/* export const ErrorMsg: React.FC<ErrorProps> = (errorMsg) => {
  return <>{<h1>{getErrorMsg(status)}</h1>}</>;
};
 */
