import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from 'react';
import { NavLink } from "react-router-dom";
import { foundActivities, getCountries, foundCountries } from "../actions";
import SearchBar from "./SearchBar";
import reload from './img/reload3.png';
import s from './Navbar.module.css';

export default function NavBar({ handlerOrder, handlerContinent, handlerActivity, setCurrent}){
  const selector = useSelector((state) => state.activity);
  const dispatch = useDispatch();
  let [input, setInput] = useState("");

  function handleChange(e){
    e.preventDefault();
    setInput(e.target.value);
  };

  function handleSubmit(e){
    e.preventDefault();
    if (input === "") {
      alert('Ingresá un nombre');
      return false
    }
    dispatch(foundCountries(input));
    setInput("");
    setCurrent(1);
    e.target.reset();
  };
  useEffect(() => {
    dispatch(foundActivities());
  }, [dispatch]);

  function handleClear(){
    dispatch(getCountries());
  };

  return (
    <div className={s.container}>
      
      <div className={s.selects}>
        <label>Order</label>
        <select
          defaultValue=""
          onChange={(e) => handlerOrder(e)}
        >
          <option  value="">
            Default
          </option>
          <option  value="A-Z">
            A-Z
          </option>
          <option  value="Z-A">
            Z-A
          </option>
          <option  value="High">
            High Population
          </option>
          <option  value="Low">
            Low Population
          </option>
        </select>
      </div>
      <div className={s.selects}>
        <label>Continent</label>
        <select
          defaultValue=""
          onChange={(e) => handlerContinent(e)}
        >
            <option  value="">
              All
            </option>
            <option  value="North America">
              North America
            </option>
            <option  value="South America">
              South America
            </option>
            <option  value="Europe">
              Europe
            </option>
            <option  value="Asia">
              Asia
            </option>
            <option  value="Africa">
              Africa
            </option>
            <option  value="Oceania">
              Oceania
            </option>
            <option  value="Antarctica">
              Antartica
            </option>
        </select>
      </div>
      <div className={s.selects}>
        <label>Activity</label>
        <select
          defaultValue=""
          onChange={(e) => handlerActivity(e)}
        >
          <option  value="">
           -
          </option>
          {selector?.map((e) => {
            return (
              <option  key={e.id} value={e.name}>
                {e.name}
              </option>
            );
          })}
        </select>
      </div>
      <NavLink to="/activity">
        <button className={s.addActivity}>Add Activity</button>
      </NavLink>
      <div>
        <button onClick={handleClear} className={s.buttonReload}>
          <img src={reload} width="22px" alt='reload'/>
        </button>
      </div>
{      <div>
      <form  onSubmit={handleSubmit}>
        <input
          className={s.input}
          type="text"
          placeholder="Country..."
          value={input}
          onChange={handleChange}
        />
        <button className={s.button} type="submit">
          <img
            src="https://icones.pro/wp-content/uploads/2021/06/icone-loupe-noir.png"
            alt="icon"
          />
        </button>
      </form>
    </div>}
    </div>
  );
};


