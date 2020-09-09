import React from 'react';
import classes from './App.module.css';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import MainPage from 'pages/MainPage/MainPage'

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={MainPage}/>
        </Switch>
        </div>
    </Router>
  );
}

export default App;
