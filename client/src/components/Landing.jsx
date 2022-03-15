import React from "react";
import { NavLink } from 'react-router-dom';


export default function Landing(){
    return(
        <div>
            <div>Bienvenidos</div>
            <NavLink to='/countries'><button>Ingresar</button></NavLink>
        </div>
    )
}