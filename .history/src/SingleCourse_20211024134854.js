import React from "react";
import { useParams } from "react-router";
import 

function SingleCourse() {
  const { id } = useParams();

  const 

  return (
    <>
      <div>{categoryData.filter((card) => card?.id === id)}</div>
    </>
  );
}

export default SingleCourse;
