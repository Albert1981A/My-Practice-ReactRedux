import React from "react";
import { useSelector } from "react-redux";
import Demo2PresentAdultUsers from "./Demo2_PresentAdultUsers";

function Demo2PresentAllUsers() {

    const storeData = useSelector(state => state);

    return (
        <div>
            <h3>Demo2 Present All Users</h3>

            <table border="1">
                <tbody>
                    {storeData.users.length > 0 &&
                        storeData.users.map((item) => {
                            return <tr key={item.id}>
                                <td> {item.id} </td>
                                <td> {item.firstName} </td>
                                <td> {item.lastName} </td>
                                <td> {item.age} </td>
                            </tr>
                        })}
                </tbody>
            </table>

            <br />

            <Demo2PresentAdultUsers />

        </div>
    );
}
export default Demo2PresentAllUsers;