import React from "react";
import { useState ,useEffect} from "react";

import axios from "axios";


const Standings = () =>{
        const[data,setData]= useState([]);
        const[selectedleague,Setselectedleague] = useState("bra.1");
        const[selectedyear,setSelectedYear] = useState("2020");
      

        useEffect(() => {
            
            axios(` https://api-football-standings.azharimm.site/leagues/${selectedleague}/standings?season=${selectedyear}`).then(
                (res) => {
                    console.log(res.data.data.standings);
                    setData(res.data.data.standings);
                }
            )

        },[selectedleague,selectedyear]);

        const handleLeague = (event) => {
            event.preventDefault();
            Setselectedleague(event.target.value);
        }

        const handleYear = (event) => {
            event.preventDefault();
            setSelectedYear(event.target.value);
        }
   
    
    return(
        <div>
        <div className="standings-section">
            <div className="standings-teams">
                <select
                name="select-league"
                id="select-league"
                defaultValue={selectedleague}
                onChange={handleLeague}
                >
                    <option value="arg.1">Argentine Liga Profesional de Fútbol</option>
                    <option value="aus.1">Australian A-League</option>
                    <option value="bra.1">Brazilian Serie A</option>
                    <option value="chn.1">Chinese Super League</option>
                    <option value="ned.1">Dutch Eredivisie</option>
                    <option value="eng.1">English Premier League</option>
                    <option value="fra.1">French Ligue 1</option>
                    <option value="ger.1">German Bundesliga</option>
                    <option value="idn.1">Indonesian Liga 1</option>
                    <option value="ita.1">Italian Serie A</option>
                    <option value="jpn.1">Japanese J League</option>
                    <option value="mys.1">Malaysian Super League</option>
                    <option value="mex.1">Mexican Liga BBVA MX</option>
                    <option value="por.1">Portuguese Liga</option>
                    <option value="rus.1">Russian Premier League</option>
                    <option value="sgp.1">Singaporean Premier League</option>
                    <option value="esp.1">Spanish Primera División</option>
                    <option value="tha.1">Thai Premier League</option>
                    <option value="tur.1">Turkish Super Lig</option>
                    <option value="uga.1">Ugandan Super League</option>
                </select>

                <select
                name="select-year"
                id="select-year"
                defaultValue={selectedyear}
                onChange={handleYear}
                >
                    <option value="2011">2011</option>
                    <option value="2012">2012</option>
                    <option value="2013">2013</option>
                    <option value="2014">2014</option>
                    <option value="2015">2015</option>
                    <option value="2016">2016</option>
                    <option value="2017">2017</option>
                    <option value="2018">2018</option>
                    <option value="2019">2019</option>
                    <option value="2020">2020</option>
                    
                </select>

            </div>
        
             
         </div>
         {data.map(((data,index) => (
             <div className="standings-list1">
            <div key={data.team.id} className="standings-list">
                <h1>
                    <span>
                        {`${index +1}.`}
                        <img className="image-width" src={data.team.logos[0].href} alt="#"/>
                    </span>
                    {data.team.shortDisplayName}

                </h1>
                </div>
                </div>)
        ))}
        </div>

               
        
    )


}
export default Standings; 