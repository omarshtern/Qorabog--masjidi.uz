import React from "react";
import { useParams } from "react-router";

export const SingleSurah = ({ chapters }) => {
  const {translation} = useParams();
  console.log(name);
  return <div>

      {chapters.filter(chapter => chapter.name === name)}
  </div>;
};
