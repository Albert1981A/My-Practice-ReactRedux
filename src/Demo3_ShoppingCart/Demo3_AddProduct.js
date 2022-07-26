import React, { useState } from "react";
import { useDispatch } from "react-redux"

function Demo3AddProduct() {

    const [ product, setProduct] = useState({ name: "", price: 0 });

    const dispatch = useDispatch();

    return (
        <div style={{ border: "solid", borderColor: "red", width: 600, margin: "auto" }}>
            <h3>Demo3 Add Product Header</h3>

            <span style={{ fontWeight: "bold" }}>Name: </span> <input type="text" onChange={e => setProduct({...product, name: e.target.value })} /> <br />
            <span style={{ fontWeight: "bold" }}>Price: </span> <input type="number" onChange={e => setProduct({...product, price: +e.target.value })} /> <br /> <br />
            <input type="button" value="Add" onClick={ () => dispatch({ type: "ADD", payload: product })} />

            <h3>Demo3 Add Product Footer</h3>
        </div>
    );
}
export default Demo3AddProduct;