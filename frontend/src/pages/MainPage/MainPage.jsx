import S from './MainPage.module.css'
import {Menu} from "../../components/Menu/Menu.jsx";
import {Content} from "../Content/Content.jsx";
import {Header} from "../../components/Header/Header.jsx";
export const MainPage = () => {
    return(
        <>
            <div className={S.horizontalFlex}>
                <Menu/>
            <div className={S.verticalFlex}>
                <Header/>
                <Content/>
            </div>

            </div>
        </>
    )

}