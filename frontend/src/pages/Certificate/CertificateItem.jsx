import S from './CertificateItem.module.css';
import { convertTime } from "../../scritps.js";

export const CertificateItem = ({ props }) => {
    const { cn, o, email, not_valid_after, not_valid_before } = props;

    // Проверка срока действия
    const isExpired = new Date(not_valid_after) < new Date();
    const isExpiringSoon = !isExpired &&
        (new Date(not_valid_after) - new Date()) < 30 * 24 * 60 * 60 * 1000; // 30 дней

    return (
        <div className={S.certificateItem}>
            {/* Основная информация */}
            <div className={S.certificateMain}>
                <div className={S.certificateIcon}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path d="M12 2L3 7v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-9-5z" strokeWidth="2"/>
                        <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" strokeWidth="2"/>
                    </svg>
                </div>

                <div className={S.certificateInfo}>
                    <div className={S.certificateName}>
                        <span className={S.label}>CN:</span>
                        <span className={S.value}>{cn || '—'}</span>
                    </div>

                    <div className={S.certificateOrg}>
                        <span className={S.label}>O:</span>
                        <span className={S.value}>{o || '—'}</span>
                    </div>

                    <div className={S.certificateEmail}>
                        <span className={S.label}>Email:</span>
                        <span className={S.value}>{email || '—'}</span>
                    </div>
                </div>
            </div>

            {/* Даты действия */}
            <div className={S.certificateDates}>
                <div className={S.dateItem}>
                    <span className={S.dateLabel}>Выдан:</span>
                    <span className={S.dateValue}>{convertTime(not_valid_before)}</span>
                </div>

                <div className={S.dateItem}>
                    <span className={S.dateLabel}>Истекает:</span>
                    <span className={`${S.dateValue} ${
                        isExpired ? S.expired : 
                        isExpiringSoon ? S.expiringSoon : 
                        S.valid
                    }`}>
                        {convertTime(not_valid_after)}
                    </span>
                </div>
            </div>

            {/* Статус сертификата */}
            <div className={S.certificateStatus}>
                {isExpired ? (
                    <span className={`${S.statusBadge} ${S.statusExpired}`}>
                        ✕ ПРОСРОЧЕН
                    </span>
                ) : isExpiringSoon ? (
                    <span className={`${S.statusBadge} ${S.statusWarning}`}>
                        ⚠ СКОРО ИСТЕКАЕТ
                    </span>
                ) : (
                    <span className={`${S.statusBadge} ${S.statusValid}`}>
                        ✓ ДЕЙСТВИТЕЛЕН
                    </span>
                )}
            </div>
        </div>
    );
};