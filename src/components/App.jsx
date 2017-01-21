import React from 'react';

import Navbar from 'Navbar';

const App = ({ children }) => {
    return (
        <div className="container">
            <Navbar />
            <hr/>
            <div className="panel panel-default">
                <div className="panel-body">
                    {children}
                </div>
            </div>
        </div>
    );
};

export default App;
