import './App.css';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Main from './components/Main';
import Food from './components/Food';
import Club from './components/Club';
import Bar from './components/Bar';


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
        <Route path='/bars'>
          <Bar />
        </Route>
      </Switch>
      
    </div>
    
  );
}

export default App;
