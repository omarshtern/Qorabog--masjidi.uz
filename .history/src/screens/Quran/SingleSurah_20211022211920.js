import React from "react";
import { useParams } from "react-router";
import chap

export const SingleSurah = ({  }) => {
  const {translation} = useParams();
  console.log(translation);
  return <div>

      {chapters.filter(chapter => chapter.translation === translation)}
  </div>;
};
