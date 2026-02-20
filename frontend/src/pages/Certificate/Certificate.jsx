import {useEffect, useState} from "react";
import {authAxiosRequest} from "../../castomAxiosRequest.js";
import {CertificateItem} from "./CertificateItem.jsx";

export const Certificate = () => {
    const [certificate, certificateHandler] = useState([])
    useEffect(() => {
        authAxiosRequest.get('/personal/certificate/')
            .then(response => certificateHandler(response.data))
    }, []);
    return(
        <>
        <h1 >Список доступных сертификатов</h1>
             {certificate.map((cert) => <CertificateItem props={cert}/> )}
        </>
    )

}