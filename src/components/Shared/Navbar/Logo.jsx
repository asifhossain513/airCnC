import React from 'react';
import logo from '../../../assets/images/logo.png'
import { Link } from "react-router-dom";
const Logo = () => {
    return (
        <Link to={'/'}>
            <img src={logo} alt="logo" className="w-[100px] hidden md:block"/>
        </Link>
    )
};

export default Logo;