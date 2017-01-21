import React from 'react';
import { connect } from 'react-redux';

const mapStateToProps = (state, { params: { url }}) => {
    return {
        player: state.player,
        url
    };
};


const VideoPlayer = ({ player, url }) => {
    return (
        <div className="video-player">
            <h3>VideoPlayer</h3>
            <div className="embed-responsive embed-responsive-16by9">
                <video className="embed-responsive-item" controls>
                    <source src={`/video/${url}.mkv`} type="video/mp4" />
                </video>
            </div>
        </div>
    );
};

export default connect(mapStateToProps)(VideoPlayer);
