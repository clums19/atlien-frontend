import { useEffect, useState } from "react";
import {Route} from 'react-router-dom';
import BarIndex from "../pages/BarIndex";
import Main from "./Main";


function Bar(props){
    const [bar, setBar] =useState(null);

    const URL = 'https://atlien-backend.herokuapp.com/bars';

    const getBar = async () => {
        const response = await fetch(URL);
        const data = await response.json();
        setBar(data);
    };

    useEffect(() => getBar(), []);
    
    return(
        <main>
            <h1 className="head">ATLien: Bars and Lounges</h1>
            <Main />
            <Route path='/bars'>
                <div className="itemsContainer">
                    <BarIndex bar={bar}/>
                </div>
            </Route>
        </main>
    )
}
export default Bar;