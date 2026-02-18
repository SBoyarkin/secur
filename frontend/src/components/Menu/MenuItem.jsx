import {NavLink} from "react-router";

export const MenuItem = ({item}) => {
    const {id, title, to} = item
    return(
        <>
            <NavLink key={id} to={to}>{title}</NavLink>
        </>
    )

}