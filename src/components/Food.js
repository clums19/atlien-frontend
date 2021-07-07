import { useEffect, useState } from "react";
import {Route} from 'react-router-dom';
import FoodIndex from "../pages/FoodIndex";
import Main from "./Main";

function Food(props){
    const [food, setFood] =useState(null);

    const URL = 'https://atlien-backend.herokuapp.com/foods';

    const getFood = async () => {
        const response = await fetch(URL);
        const data = await response.json();
        setFood(data);
    };

    useEffect(() => getFood(), []);
    
    return(
        <main>
            <h1 className="head">ATLien: Food</h1>
            <Main />
            <Route path='/foods'>
                <FoodIndex food={food}/>
            </Route>
        </main>
    )
}
export default Food;