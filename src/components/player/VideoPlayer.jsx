import React from 'react';
import { connect } from 'react-redux';
import VideoControls from 'VideoControls';
import { playVideo, pauseVideo } from 'actions';
import ReactDOM from 'react-dom';



const mapStateToProps = (state, { params: { url }}) => {
    return {
        player: state.player,
        url
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        playVideo: () => dispatch(playVideo()),
        pauseVideo: () => dispatch(pauseVideo())
    };
};



class VideoPlayer extends React.Component {

    constructor(props) {
        super(props);
        this.play = this.play.bind(this);
        this.pause = this.pause.bind(this);
    }

    play() {
        let videoElem = this.refs.player;
        videoElem.play();
        this.props.playVideo();
    }
    pause() {
        let videoElem = this.refs.player;
        videoElem.pause();
        this.props.pauseVideo();
    }


    render() {
        let { player, url } = this.props;
        return (
            <div className="video-player">
                <h3>VideoPlayer</h3>
                <div className="embed-responsive embed-responsive-16by9">
                    <video className="embed-responsive-item" id="player" ref="player">
                        <source src={`/video/${url}.mkv`} type="video/mp4" />
                    </video>
                </div>
                <hr/>
                <VideoControls {...player} play={this.play} pause={this.pause} />
            </div>
        );
    }


};

export default connect(mapStateToProps, mapDispatchToProps)(VideoPlayer);
