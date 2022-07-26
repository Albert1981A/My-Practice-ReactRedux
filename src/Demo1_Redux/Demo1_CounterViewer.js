import React from "react";
import { useSelector } from "react-redux";

function Demo1CounterViewer() {

    const storeData = useSelector(state => state);
    
    return (
        <div>
            <h3>Demo1 Counter Viewer Header</h3>

            <span style={{fontWeight: "bold" }}>Counter: </span><span>{storeData.counter}</span>

            <h3>Demo1 Counter Viewer Footer</h3>
        </div>
    );
}
export default Demo1CounterViewer;