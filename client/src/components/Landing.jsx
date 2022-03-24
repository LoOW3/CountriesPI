import React from "react";
import { NavLink } from 'react-router-dom';
import s from './Landing.module.css'


export default function Landing(){
    return(
        <div className={s.container}>
            <NavLink to='/home'>
                <div className={s.info}>
                    <div className={s.welcome}>¡Bienvenido!</div>
                </div>
            </NavLink>
        </div>
    )
}