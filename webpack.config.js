const path = require('path');
module.exports = {
    entry: path.resolve(__dirname, 'src/index.jsx'),
    output: {
        filename: 'app.js',
        path: path.resolve(__dirname, 'www/js')
    },
    resolve: {
        root: path.resolve(__dirname, 'src'),
        alias: {
            App: 'components/App.jsx',
            NotFound: 'components/NotFound.jsx',
            Playlist: 'components/playlist/Playlist.jsx',
            VideoPlayer: 'components/player/VideoPlayer.jsx',
            VideoControls: 'components/player/VideoControls.jsx',
            Navbar: 'components/Navbar.jsx',
            PlaylistItem: 'components/playlist/PlaylistItem.jsx',
            routes: 'routes.jsx',
            actions: 'actions.jsx',
            actionTypes: 'actionTypes',
            api: 'api.jsx',
            reducers: 'reducers.jsx'
        },
        extensions: ['', '.js', '.jsx']
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                include: path.resolve(__dirname, 'src'),
                query: {
                    presets: ['es2015', 'stage-0', 'react']
                }
            }
        ]
    }
};
