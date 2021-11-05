import Styles from './VechicleType.module.css'
import  "../BookInEasy/BookIneasy.module.css";

export const VechileType=()=>{
    return(
        <div className={Styles.VehicleYouCanGet}>
  <div className={Styles.bookInEasySteps_heading}>Vehicle Types</div>
  <div className={Styles.vehicleTypeImage}>
    <img
      src="https://www.redbus.in/bushire/static/webv2/home/group%20(10).svg"
      alt="Buses and Mini Buses"
    ></img>
    <div className={Styles.vehicleText}>
      <h3>Buses and Mini Buses</h3>
      <p>
        Ideal for more than <br />
        18 people
      </p>
    </div>
  </div>
  <div className={Styles.vehicleTypeImage}>
    <img
      src="https://www.redbus.in/bushire/static/webv2/home/group%20(11).svg"
      alt="Buses and Mini Buses"
    ></img>
    <div className={Styles.vehicleText}>
      <h3>Tempo and Travellers</h3>
      <p >
        Ideal for
        <br />
        10-16 people
      </p>
    </div>
  </div>
  <div className={Styles.vehicleTypeImage}>
    <img
      src="https://www.redbus.in/bushire/static/webv2/home/group%20(12).svg"
      alt="Buses and Mini Buses"
    ></img>
    <div className={Styles.vehicleText}>
      <h3>Sedans and SUVs</h3>
      <p >
        Ideal for <br />
        4-7 people
      </p>
    </div>
  </div>
</div>

    )
}