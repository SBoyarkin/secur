import S from './UserListItem.module.css'

export const UserListItem = ({props}) => {
    const {id, username, email, snils, first_name, last_name} = props
    return(
        <>
            <div className={S.UserItem} key={id}>
                <div>{id}</div>
                <div>{first_name}</div>
                <div>{last_name}</div>
                <div>{username}</div>
                <div>{email}</div>
                <div>{snils}</div>
            </div>

        </>
    )

}