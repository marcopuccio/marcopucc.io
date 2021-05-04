import React from "react";

interface TitleProps {
  children: React.ReactNode;
}

export const Title: React.FC<TitleProps> = ({ children }) => (
  <h1 className="title is-1">{children}</h1>
);
