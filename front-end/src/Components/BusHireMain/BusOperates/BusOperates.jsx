import Styles from '../WhyBook/WhyBook.module.css'

export  const Operates =()=>{

    return (
        <>
        <div className={Styles.whyBookWithBushire}>
          <div className={Styles.bookInEasySteps_heading}>
            Bus Hire Operates in
          </div>
          <div>
            <img
              style={{ marginTop: "30px", height: "300px" }}
              src="https://www.redbus.in/bushire/static/mwebv2/home/city-list.svg"
              alt=""
            />
          </div>
        </div>
        </>
    )
}