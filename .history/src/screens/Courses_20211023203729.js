import { Tv } from "@material-ui/icons";
import React from "react";
import "./Courses.css";

export const Courses = () => {
  return (
    <div style={{display: 'flex', alignItems: 'center'}}>
      <div className="sidebar" sty>
        <img src="" />
        <div className="sidebar__item">
          <span>
            <Tv />
          </span>
          <span>Kurslar</span>
        </div>
        <div className="sidebar__item">
          <span>
            <Tv />
          </span>
          <span>Kurslar</span>
        </div>
        <div className="sidebar__item">
          <span>
            <Tv />
          </span>
          <span>Kurslar</span>
        </div>
        <div className="sidebar__item">
          <span>
            <Tv />
          </span>
          <span>Kurslar</span>
        </div>
      </div>
      <div className='category__container'>

      </div>
    </div>
  );
};
