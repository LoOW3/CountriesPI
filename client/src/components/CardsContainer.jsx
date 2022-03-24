import React from "react";
import CountryCard from "./CountryCard";
import s from './CardsContainer.module.css'

export default function CountriesCards({ countries }){
  return (
    <div className={s.container}>
      {countries?.map((c) => {
        return (
          <CountryCard
            key={c.id}
            id={c.id}
            name={c.name}
            flag={c.flag}
            continent={c.continent}
          />
        );
      })}
    </div>
  );
};

