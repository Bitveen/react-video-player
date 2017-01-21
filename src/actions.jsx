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
