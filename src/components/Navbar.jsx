import React from 'react';
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div>
            <nav>
                <Link to='/'>POLLS AND SURVEYS</Link>
                <Link to='/products'>Products</Link>
            </nav>
        </div>
    );
};

export default Navbar;
