import React from "react";
import { useDispatch } from "react-redux";

function Demo1CounterChanger() {

    const dispatch = useDispatch();
    
    return (
        <div>
            <h3>Demo1 Counter Changer Header</h3>

            <span style={{fontWeight: "bold" }}>Increment Counter in 2 - </span>
            <input type="button" value="+" onClick={ () => dispatch( {type: "INCREMENT", payload: 2 } ) }/>
            <br />
            
            <span style={{fontWeight: "bold" }}>Decrement Counter in 3 - </span>
            <input type="button" value="-" onClick={ () => dispatch( {type: "DECREMENT", payload: 3 } ) }/>

            <h3>Demo1 Counter Changer Footer</h3>
        </div>
    );
}
export default Demo1CounterChanger;

// 39:42