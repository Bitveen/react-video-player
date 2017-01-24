import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import * as ActionTypes from 'actionTypes';




const defaultPlaylistState = [
    {
        id: 1,
        url: 'jellyfish-1',
        duration: 30
    },
    {
        id: 2,
        url: 'jellyfish-2',
        duration: 30
    },
    {
        id: 3,
        url: 'jellyfish-3',
        duration: 30
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
    currentPosition: 0
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
        case ActionTypes.UPDATE_POSITION:
            return Object.assign({}, state, {
                currentPosition: action.position
            });
        case ActionTypes.DEFAULT_PLAYER:
            return Object.assign({}, state, {
                paused: true,
                currentPosition: 0
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
