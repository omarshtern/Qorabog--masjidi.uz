import React, { useEffect, useState } from "react";
import { people } from "./GroupData";

function Group() {
  const [people, setPeople] = useState(people);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const lastIndex = people.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, people]);

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1);

      return () => {
        clearInterval(slider);
      };
    }, 5000);
  }, [index]);
  return <div>

      {people.map(())}
  </div>;
}

export default Group;
