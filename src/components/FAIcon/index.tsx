import React from "react";

export const FAIcon: React.FC<{ faIconName: string }> = ({ faIconName }) => {
  return (
    <span className="icon">
      <i className={`fab fa-${faIconName}`}></i>
    </span>
  );
};
