import React from "react";
import s from './Paginado.module.css'

export default function Numbers({ countries, pagina }){
  const pageNumbers = [];
  const pageCount = Math.ceil(countries.length / 10);
  for (let i = 1; i < pageCount + 1; i++) {
    pageNumbers.push(i);
  }

  return (
    <div className={s.numbers}>
      {pageNumbers?.map((n) => {
        return (
          <div key={n}>
            <button onClick={() => pagina(n)} className={s.pag}>
              {n}
            </button>
          </div>
        );
      })}
    </div>
  );
};

