import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import * as ActionTypes from 'actionTypes';




const defaultPlaylistState = [
    {
        id: 1,
        url: 'jellyfish-1'
    },
    {
        id: 2,
        url: 'jellyfish-2'
    },
    {
        id: 3,
        url: 'jellyfish-3'
    }
];


const playlist = (state = defaultPlaylistState, action) => {
    switch (action.type) {
        default:
            return state;
    }
};



const defaultPlayerState = {
    paused: true,
    duration: 0,
    currentPosition: 0,
    fullscreen: false
};
const player = (state = defaultPlayerState, action) => {
    switch (action.type) {
        case ActionTypes.PLAY_VIDEO:
            return Object.assign({}, state, {
                paused: false
            });
        case ActionTypes.PAUSE_VIDEO:
            return Object.assign({}, state, {
                paused: true
            });
        default:
            return state;
    }
};





export default combineReducers({
    routing: routerReducer,
    playlist: playlist,
    player: player
});
