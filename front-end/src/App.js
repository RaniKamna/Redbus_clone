import './App.css';
import { Route, Switch } from 'react-router-dom'
import { LandingPage } from "./Components/LandingPage/LandingPage.jsx";
import { Nav1 } from './Components/Rpool/Navbar1/Navbar1';
import { Nav2 } from './Components/Rpool/Navbar2/Navbar2';
import { Bannerbox } from './Components/Rpool/Bannerbox/Banner';
import { Info1 } from './Components/Rpool/Information-box1/Info1';
import { Info2 } from './Components/Rpool/Information-box2/Info2';
import { Bushire } from './Components/BusHireMain/BusHire'

function App() {
  return (
    <div>
      <Switch>
        <Route path='/' exact>
          <LandingPage />
        </Route>
        <Route path='/rpool' exact>
          <Nav1 />
          <Bannerbox />
          <Nav2 />
          <Info1 />
          <Info2 />
        </Route>
        <Route path='/bushire' exact>
          <Bushire />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
