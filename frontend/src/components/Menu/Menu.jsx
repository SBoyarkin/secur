import S from './Menu.module.css'
import {MenuItem} from "./MenuItem.jsx";
export const Menu = () => {
    const menu = [
        {
            id: 1,
            title: 'Сотрудники',
            to: 'users'
        },
        {
            id: 2,
            title: 'Моя организация',
            to: 'my-corp'
        },
        {
            id: 3,
            title: 'Документы',
            to: 'doc'
        },
        {
            id: 4,
            title: 'Добавить серт',
            to: 'cert'
        },
    ]
    return(
        <>
            <div className={S.menuConten}>
                {menu.map(item => <MenuItem  item={item}/>)}
            </div>
        </>
    )

}