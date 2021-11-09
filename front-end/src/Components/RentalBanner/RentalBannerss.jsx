import "./RentalBannerss.css";
import {Link} from "react-router-dom";

export const RentalBanners = ({bannerHeading, bannerSubHeading}) => {
  return (
    <div className="MainBanner">
      <div className="BushireBanner"></div>
      <div className="BannerInner">
          <div className="BannerElements">
            <div className="BannerHeading">{bannerHeading}</div>
            <div className="BannerSubHeading">
            {bannerSubHeading}
            </div>
            <div className="RentalBanner" >
              <div>
               <button><Link style = {{color: "white", textDecoration: "none"}}to = "/bushire">Hire a vehicle</Link></button>
              </div>
          
              <div >
                  <img src="https://www.redbus.in/bus-hire/images/vehicleBus.svg"alt="buslogo"/> 
              </div>
            
            </div>
            
        </div>
      </div>
    </div>
  );
};
