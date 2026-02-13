import S from './LoginPage.module.css'
export const LoginPage = () => {
    const Login = (e) => {
        e.preventDefault()

    }
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
                        <input placeholder={"Введите логин"} name={"login"} type={"text"}></input>
                        <p>Пароль</p>
                        <input placeholder={"Введите пароль"} name={"password"} type={"password"}></input>

                        <button  type={"submit"}>ВОЙТИ</button>
                    </form>
                </div>

                <div></div>
            </div>

        </>
    )
}