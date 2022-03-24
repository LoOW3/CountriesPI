import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { getCountries, orderCountry, filterContinent, filterActivity} from "../actions";
import Navbar from "./Navbar";
import CardsContainer from './CardsContainer'
import Paginado from './Paginado'

export default function Home(){
    const dispatch = useDispatch();
    const countries = useSelector((state) => state.countries);
    const [current, setCurrent] = useState(1);
    const [order, setOrder] = useState("");
    var cantidad = 0;
    if (current !== 1) {
        cantidad = 10;
    } else if (current === 1) {
        cantidad = 9;
    }
    const indexLast = current * cantidad;
    const indexFirst = indexLast - cantidad;
    const currentCountries = countries.slice(indexFirst, indexLast);
    const pagina = (p) => setCurrent(p);
 /*    const actual = () => setCurrent(1); */

    useEffect(() =>{
        dispatch(getCountries())
    },[dispatch])



/* 
    function getData(){
        fetch('http://localhost:3001/countries/VNM')
        .then(res => {return res.json()})
        .then(function(data){
            console.log(data)
        });
        
    }
    getData(); */



    function handlerOrder(e){
        e.preventDefault();
        if (e.target.value !== "") {
          dispatch(orderCountry(e.target.value));
          setCurrent(1);
          setOrder(e.target.value);
        } else {
          dispatch(getCountries());
        }
      };

    function handlerContinent(e){
    e.preventDefault();
    if (e.target.value === "") {
        dispatch(getCountries());
    } else {
        dispatch(filterContinent(e.target.value));
        setCurrent(1);
    }
    };

    function handlerActivity(e){
    e.preventDefault();
    if (e.target.value === "") {
        dispatch(getCountries());
    } else {
        dispatch(filterActivity(e.target.value));
        setCurrent(1);
    }
    };
    return(
        <div>
            <Navbar 
                handlerOrder={handlerOrder}
                handlerContinent={handlerContinent}
                handlerActivity={handlerActivity}
                setCurrent={setCurrent}
            />
            {currentCountries.length? (
            <div>
            <Paginado countries={countries} pagina={pagina} />
            <CardsContainer countries={currentCountries} />
            </div>) : 'hola'}
            
        </div>
        
    )
}