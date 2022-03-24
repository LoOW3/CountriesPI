import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { getCountry, clearCountry } from "../actions";
import { NavLink } from "react-router-dom";
import { useParams } from "react-router-dom";
import s from './CountryDetail.module.css'


export default function CountryDetail(){
  let { id } = useParams();
  const countryDetail = useSelector((state) => state.country);
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(getCountry(id));

  }, []);

  function handleClick(){
    dispatch(clearCountry());
  };

  let activitiesMap = countryDetail.activities?.map((a) => {
    return (
      <div key={a.id} className={s.activityContainer}>
        <div className={s.activityName}>
          {a.name}
        </div>
        <div className={s.activityInfo}>
          <div className={s.caracteristicas}><div>Difficulty:</div> {a.difficulty}</div>
          <div className={s.caracteristicas}><div>Duration:</div> {a.duration}</div>
          <div className={s.caracteristicas}><div>Season:</div> {a.season}</div>
        </div>
      </div>
    );
  });

  return (
    <div className={s.container}>
      <div>
        
        <div className={s.infoContainer}>
          <div>
            <div className={s.name}>{countryDetail.name}</div>
            <img src={countryDetail.flag} alt="" height='300px'/>
          </div>
          <div className={s.infoR}>
            <div>
              <div className={s.h4}>General Information</div>
              
            </div>
            <div className={s.details}>
              
              <div>Code: {countryDetail.id}</div>
              <div>Capital: {countryDetail.capital}</div>
              <div>Continent: {countryDetail.continent}</div>
              <div>Subregion: {countryDetail.subregion}</div>
              <div>Area: {countryDetail.area} Km²</div>
              <div>Population: {countryDetail.population}</div>
            </div>
            <div>
              <div className={s.h5}>Tourist Activities</div>
              {activitiesMap === undefined || activitiesMap.length === 0
                ? <div className={s.notFound}>This country has not activities</div>
                :<div className={s.activityFlex}> {activitiesMap} </div>}
            </div>
          </div>
        </div>
        <div>
          <NavLink to="/home">
            <button onClick={handleClick} className={s.button}>
              Back Home
            </button>
          </NavLink>
          <NavLink to="/activity">
            <button onClick={handleClick} className={s.button}>
              Add Activity
            </button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};


