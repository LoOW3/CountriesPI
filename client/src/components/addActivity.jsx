import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { getCountries, createActivity, foundActivities} from "../actions";
import s from './addActivity.module.css';

export default function  AddActivity(){
  let countries = useSelector((state) => state.countries);
  let dispatch = useDispatch();


  const [input, setInput] = useState({
    name: "",
    difficulty: "",
    duration: "",
    season: "",
    addCountries: [],
  });
  useEffect(() => {
    dispatch(foundActivities());
  }, [dispatch]);
  useEffect(() => {
    dispatch(getCountries());

  }, [dispatch]);

  function handleChange(e){
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  function handleDelete(e){
    e.preventDefault();
    let deletedList = input.addCountries.filter((f) => {
      return f !== e.target.name;
    });
    setInput({
      ...input,
      addCountries: deletedList,
    });
  };

  function handleSubmit(e){
    let regex = /^(?![ .]+$)[a-zA-Z .]*$/gm;
    e.preventDefault();
    if (
      !input.name ||
      !input.difficulty ||
      !input.duration ||
      !input.season ||
      input.addCountries.length === 0
    ) {
      alert('Tienes campos vacios');
    } else if (regex.test(input.name) === false) {
      alert('Solo se aceptan letras');
    }
     else {
      if (input.name.length < 3) {
        return alert('La actividad debe tener al menos tres letras' );
      }
      dispatch(createActivity(input));
      setInput({
        name: "",
        difficulty: "",
        duration: "",
        season: "",
        addCountries: [],
      });
      alert('Actividad creada');
    }
  };

  function handleCountries(e){
    const { value } = e.target;
    if (!input.addCountries.includes(value))
      setInput({
        ...input,
        addCountries: [...input.addCountries, value],
      });
  };

  return (
    <div className={s.container}>
      <form onSubmit={handleSubmit} className={s.info}>
        <div className={s.title}>Add a Tourist Activity</div>
        <div className={s.infoContainer}>
          <div className={s.selects}>
            <div>Name:</div>
            <input
              type="text"
              name="name"
              placeholder="Activity..."
              onChange={handleChange}
              value={input.name}
            />
          </div>
          
          <div className={s.selects}>
            <div>Difficulty:</div>
            <select
              value={input.difficulty ? input.difficulty : ""}
              name="difficulty"
              onChange={handleChange}
            >
              <option value="" disabled hidden>
                Select Difficulty
              </option>
              <option value="Easy">Easy</option>
              <option value="Medium">Medium</option>
              <option value="Hard">Hard</option>
              <option value="Very Hard">Very Hard</option>
              <option value="Extreme">Extreme</option>
            </select>
          </div>
          
          <div className={s.selects}>
            <div>Duration:</div>
            <select
              value={input.duration ? input.duration : ""}
              name="duration"
              onChange={handleChange}
            >
              <option value="" disabled hidden>
                Select Duration
              </option>
              <option value="One Hour or Less">One Hour or Less</option>
              <option value="Two Hours">Two Hours</option>
              <option value="Three Hours">Three Hours</option>
              <option value="Four Hours">Four Hours</option>
              <option value="Five+ Hours">Five+ Hours</option>
            </select>
          </div>
          
          <div className={s.selects}>
            <div>Season:</div>
            <select
              value={input.season ? input.season : ""}
              name="season"
              onChange={handleChange}
            >
              <option value="" disabled hidden>
                Select Season
              </option>
              <option value="All Seasons">All Seasons</option>
              <option value="Spring">Spring</option>
              <option value="Summer">Summer</option>
              <option value="Autumn">Autumn</option>
              <option value="Winter">Winter</option>
            </select>
          </div>
          
          <div className={s.selects}>
            <div>Countries:</div>
            <select
              value={input.addCountries ? "" : ""}
              name="countries"
              placeholder="Select Countries"
              onChange={handleCountries}
            >
              <option value="" disabled hidden>
                Add Countries...
              </option>
              {countries?.map((c) => {
                return (
                  <option key={c.id} value={c.name}>
                    {c.name}
                  </option>
                );
              })}
            </select>
          </div>
          <div className={s.countrysContainer}>
        {input.addCountries?.map((e) => {
          return (
            <div key={e} className={s.countryNames}>
             {e}
              <div>
              <button
                name={e}
                onClick={(e) => handleDelete(e)}
              >
                x
              </button>
              </div>
            </div>
          );
        })}
        </div>
        </div>
        <div className={s.buttonContainer}>
            <Link to="/home">
              <button className={s.button}>Back Home</button>
            </Link>
            <button type="submit" className={s.button}>
              Submit
            </button>
        </div>
      </form>
    </div>
  );
};


