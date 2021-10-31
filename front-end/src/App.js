import './App.css';
import {LandingPage} from "./Components/LandingPage/LandingPage.jsx"
import {Nav2} from './Components/Rpool/Navbar2/Navbar2'
import {Info2} from './Components/Rpool/Information-box2/Info2'

function App() {
  return (
    <div>
     <LandingPage/>
     <Nav2 />
     <Info2 />
    </div>
  );
}

export default App;
