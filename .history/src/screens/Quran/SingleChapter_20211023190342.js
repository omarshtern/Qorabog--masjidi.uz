import React, { useEffect, useState } from "react";
// import { chapters } from "../../store/ru";
import { Link } from "react-router-dom";
import axios from "axios";
import "./SingleChapter.css";

export const SingleChapter = ({ chapters }) => {

  const[malumot, setMalumot] = useState([])
  const url = "http://api.alquran.cloud/v1/quran/quran-uthmani";

const fetchedData = () => {
  axios.get(url).then((response) => {
    const surahs = response.data.surahs;
    setMalumot(surahs)
  }).catch((error) => console.log(error, 'error'))
}
  useEffect(() => {
    fetchedData();
  }, []);

  console.log(malumot);

  return (
    <>
    {malumot.map((d) => {
      console.log(d)
    })}
    </>
  )


}

 