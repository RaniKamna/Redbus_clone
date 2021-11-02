import Styles from '../BookInEasy/BookIneasy.module.css'

export const WithBusHire=()=>{
    return(
        <div className={Styles.withBusHireYouCanGet}>
          
          <div className={Styles.bookInEasySteps_heading}>
            With Bus Hire you get
          </div>
          <div>
            <iframe className={Styles.iframeHirebus} src="https://www.youtube.com/embed/4mezaRyMnd8?enablejsapi=1&mute=1" width="463" height="259" frameborder="0" border></iframe>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", width: " 50%" }}>
            <div className={Styles.BusHireFeatures}>
              <div className={Styles.BusHireEachFeature}>
                <img
                  src="https://www.redbus.in/bushire/static/mwebv2/home/great-price.svg"
                  alt=""
                  height="100px"
                />
                <div style={{ marginTop: "20px" }}>
                  <div className={Styles.BusHireEachFeatureText}>
                    Great price and
                  </div>
                  <div className={Styles.BusHireEachFeatureText}>
                    Great value
                  </div>
                </div>
              </div>
            </div>
            <div className={Styles.BusHireFeatures}>
              <div className={Styles.BusHireEachFeature}>
                <img
                  src="https://www.redbus.in/bushire/static/mwebv2/home/safe-vehicles.svg"
                  alt=""
                  height="100px"
                />
                <div style={{ marginTop: "20px" }}>
                  <div className={Styles.BusHireEachFeatureText}>
                    Safe and Hygenic
                  </div>
                  <div className={Styles.BusHireEachFeatureText}> Vehicles</div>
                </div>
              </div>
            </div>
            <div className={Styles.BusHireFeatures}>
              <div className={Styles.BusHireEachFeature}>
                <img
                  src="https://www.redbus.in/bushire/static/mwebv2/home/live-tracking.svg?v=1"
                  alt=""
                  height="100px"
                />
                <div style={{ marginTop: "20px" }}>
                  <div className={Styles.BusHireEachFeatureText}>
                    Live Track your
                  </div>
                  <div className={Styles.BusHireEachFeatureText}> Journey</div>
                </div>
              </div>
            </div>
            <div className={Styles.BusHireFeatures}>
              <div className={Styles.BusHireEachFeature}>
                <img
                  src="https://www.redbus.in/bushire/static/mwebv2/home/customer-support.svg"
                  alt=""
                  height="100px"
                />
                <div style={{ marginTop: "20px" }}>
                  <div className={Styles.BusHireEachFeatureText}>
                    Best Customer
                  </div>
                  <div className={Styles.BusHireEachFeatureText}> Support</div>
                </div>
              </div>
            </div>
            <div className={Styles.BusHireFeatures}>
              <div className={Styles.BusHireEachFeature}>
                <img
                  src="https://www.redbus.in/bushire/static/mwebv2/home/verified-drivers.svg"
                  alt=""
                  height="100px"
                />
                <div style={{ marginTop: "20px" }}>
                  <div className={Styles.BusHireEachFeatureText}>
                    Verified Drivers and
                  </div>
                  <div className={Styles.BusHireEachFeatureText}> Vehicles</div>
                </div>
              </div>
            </div>
          </div>
        </div>
    )
}