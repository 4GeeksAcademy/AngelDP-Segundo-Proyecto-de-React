import React from "react";
import './SecondCounter.css'




const SecondCounter = (props) => {

    return (

        <div className="display" style={{ width: `${props.width}px` }}>
            <div className="displayNumber">
                <p className="number">{props.item}</p>
            </div>
        </div>

    )
}
export default SecondCounter;