import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
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
        {/* <Route exact path="/" component={Home}/> */}
        {/* <Route path="/About" component={About}/>
        <Route path="/Online" component={Online}/>
        <Route path="/Offline" component={Offline}/>
        <Route path="/Contact" component={Contact}/> */}
    </Switch>
    </Router>
</>
)
}
export {Allrouter};