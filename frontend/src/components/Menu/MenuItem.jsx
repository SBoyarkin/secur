import { NavLink } from "react-router";
import styles from './MenuItem.module.css'; // Импортируем стили

export const MenuItem = ({ item }) => {
    const { id, title, to } = item;

    // Функция для получения иконки в зависимости от title
    const getIcon = (title) => {
        switch(title) {
            case 'Сотрудники':
                return '👥';
            case 'Моя организация':
                return '🏢';
            case 'Документы':
                return '📄';
            case 'Добавить серт':
                return '🔐';
            default:
                return '⎔'; // Наш технический символ из концепции
        }
    };

    return (
        <NavLink
            key={id}
            to={to}
            className={({ isActive }) =>
                isActive ? `${styles.navItem} ${styles.navItemActive}` : styles.navItem
            }
        >
            <span className={styles.navItemIcon}>{getIcon(title)}</span>
            <span className={styles.navItemTitle}>{title}</span>
        </NavLink>
    );
};