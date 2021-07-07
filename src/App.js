import './App.css';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import BigNav from './components/BigNav';
import Food from './components/Food';
import Club from './components/Club';
import Bar from './components/Bar';
import Park from './components/Park';
import Attraction from './components/Attraction';


function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route> 
        <Route path='/nav'>
          <BigNav />
        </Route>
        <Route path='/foods'>
          <Food />
        </Route>
        <Route path='/clubs'>
          <Club />
        </Route>
        <Route path='/bars'>
          <Bar />
        </Route>
        <Route path='/parks'>
          <Park />
        </Route>
        <Route path='/attractions'>
          <Attraction />
        </Route>
      </Switch>
      
    </div>
    
  );
}

export default App;
