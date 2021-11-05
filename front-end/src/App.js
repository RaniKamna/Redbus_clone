import './App.css';
import { Route, Switch, Link } from 'react-router-dom'
import { LandingPage } from "./Components/LandingPage/LandingPage.jsx";
import { Rpool } from './Components/Rpool/Rpool';
import { Bushire } from './Components/BusHireMain/BusHire'
import {Hire} from "./Components/hire-vehicle/Hire-vehicle";
import {Form} from "./Components/hire-vehicle/Form-template/Form-template";


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
          {/* <Hire /> */}
        </Route>
        <Route path = "/outstation" exact>
          <Bushire />
          {/* <Hire /> */}

        </Route>
        <Route path = "/outstation/contact_details">
          <Bushire />
          {/* <Hire /> */}

        </Route>
        <Route path = "/outstation/viewVehicles">
          {/* <Hire /> */}
          {/* <Form /> */}
        </Route>
      </Switch>
      <Hire className = "place"  />
    </div>
  );
}

export default App;
