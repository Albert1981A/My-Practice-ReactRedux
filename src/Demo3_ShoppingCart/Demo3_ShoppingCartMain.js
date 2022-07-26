import React from "react";
import Demo3AddProduct from "./Demo3_AddProduct";
import Demo3AllProducts from "./Demo3_AllProducts";
import Demo3TotalPrice from "./Demo3_TotalPrice";

function Demo3ShoppingCartMain() {

    return (
        <div>
            <h1>Demo3 Shopping Cart Main Header</h1>

            <Demo3AddProduct /> <br />

            <Demo3TotalPrice /> <br />

            <Demo3AllProducts />

            <h1>Demo3 Shopping Cart Main Footer</h1>
        </div>
    );
}
export default Demo3ShoppingCartMain;