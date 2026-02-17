import {useSelector, useDispatch} from "react-redux";
import { decrement, increment } from '../../features/counterSlice.js'
import S from './MainPage.module.css'
import {Menu} from "../../components/Menu/Menu.jsx";
import {Content} from "../Content/Content.jsx";
export const MainPage = () => {
    return(
        <>
            <main className={S.flexAlign}>
                <Menu />
                <Content/>

            </main>

        </>
    )

}