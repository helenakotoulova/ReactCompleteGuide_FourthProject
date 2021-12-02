import Navigation from "./Navigation";
import classes from './MainHeader.module.css';

function MainHeader() {
    return(
        <header className={classes.header}>
            <h1>A typical page</h1>
            <Navigation />
        </header>
    )
}

export default MainHeader;