import {useEffect, useState} from "react";
import {authAxiosRequest} from "../../castomAxiosRequest.js";
import {UserListItem} from "./UserListItem.jsx";

export const UserList = () => {
    const [users, usersHandler] = useState([])

    useEffect(() => {
        authAxiosRequest.get('users/')
            .then(response => usersHandler(response.data))
    }, []);


    return(
        <>
            <div>
                {users.map(item => <UserListItem props={item}/> )}
            </div>
        </>
    )

}