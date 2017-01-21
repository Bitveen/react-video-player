import React from 'react';
import { connect } from 'react-redux';


import PlaylistItem from 'PlaylistItem';



const mapStateToProps = (state) => {
    return {
        playlist: state.playlist
    };
};


const Playlist = ({ playlist }) => {
    return (
        <div>
            <h3>Playlist: <small>{playlist.length} videos</small></h3>
            <div className="list-group">
                {playlist.map(video => {
                    return (<PlaylistItem key={video.id} {...video} />);
                })}
            </div>
        </div>
    );
};

export default connect(mapStateToProps)(Playlist);
