import './App.css';
import { LandingPage } from "./Components/LandingPage/LandingPage.jsx";
import { Nav1 } from './Components/Rpool/Navbar1/Navbar1';
import { Nav2 } from './Components/Rpool/Navbar2/Navbar2';
import { Bannerbox } from './Components/Rpool/Bannerbox/Banner';
import { Info2 } from './Components/Rpool/Information-box2/Info2';

function App() {
  return (
    <div>
      <LandingPage />
      <Nav1 />
      <Bannerbox />
      <Nav2 />
      <Info2 />
    </div>
  );
}

export default App;
