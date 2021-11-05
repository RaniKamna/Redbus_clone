import './App.css';
import { Route, Switch, Link } from 'react-router-dom'
import { LandingPage } from "./Components/LandingPage/LandingPage.jsx";
import { Nav1 } from './Components/Rpool/Navbar1/Navbar1';
import { Nav2 } from './Components/Rpool/Navbar2/Navbar2';
import { Bannerbox } from './Components/Rpool/Bannerbox/Banner';
import { Info1 } from './Components/Rpool/Information-box1/Info1';
import { Info2 } from './Components/Rpool/Information-box2/Info2';
import { Info3 } from './Components/Rpool/Information-box3/Info3';
import { Info4 } from './Components/Rpool/Information-box4/Info4';
import { Info5 } from './Components/Rpool/Information-box5/Info5';
import { FooterR } from './Components/Rpool/Footer-rpool/Footer';
import { Bushire } from './Components/BusHireMain/BusHire'

function App() {
  return (
    <div>
      <Link to='/'>Home </Link>
      <Link to='/rpool'>rPool </Link>
      <Link to='/bushire'>BusHire</Link>
      <Switch>
        <Route path='/' exact>
        <Nav1 />
          <LandingPage />
        </Route>
        <Route path='/rpool' exact>
          <Nav1 />
          <Bannerbox />
          <Nav2 />
          <Info1 />
          <Info2 />
          <Info3 />
          <Info4 />
          <Info5 />
          <FooterR />
        </Route>
        <Route path='/bushire' exact>
          <Bushire />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
