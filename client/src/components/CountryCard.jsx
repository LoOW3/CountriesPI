import React from "react";
import { Link } from "react-router-dom";
import s from './CountryCard.module.css'

export default function CountryCard({ id, name, flag, continent }){
  return (
    <Link  to={`/countries/${id}`} className={s.card}>
    <div className={s.container}> 
        <div className={s.img}>
          <img  src={flag} alt="" height='150px'/>
        </div>
        <div className={s.info}>
          <p className={s.nombre}>{name}</p>
          <p className={s.continent}>{continent}</p>
        </div>
    </div>
    </Link>
  );
};


