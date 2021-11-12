import { Nav1 } from './Navbar1/Navbar1';
import { Nav2 } from './Navbar2/Navbar2';
import { Bannerbox } from './Bannerbox/Banner';
import { Info1 } from './Information-box1/Info1';
import { Info2 } from './Information-box2/Info2';
import { Info3 } from './Information-box3/Info3';
import { Info4 } from './Information-box4/Info4';
import { Info5 } from './Information-box5/Info5';
import { FooterR } from './Footer-rpool/Footer';

export const Rpool = () => {
    return (
        <div>
            <Nav1 />
            <Bannerbox />
            <Nav2 />
            <Info1 />
            <Info2 />
            <Info3 />
            <Info4 />
            <Info5 />
            {/* <FooterR /> */}
        </div>
    )
}