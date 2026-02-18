import {useEffect, useState} from "react";
import {authAxiosRequest} from "../../castomAxiosRequest.js";

export const Me = () => {
    const [me, meHandler] = useState([])
    const [avalible, avalibleHandler] = useState([])
    useEffect(() => {
        authAxiosRequest.get('api-v1/auth/users/me/')
            .then(response => {
                console.log(response.data)
                meHandler(response.data)
            })
    }, []);
    useEffect(() => {
        authAxiosRequest.get('service/available/organizations')
            .then(response => {
                console.log(response.data)
                avalibleHandler(response.data)
            })
    }, []);
    return(
        <>
        </>
    )

}


