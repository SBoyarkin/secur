import { Outlet } from "react-router";
import S from './Content.module.css';

export const Content = () => {
    return (
        <main className={S.content}>
            <div className={S.contentContainer}>
                <Outlet />
            </div>
        </main>
    );
};