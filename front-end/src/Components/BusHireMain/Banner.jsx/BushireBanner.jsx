import "./Banner.css";

export const Banner = () => {
  return (
    <div className="MainBanner">
      <div className="BushireBanner"></div>
      <div className="BannerInner">
        {/* <img
          src="https://www.redbus.in/bushire/static/webv2/home/group-4.svg"
          alt="bannerImage"
        /> */}
        <div className="BannerElements">
            <div className="BannerHeading">Bus Hire</div>
            <div className="BannerSubHeadings">
                Rent vehicle with a driver from
                <br /> <br />
                the best operators
            </div>
            <div className="SvgElements">
                  <img src="https://www.redbus.in/bushire/static/webv2/home/3%20(1).svg"alt="buslogo"/> 
            </div>
            
        </div>
      </div>
    </div>
  );
};
