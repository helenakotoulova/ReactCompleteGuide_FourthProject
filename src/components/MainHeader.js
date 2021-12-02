import Navigation from "./Navigation";
import classes from './MainHeader.module.css';

function MainHeader(props) {
    return(
        <header className={classes.header}>
            <h1>A typical page</h1>
            <Navigation loggedIn={props.loggedIn} logOut={props.logOut}/>
        </header>
    )
}

export default MainHeader;