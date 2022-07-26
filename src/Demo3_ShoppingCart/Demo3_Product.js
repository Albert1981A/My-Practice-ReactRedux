import React from "react";
import { useDispatch } from "react-redux"

function Demo3Product(props) {

    const dispatch =useDispatch();

    return (
        <div style={{ border: "solid", borderColor: "blue", width: 400, margin: "auto" }}>

            <h3>Demo3 Product Header</h3>

            <span style={{ fontWeight: "bold" }}>Name: </span> <span>{props.productData.name}</span> <br />
            <span style={{ fontWeight: "bold" }}>Price: </span> <span>{props.productData.price}</span> <br /> <br />
            <input type="button" value="Remove" onClick={ () => dispatch({ type: "DELETE", payload: props.productData }) } />

            <h3>Demo3 Product Footer</h3>
        </div>
    );
}
export default Demo3Product;