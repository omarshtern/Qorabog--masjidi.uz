import React from "react";
import { useParams } from "react-router";

function SingleCourse({ coursesSidebar }) {
  const { title } = useParams();
  console.log(title);
  return (
    <div>
        {coursesSidebar.filter(card => card.title ===)}
    </div>
  );
}

export default SingleCourse;
