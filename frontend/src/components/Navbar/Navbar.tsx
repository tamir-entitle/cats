import React from 'react';
import { Link } from "react-router-dom";
import useStyles from './Navbar.styles';

const Navbar: React.FC = () => {
    const classes = useStyles();
    return (
        <div className={classes.navbarWrapper}>
            <div className={classes.navbarContent}>
                <Link to={'/'} className={classes.navbarButton}>Home</Link>
                <div className={classes.seperator}></div>
                <Link to={'/create'} className={classes.navbarButton}>Create</Link>
            </div>
        </div>
    );
};

export default Navbar;