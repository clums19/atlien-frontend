import { useEffect, useState } from "react";
import {Route} from 'react-router-dom';
import ParkIndex from "../pages/ParkIndex";
import Main from "./Main";


function Park(props){
    const [park, setPark] =useState(null);

    const URL = 'https://atlien-backend.herokuapp.com/parks';

    const getPark = async () => {
        const response = await fetch(URL);
        const data = await response.json();
        setPark(data);
    };

    useEffect(() => getPark(), []);
    
    return(
        <main>
            <h1 className="head">ATLien: Parks</h1>
            <Main />
            <Route path='/parks'>
                <ParkIndex park={park}/>
            </Route>
        </main>
    )
}
export default Park;