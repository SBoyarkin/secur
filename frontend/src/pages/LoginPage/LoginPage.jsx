import S from './LoginPage.module.css'
import axios from "axios";
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router";
import {setToken} from "../../features/tokenSlice.js";
export const LoginPage = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const Login = (e) => {
        e.preventDefault()
        const formData = new FormData(e.target);
        const entries = formData.entries();
        const obj = Object.fromEntries(entries);
        axios.post('http://localhost:8000/auth/token/login/', obj)
            .then(response =>   {
                if (response.status === 200) {
                    console.log(response.data.auth_token);
                    dispatch(setToken(response.data.auth_token));
                    navigate('/', { replace: true });
                }})}
    return(
        <>
            <div className={S.bg}>
                <div className={S.card}>
                    <form className={S.loginForm} onSubmit={Login}>
                        <div className={S.head}>
                            <div>ICON</div>
                            <h2> Добро пожаловать!</h2>
                            <h5>Введите свои учетные данные чтобы продолжить</h5>
                        </div>
                        <p>Логин</p>
                        <input placeholder={"Введите логин"} name={"username"} type={"text"}></input>
                        <p>Пароль</p>
                        <input placeholder={"Введите пароль"} name={"password"} type={"password"}></input>

                        <button  type={"submit"}>ВОЙТИ</button>
                    </form>
                </div>
            </div>

        </>
    )
}