import React from "react";
import { useSelector } from "react-redux"
import Demo3Product from "./Demo3_Product";

function Demo3AllProducts() {

    const storeData = useSelector(state => state);

    return (
        <div style={{ border: "solid", borderColor: "green", width: 600, margin: "auto" }}>

            <h3>Demo3 All Products Header</h3>

            {
                storeData.products.length > 0 &&
                storeData.products.map( (item, index) => {
                    return <div key={index}>
                        <Demo3Product productData={item} />
                        <br />
                        </div>
                })
            }

            <h3>Demo3 All Products Footer</h3>
        </div>
    );
}
export default Demo3AllProducts;