import './App.css';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Main from './components/Main';
import Food from './components/Food';
import Club from './components/Club';


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
        <Route path='/clubs'>
          <Club />
        </Route>
      </Switch>
      
    </div>
    
  );
}

export default App;
