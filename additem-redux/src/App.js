
import './App.css';


import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import CardItem from './components/card';
import CardDetails from './components/cardDetails';



import Login from './components/login/Login';
import Payment from './components/Payment';


function App() {
  return (
    <div>

      <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/card" component={CardItem} />
          <Route exact path="/details" component={CardDetails} />
          <Route exact path="/pay" component={Payment} />
        </Switch>
      </Router>
    </div>

  );
}

export default App;
