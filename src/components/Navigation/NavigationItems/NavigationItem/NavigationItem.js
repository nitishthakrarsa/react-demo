import React from 'react';
import { NavLink } from 'react-router-dom'

import classes from './NavigationItem.css';

const navigationItem = (props) => (
    <li className={classes.NavigationItem}>
        {/* <a href={props.link} className={props.active ? classes.active : null}>{props.children}</a> */}
        <NavLink
            exact={props.exact}
            activeClassName={classes.active}
            to={props.link}>{props.children}</NavLink>
    </li>
)

export default navigationItem;