import './App.css';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Main from './components/Main';
import Food from './components/Food';


function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route> 
        <Route path='/nav'>
          <Main />
        </Route>
        <Route path='/foods'>
          <Food />
        </Route>
      </Switch>
      
    </div>
    
  );
}

export default App;
