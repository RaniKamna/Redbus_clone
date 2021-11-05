import Styles from "./BookIneasy.module.css";
export const BookIneasy = () => {
  return (
   
    <div className={Styles.bookInEasyStepsdiv}>
      <div className={Styles.bookInEasySteps_heading}>Book in 3 easy steps</div>
      <div className={Styles.bookInEaschStep}>
   
        <div>
          <img 
            src="https://www.redbus.in/bushire/static/mwebv2/home/1%20(1).svg"
            alt="1"
          />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignContent: "center",
          }}
        >
          <div className={Styles.bookInEaschStepText}>Choose the</div>
          <div
            className={Styles.bookInEaschStepText}
            style={{ fontWeight: "800" }}
          >
            Journey{" "}
          </div>
          <div
            className={Styles.bookInEaschStepText}
            style={{ fontWeight: "800" }}
          >
            Type
          </div>
        </div>
        <div>
          <img
            src="https://www.redbus.in/bushire/static/webv2/home/Group.png"
            alt=""
            width="202px"
            height="144px"
          />
        </div>
      </div>
      <div className={Styles.bookInEaschStep}>
        <div>
          <img
            src="https://www.redbus.in/bushire/static/mwebv2/home/2%20(2).svg"
            alt="1"
          />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignContent: "center",
          }}
        >
          <div className={Styles.bookInEaschStepText}>Tell us</div>
          <div className={Styles.bookInEaschStepText}>about your </div>
          <div
            className={Styles.bookInEaschStepText}
            style={{ fontWeight: "800" }}
          >
            Travel Plans.
          </div>
        </div>
        <div>
          <img
            src="https://www.redbus.in/bushire/static/webv2/home/2%20(5).svg"
            alt=""
            width="202px"
            height="144px"
          />
        </div>
      </div>
      <div className={Styles.bookInEaschStep}>
        <div>
          <img
            src="https://www.redbus.in/bushire/static/mwebv2/home/3.svg"
            alt="1"
          />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignContent: "center",
          }}
        >
          <div
            className={Styles.bookInEaschStepText}
            style={{ fontWeight: "800" }}
          >
            Pick the vehicle
          </div>
          <div className={Styles.bookInEaschStepText}>you like and </div>
          <div className={Styles.bookInEaschStepText}>go places.</div>
        </div>
        <div>
          <img
            src="https://www.redbus.in/bushire/static/webv2/home/3%20(1).svg"
            alt=""
            width="202px"
            height="144px"
          />
        </div>
      </div>
    </div>
  );
};
