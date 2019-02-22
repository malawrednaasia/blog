import React from 'react';

import NavigationItems from '../NavigationItems/NavigationItems';
import styles from './Toolbar.css'

const Toolbar = (props) => (
    <header className={styles.Toolbar} >
        <div>
            Logo
        </div>
        <nav className="DesktopOnly" >
            <NavigationItems />
        </nav>
    </header>
);

export default Toolbar;