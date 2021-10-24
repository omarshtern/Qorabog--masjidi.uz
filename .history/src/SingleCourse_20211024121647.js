import React from "react";
import { useParams } from "react-router";

function SingleCourse({ coursesSidebar }) {
  const { title } = useParams();
  console.log(title);
  return (
    <div>
      {coursesSidebar
        .filter((c) => c.title === title)
        .map((card, index) => (
          <div>{title}</div>
        ))}
    </div>
  );
}

export default SingleCourse;
