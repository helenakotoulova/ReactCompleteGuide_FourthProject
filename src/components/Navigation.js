import classes from './Navigation.module.css';

function Navigation(props) {
    return(
        <>
            {props.loggedIn && 
            <ul className={classes.ul}>
                <li>
                    <a href='/'>User</a>
                </li>
                <li>
                    <a href='/'>Admin</a>
                </li>
                <li>
                    <button type='button' onClick={props.logOut}>Log out</button>
                </li>
            </ul>
            }
        </>
    )
}

export default Navigation;