import React from 'react';
import { Link } from 'react-router';
import { browserHistory } from 'react-router';

const Navbar = () => {
    return (
        <nav className="navbar navbar-default">
            <div className="container-fluid">
                {browserHistory.getCurrentLocation().pathname !== '/' ?
                    (<ul className="nav navbar-nav">
                        <li><Link to="/"><span className="glyphicon glyphicon-chevron-left"/> Back to playlist</Link></li>
                    </ul>)
                    :
                    null
                }
            </div>

        </nav>
    );
};

export default Navbar;
