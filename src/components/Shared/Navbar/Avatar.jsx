import React from 'react';
import avatar from '../../../assets/images/placeholder.jpg'
import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
const Avatar = () => {
    const {user} = useContext(AuthContext)
    return <img src={user && user.photoURL ? user.photoURL: avatar} alt="profile" className="w-[30px] rounded-xl" />;
};

export default Avatar;