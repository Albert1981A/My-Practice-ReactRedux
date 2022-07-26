import React from "react";
import { useSelector } from "react-redux"

function Demo2PresentAdultUsers() {

    const storeData = useSelector(state => state);

    return (
        <div>
            <h3>Demo2 Present Adult Users</h3>

            <table border="1">
                <tbody>
                    {storeData.users.length > 0 &&
                        storeData.users.filter(x => x.age > 18).map((item) => {
                            return <tr key={item.id}>
                                <td> {item.id} </td>
                                <td> {item.firstName} </td>
                                <td> {item.lastName} </td>
                                <td> {item.age} </td>
                            </tr>
                        })}
                </tbody>
            </table>

        </div>
    );
}
export default Demo2PresentAdultUsers;