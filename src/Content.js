import React, { useState } from "react";
import Leagues from "./Leagues";
import Standings from "./Standings";



const Content= () =>{
    const[pressed,setPressed]= useState(true);
    const handleleagues = () =>{
        setPressed(true);

    }
    const handlestandings = () => {
        setPressed(false);
    }
    return(
        <div className="content-section">
            <div className="tabs">
                <button className="leagues-tabs" onClick={handleleagues}>
                    Leagues
                </button>
                <button className="standings-tabs" onClick={handlestandings}>
                    Standings
                </button>
            </div>
            {pressed ?  <Leagues/>:   <Standings/>}
            
        </div>
    )
}
export default Content;
