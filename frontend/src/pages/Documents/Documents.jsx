import {useEffect} from "react";
import {authAxiosRequest} from "../../castomAxiosRequest.js";

export const Documents = () => {
    useEffect(() => {
        authAxiosRequest.get('documents/')
            .then(response => console.log(response.data))
    }, []);
    return(
        <>
        <h1>Доступные документы</h1>
            <button onClick={() => authAxiosRequest.get('documents/')
            .then(response => console.log(response.data))}></button>
        </>
    )

}