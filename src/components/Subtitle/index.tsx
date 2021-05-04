import React from "react";

interface SubtitleProps {
  children: React.ReactNode;
}

export const Subtitle: React.FC<SubtitleProps> = ({ children }) => (
  <h2 className="subtitle is-3">{children}</h2>
);
