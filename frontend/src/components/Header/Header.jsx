import {useEffect, useState} from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import styles from './Header.module.css';
import {authAxiosRequest} from "../../castomAxiosRequest.js";
import {setUser} from "../../features/userSlice.js";


// Моковые данные пользователя
const MOCK_USER = {
    id: 1,
    first_name: 'Алексей',
    last_name: 'Петров',
    username: 'alex.petrov',
    email: 'a.petrov@securecorp.ru',
    role: 'Администратор безопасности',
    avatar: null, // Можно добавить URL аватара
    last_login: '2024-02-18T10:30:00',
    department: 'Отдел информационной безопасности'
};

export const Header = () => {
    const selector =
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
    const [user] = useState(MOCK_USER); // В реальном проекте данные приходят из Redux/контекста

    useEffect(() => {
        authAxiosRequest.get('api-v1/auth/users/me/')
            .then(response => {
                console.log(response.data)
                dispatch(setUser(response.data))

            })
    }, []);

    // Обработчик выхода
    const handleLogout = () => {
        // Очищаем токен в Redux
        // dispatch(clearToken());

        // Очищаем localStorage/sessionStorage
        localStorage.removeItem('token');
        sessionStorage.removeItem('token');

        // Перенаправляем на страницу входа
        navigate('/login', { replace: true });

        // Закрываем меню
        setIsUserMenuOpen(false);

        console.log('Выход из системы');
    };

    // Форматирование даты последнего входа
    const formatLastLogin = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleString('ru-RU', {
            hour: '2-digit',
            minute: '2-digit',
            day: '2-digit',
            month: '2-digit',
            year: 'numeric'
        });
    };

    // Получение инициалов пользователя
    const getUserInitials = () => {
        if (user.first_name && user.last_name) {
            return `${user.first_name[0]}${user.last_name[0]}`.toUpperCase();
        }
        return user.username.slice(0, 2).toUpperCase();
    };

    return (
        <header className={styles.header}>
            <div className={styles.headerLeft}>
                ДОП КНОПК
            </div>

            <div className={styles.headerRight}>
                {/* Информация о пользователе */}
                <div className={styles.userInfo}>
                    <div className={styles.userDetails}>
                        <div className={styles.userName}>
                            {user.last_name} {user.first_name}
                        </div>
                        <div className={styles.userRole}>{user.role}</div>
                    </div>

                    {/* Аватар/Инициалы пользователя */}
                    <div
                        className={styles.userAvatar}
                        onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                    >
                        {user.avatar ? (
                            <img src={user.avatar} alt={`${user.first_name} ${user.last_name}`} />
                        ) : (
                            <span>{getUserInitials()}</span>
                        )}
                    </div>

                    {/* Выпадающее меню пользователя */}
                    {isUserMenuOpen && (
                        <div className={styles.userDropdown}>
                            <div className={styles.dropdownHeader}>
                                <div className={styles.dropdownUserInfo}>
                                    <div className={styles.dropdownUserName}>
                                        {user.last_name} {user.first_name}
                                    </div>
                                    <div className={styles.dropdownUserEmail}>
                                        {user.email}
                                    </div>
                                    <div className={styles.dropdownUserDepartment}>
                                        {user.department}
                                    </div>
                                </div>
                            </div>

                            <div className={styles.dropdownDivider} />

                            <div className={styles.dropdownMenu}>
                                <button className={styles.dropdownItem}>
                                    <span className={styles.dropdownIcon}>👤</span>
                                    Мой профиль
                                </button>
                                <button className={styles.dropdownItem}>
                                    <span className={styles.dropdownIcon}>⚙️</span>
                                    Настройки
                                </button>
                                <button className={styles.dropdownItem}>
                                    <span className={styles.dropdownIcon}>🔐</span>
                                    Безопасность
                                </button>
                            </div>

                            <div className={styles.dropdownDivider} />

                            <div className={styles.dropdownFooter}>
                                <div className={styles.lastLogin}>
                                    Последний вход: {formatLastLogin(user.last_login)}
                                </div>
                                <button
                                    className={styles.logoutButton}
                                    onClick={handleLogout}
                                >
                                    <span className={styles.logoutIcon}>⏻</span>
                                    Выйти
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </div>

            {/* Оверлей для закрытия меню при клике вне */}
            {isUserMenuOpen && (
                <div
                    className={styles.dropdownOverlay}
                    onClick={() => setIsUserMenuOpen(false)}
                />
            )}
        </header>
    );
};