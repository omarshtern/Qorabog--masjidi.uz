import React from "react";
import { useParams } from "react-router";

export const SingleSurah = ({ chapters }) => {
  const { id } = useParams();
  return <div>

      {chapters.filter(chapter => chapter.name === id).map((c) => (
          <span>{c.name}</span>
      ))}
  </div>;
};
