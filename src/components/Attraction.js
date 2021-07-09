import { useEffect, useState } from "react";
import {Route} from 'react-router-dom';
import AttractionIndex from "../pages/AttractionIndex";
import Main from "./Main";



function Attraction(props){
    const [attraction, setAttraction] =useState(null);

    const URL = 'https://atlien-backend.herokuapp.com/attractions';

    const getAttraction = async () => {
        const response = await fetch(URL);
        const data = await response.json();
        setAttraction(data);
    };

    useEffect(() => getAttraction(), []);
    
    return(
        <main>
            <h1 className="head">ATLien: Attractions</h1>
            <Main />
            <Route path='/attractions'>
                <AttractionIndex attraction={attraction}/>
            </Route>
        </main>
    )
}
export default Attraction;