import React from 'react';

import NavigationItem from './NavigationItem/NavigationItem';
import styles from'./NavigationItems.css'


const navigationItems = (props) => (
    <ul className={styles.NavigationItems} >
        <NavigationItem link='/' exact>Blog</NavigationItem>
        <NavigationItem link='/new-post'>New Post</NavigationItem>
    </ul>
);

export default navigationItems;