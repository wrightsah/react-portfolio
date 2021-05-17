// import react 

import React from 'react';
import {NavLink} from 'react-router-dom';

// styling


// function for component
function Header() {
    return (
        <nav>
            <NavLink exact activeClassName='active' to='/'></NavLink>
            Home
        </nav>
    )
}

// export component

export default Header;