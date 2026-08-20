import S from './Menu.module.css'
import { MenuItem } from "./MenuItem.jsx";

export const Menu = () => {
    const menu = [
        {
            id: 1,
            title: 'Мои сертификаты',
            to: 'certificates'
        },
        {
            id: 2,
            title: 'Сотрудники',
            to: 'users'
        },
        {
            id: 3,
            title: 'Моя организация',
            to: 'my-corp'
        },
        {
            id: 4,
            title: 'Документы',
            to: 'documents'
        },

    ];

    return (
        <div className={S.menuContent}>
            {/* Логотип/заголовок меню */}
            <div className={S.menuHeader}>
                <div className={S.logo}>⎔</div>
                <div className={S.logoText}>SECURE<span>PORTAL</span></div>
            </div>

            {/* Навигация */}
            <nav className={S.nav}>
                {menu.map(item => (
                    <MenuItem key={item.id} item={item} />
                ))}
            </nav>

            {/* Нижняя часть меню (дополнительно) */}
            <div className={S.menuFooter}>
                <div className={S.version}>v2.4.0</div>
            </div>
        </div>
    );
};