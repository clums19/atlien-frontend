import { useEffect, useState } from "react";
import {Route} from 'react-router-dom';
import ClubIndex from "../pages/ClubIndex";


function Club(props){
    const [club, setClub] =useState(null);

    const URL = 'https://atlien-backend.herokuapp.com/clubs';

    const getClub = async () => {
        const response = await fetch(URL);
        const data = await response.json();
        setClub(data);
    };

    useEffect(() => getClub(), []);
    
    return(
        <main>
            <h1 className="head">ATLien: Gentlemen Clubs</h1>
            <Route path='/clubs'>
                <ClubIndex club={club}/>
            </Route>
        </main>
    )
}
export default Club;