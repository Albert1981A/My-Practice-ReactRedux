import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux"

function Demo3TotalPrice() {

    const storeData = useSelector(state => state);
    const [total, setTotal] = useState(0);

    useEffect(() => {
        let sum = 0;
        storeData.products.forEach(item => {
            return sum += item.price;
        });
        setTotal(sum);
    }, [storeData.products])

    return (
        <div style={{ border: "solid", borderColor: "yellow", width: 600, margin: "auto" }}>

            <h3>Demo3 Total Price Header</h3>

            <span style={{ fontWeight: "bold" }}>Total Price: </span> <span>{total}</span>

            <h3>Demo3 Total Price Footer</h3>
        </div>
    );
}
export default Demo3TotalPrice;
