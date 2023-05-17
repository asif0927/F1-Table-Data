import React from 'react'
import { Link } from "react-router-dom";
import style from "./index.module.css";
import {useContext} from "react";
function Navbar() {
  return (
    <>
    <div className='nav'>
    <ul>
        <li style={{marginRight:"30px"}}>
            <Link to='/'>Drivers</Link>
        </li>
        <li>
            <Link to='/favorites'>Favorites</Link>
        </li>
    </ul>
    </div>
    </>
  )
}

export default Navbar