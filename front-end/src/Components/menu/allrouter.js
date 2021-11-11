import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import {LandingPage} from "../LandingPage/LandingPage";
import {Rpool} from "../Rpool/Rpool";
import {Bushire} from "../BusHireMain/BusHire";
// import Home from '../Home';
// import About from '../About';
// import Online from '../Online';
// import Offline from '../Offline';
// import Contact from '../Contact';

import Navbarmenu from '../menu/Navbarmenu';
function Allrouter()
{
return(
    <>
    <Router basename="/">

    {/* Add Menu Component */}
        <Navbarmenu />
    <Switch> 
        <Route exact path="/" component={LandingPage}/>
         <Route path="/rpool" component={Rpool}/>
         <Route path = "/bushire" component = {Bushire} />
        {/*<Route path="/Online" component={Online}/>
        <Route path="/Offline" component={Offline}/>
        <Route path="/Contact" component={Contact}/> */}
    </Switch>
    </Router>
</>
)
}
export {Allrouter};