import React from "react";
import { useParams } from "react-router";
import { chapters } from "../../store/ru";

export const SingleSurah = ({  }) => {
    {translation, name} = 
  const {translation} = useParams();
  console.log(translation);
  return <div>

      {chapters.filter(chapter => chapter.translation === translation)}
  </div>;
};