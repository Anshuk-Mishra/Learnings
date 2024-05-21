import React, { useContext } from "react";
import userContext from "../context/UserContext";

export default function Profile(){
    const {user} = useContext(userContext)
    return (<div>
        <h2>Hi {user}</h2>
    </div>)
}