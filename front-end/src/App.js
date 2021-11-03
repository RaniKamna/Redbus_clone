import './App.css';
import { Route, Switch, Link } from 'react-router-dom'
import { LandingPage } from "./Components/LandingPage/LandingPage.jsx";
import { Rpool } from './Components/Rpool/Rpool';
import { Bushire } from './Components/BusHireMain/BusHire'

function App() {
  return (
    <div>
      <Link to='/'>Home </Link>
      <Link to='/rpool'>rPool </Link>
      <Link to='/bushire'>BusHire</Link>
      <Switch>
        <Route path='/' exact>
          <LandingPage />
        </Route>
        <Route path='/rpool' exact>
          <Rpool />
        </Route>
        <Route path='/bushire' exact>
          <Bushire />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
