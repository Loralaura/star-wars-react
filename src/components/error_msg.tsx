import React from "react";

type Props = {
  status?: number;
};

export const ErrorMsg: React.FC<Props> = ({ status }) => {
  if (status === 500)
    return (
      <div data-testid="error">Oops... something went wrong, try again 🤕</div>
    );

  if (status === 418)
    return <div data-testid="error">418 I'm a tea pot 🫖, silly</div>;

  return null;
};
