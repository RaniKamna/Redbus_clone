import { useContext, useEffect, useState } from "react";
import ToggleButton from "react-toggle-button";



const Toggle = props => {
  const [state, setState] = useState({
    ParentOn: false,

  });

  return (
    <div >
      {/* <h2>Parent</h2> */}

      {/* <div className="col-12">
        <div className="row">
          <div className="col-6">
            Turn {state.ParentOn ? " Round Trip" : " One Way Trip"} all button
          </div>
          <div className="col-6"> */}
            {/* <ToggleButton
                inactiveLabel = "left"
                activeLabel = "One"
              value={state.ParentOn}
              onToggle={value => {
                setState({ ...state, ParentOn: !value });
              }}
            >
                
            </ToggleButton> */}
          {/* </div>
        </div>
          </div>*/}
     
    </div>
  );
};

export {Toggle};
