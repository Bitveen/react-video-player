import * as ActionTypes from 'actionTypes';


export const playVideo = () => {
    return {
        type: ActionTypes.PLAY_VIDEO
    };
};
export const pauseVideo = () => {
    return {
        type: ActionTypes.PAUSE_VIDEO
    };
};

export const updatePosition = (position) => {
    return {
        type: ActionTypes.UPDATE_POSITION,
        position
    };
};

export const defaultPlayer = () => {
    return {
        type: ActionTypes.DEFAULT_PLAYER
    };
};
