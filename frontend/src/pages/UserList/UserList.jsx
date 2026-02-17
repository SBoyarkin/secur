import {useEffect, useState} from "react";
import {authAxiosRequest} from "../../castomAxiosRequest.js";

export const UserList = () => {
    const [users, usersHandler] = useState([])

    useEffect(() => {
        authAxiosRequest.get('users/')
            .then(response => usersHandler(response.data))
    }, []);


    return(
        <>
            {users.map(item => <div key={item.id}> {item.id} - {item.email} </div>)}
        </>
    )

}