import React from "react";
import Demo1CounterChanger from "./Demo1_CounterChanger";
import Demo1CounterViewer from "./Demo1_CounterViewer";

function Demo1CounterMain() {
    return (
        <div>
            <h1>Demo1 Counter Main Header</h1>

            <Demo1CounterChanger />
            <br />
            <Demo1CounterViewer /> 

            <h1>Demo1 Counter Main Footer</h1>
        </div>
    );
}
export default Demo1CounterMain;