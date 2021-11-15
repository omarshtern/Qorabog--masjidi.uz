import { CircularProgress } from "@material-ui/core";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { SingleAyah } from "./SingleAyah";
import { Url } from "./Url";
// import { ArabAyah } from "../../store/quran";

export const SingleSurah = ({}) => {
  const { number } = useParams();
  const [loading, setLoading] = useState(false);

  const [singledata, setSingleData] = useState([]);

  const fetchData = async () => {
    setLoading(true);
    const data = await axios.get(Url(number)).then((res) => {
      const alldata = res.data.data.ayahs;
      setSingleData(alldata);
      setLoading(false);
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  console.log(singledata);



  return (
    <>
      {loading ? (
        <div style={{display: 'grid', placeItems: 'center', height: '90vh', fontFamily: 'Scheherazade New'}} >
          <CircularProgress />
          <p style={{fontSize: 60, display: 'flex', alignItems: 'center'}}>Sabr qiling... Alloh sabr qiluvchilarni yaxshi ko'radi</p>
 
        </div>
      ) : (
       <>
       {singledata.map((ayah, index) => (
         <div key={index}>
           <SingleAyah  ayah={ayah} />
         </div>
       ))}
       </>
      )}
    </>
  );
};
