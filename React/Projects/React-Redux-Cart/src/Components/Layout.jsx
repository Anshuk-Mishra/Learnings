import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";

function Layout(){
    return(
        <div className="flex flex-col">
            <div>
                <Header/>
            </div>
            <div>
                <Outlet/>
            </div>
        </div>
    )
}

export default Layout