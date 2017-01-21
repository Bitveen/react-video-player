import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';


/**
 * Components
 */
import App from 'App';
import Playlist from 'Playlist';
import VideoPlayer from 'VideoPlayer';
import NotFound from 'NotFound';


const Routes = ({ history }) => {
    return (
        <Router history={history}>
            <Route path='/' component={App}>
                <Route path='/video/:url' component={VideoPlayer} />
                <IndexRoute component={Playlist} />
            </Route>
        </Router>
    );
};

export default Routes;
