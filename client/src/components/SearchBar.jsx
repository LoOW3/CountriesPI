/* import React from "react";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { foundCountries } from "../actions";
import s from './SearchBar.module.css'

export default function FilterCountries(){
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
    e.target.reset();
  };

  return (
    <div>
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
    </div>
  );
};


 */