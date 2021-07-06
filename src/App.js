import './App.css';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Main from './components/Main';


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
      </Switch>
      
    </div>
    
  );
}

export default App;
