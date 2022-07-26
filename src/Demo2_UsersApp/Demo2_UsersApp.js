import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux"
import Demo2PresentAllUsers from "./Demo2_PresentAllUsers";

function Demo2UsersApp() {

    const [user, setUser] = useState({ id: 0, firstName: "", lastName: "", age: 0 });

    const dispatch = useDispatch();

    useEffect(() => {
        async function getAllUsers() {
            let users = [];
            const resp = await axios.get("https://jsonplaceholder.typicode.com/users");
            const userFromServer = resp.data;
            console.log(userFromServer);
            users = userFromServer.map((item) => {
                let arrName = item.name.split(" ");
                return { id: item.id, firstName: arrName[0], lastName: arrName[1], age: 20 };
            });
            dispatch({type: "LOAD_DATA", payload: users});
        }
        getAllUsers();
    }, []);

    return (
        <div>
            <h1>Demo2 Users Header</h1>

            <span>ID: </span> <input type="number" onChange={ e => setUser({ ...user, id: +e.target.value }) } /> <br />
            <span>First Name: </span> <input type="text" onChange={ e => setUser({ ...user, firstName: e.target.value }) } /> <br />
            <span>Last Name: </span> <input type="text" onChange={ e => setUser({ ...user, lastName: e.target.value }) } /> <br />
            <span>Age: </span> <input type="number" onChange={ e => setUser({ ...user, age: +e.target.value }) } /> <br /> <br />

            <input type="button" value="Add" onClick={ () => dispatch({ type: "ADD", payload: user }) } />
            <input type="button" value="Update" onClick={ () => dispatch({ type: "UPDATE", payload: user }) } />
            <input type="button" value="Delete" onClick={ () => dispatch({ type: "DELETE", payload: user.id }) } /> <br /> <br />

            <Demo2PresentAllUsers />
            
            <br />

            



            <h1>Demo2 Users Footer</h1>
        </div>
    );
}
export default Demo2UsersApp;

// 2:35:14
