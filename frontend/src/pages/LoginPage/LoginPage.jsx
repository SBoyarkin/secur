import { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { setToken } from "../../features/tokenSlice.js";
import styles from './LoginPage.module.css';

export const LoginPage = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setError('');
        setIsLoading(true);

        const formData = new FormData(e.target);
        const entries = formData.entries();
        const obj = Object.fromEntries(entries);

        axios.post('http://localhost:8000/api-v1/auth/token/login/', obj)
            .then(response => {
                if (response.status === 200) {
                    console.log(response.data.auth_token);
                    dispatch(setToken(response.data.auth_token));
                    navigate('/', { replace: true });
                }
            })
            .catch(error => {
                console.error('Login error:', error);
                if (error.response && error.response.status === 400) {
                    setError('Неверный логин или пароль');
                } else {
                    setError('Ошибка соединения с сервером');
                }
            })
            .finally(() => {
                setIsLoading(false);
            });
    };

    return (
        <div className={styles.container}>
            {/* Левая декоративная панель (опционально) */}
            <div className={styles.leftPanel}>
            </div>

            {/* Правая панель с формой */}
            <div className={styles.rightPanel}>
                <div className={styles.formContainer}>
                    {/* Технический заголовок */}
                    <div className={styles.formHeader}>
                        <span className={styles.headerLine}></span>
                        <span className={styles.headerText}>АВТОРИЗАЦИЯ</span>
                        <span className={styles.headerLine}></span>
                    </div>

                    {/* Форма логина */}
                    <form className={styles.form} onSubmit={handleSubmit}>
                        <div className={styles.formBody}>
                            <h2 className={styles.welcomeTitle}>Добро пожаловать</h2>
                            <p className={styles.welcomeSubtitle}>
                                Введите свои учетные данные для входа в систему
                            </p>

                            {/* Поле логина */}
                            <div className={styles.inputGroup}>
                                <label className={styles.label}>
                                    <span className={styles.labelIcon}>👤</span>
                                    ЛОГИН
                                </label>
                                <input
                                    className={styles.input}
                                    placeholder="username или email"
                                    name="username"
                                    type="text"
                                    autoComplete="username"
                                    required
                                />
                            </div>

                            {/* Поле пароля */}
                            <div className={styles.inputGroup}>
                                <label className={styles.label}>
                                    <span className={styles.labelIcon}>🔐</span>
                                    ПАРОЛЬ
                                </label>
                                <input
                                    className={styles.input}
                                    placeholder="••••••••"
                                    name="password"
                                    type="password"
                                    autoComplete="current-password"
                                    required
                                />
                            </div>

                            {/* Сообщение об ошибке */}
                            {error && (
                                <div className={styles.errorMessage}>
                                    <span className={styles.errorIcon}>⚠️</span>
                                    {error}
                                </div>
                            )}

                            {/* Кнопка входа */}
                            <button
                                className={styles.submitButton}
                                type="submit"
                                disabled={isLoading}
                            >
                                {isLoading ? (
                                    <span className={styles.loadingText}>
                                        <span className={styles.loadingDot}>•</span>
                                        ВХОД...
                                    </span>
                                ) : (
                                    'ВОЙТИ В СИСТЕМУ'
                                )}
                            </button>

                            {/* Дополнительные ссылки */}
                            <div className={styles.formFooter}>
                                <button
                                    type="button"
                                    className={styles.linkButton}
                                    onClick={() => {/* Восстановление пароля */}}
                                >
                                    Забыли пароль?
                                </button>
                                <span className={styles.footerDivider}>|</span>
                                <button
                                    type="button"
                                    className={styles.linkButton}
                                    onClick={() => {/* Техподдержка */}}
                                >
                                    Техподдержка
                                </button>
                            </div>
                        </div>
                    </form>

                    {/* Информация о версии */}
                    <div className={styles.version}>
                        v2.4.0 • Безопасная зона
                    </div>
                </div>
            </div>
        </div>
    );
};