import S from './UserListItem.module.css'

export const UserListItem = ({props}) => {
    const {id, username, email, snils, first_name, last_name} = props
    return(
        <div className={S.userItem} key={id}>
            <div className={`${S.userCell} ${S.userId}`}>{id}</div>
            <div className={`${S.userCell} ${S.userName}`}>{first_name}</div>
            <div className={`${S.userCell} ${S.userName} ${S.userLastName}`}>{last_name}</div>
            <div className={`${S.userCell} ${S.userUsername}`}>{username}</div>
            <div className={`${S.userCell} ${S.userEmail}`}>{email}</div>
            <div className={`${S.userCell} ${S.userSnils}`}>{snils}</div>
        </div>
    )
}