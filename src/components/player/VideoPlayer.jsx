import React from 'react';
import { connect } from 'react-redux';
import VideoControls from 'VideoControls';
import { playVideo, pauseVideo, updatePosition, defaultPlayer } from 'actions';



const mapStateToProps = (state, { params: { url }}) => {
    return {
        video: state.playlist.filter(video => video.url === url)[0],
        player: state.player
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        playVideo: () => dispatch(playVideo()),
        pauseVideo: () => dispatch(pauseVideo()),
        updatePosition: (time) => dispatch(updatePosition(time)),
        defaultPlayer: () => dispatch(defaultPlayer())
    };
};



class VideoPlayer extends React.Component {

    constructor(props) {
        super(props);
        this.play         = this.play.bind(this);
        this.pause        = this.pause.bind(this);
        this.onPlay       = this.onPlay.bind(this);
        this.onPause      = this.onPause.bind(this);
        this.onTimeUpdate = this.onTimeUpdate.bind(this);
        this.onEnded      = this.onEnded.bind(this);
    }

    play() {
        let videoElem = this.refs.player;
        videoElem.play();
    }


    componentDidMount() {
        let videoElem = this.refs.player;
        videoElem.addEventListener('pause', this.onPause);
        videoElem.addEventListener('play', this.onPlay);
        videoElem.addEventListener('timeupdate', this.onTimeUpdate);
        videoElem.addEventListener('ended', this.onEnded);
    }




    onPause() {
        this.props.pauseVideo();
    }

    onPlay(event) {
        if (this.props.player.currentPosition >= event.target.currentTime) {
            this.props.updatePosition(0);
        }
        this.props.playVideo();
    }

    onTimeUpdate(event) {
        this.props.updatePosition(event.target.currentTime);
    }

    onEnded() {
        this.props.pauseVideo();
    }







    componentWillUnmount() {
        let videoElem = this.refs.player;
        videoElem.removeEventListener('pause', this.onPause);
        videoElem.removeEventListener('play', this.onPlay);
        videoElem.removeEventListener('timeupdate', this.onTimeUpdate);
        videoElem.removeEventListener('ended', this.onEnded);
        this.props.defaultPlayer();
    }

    pause() {
        let videoElem = this.refs.player;
        videoElem.pause();
    }

    render() {
        let { video, player } = this.props;
        return (
            <div className="video-player">
                <h3>VideoPlayer: {video.url}</h3>
                <div className="embed-responsive embed-responsive-16by9">
                    <video className="embed-responsive-item" id="player" ref="player">
                        <source src={`/video/${video.url}.mkv`} type="video/mp4" />
                    </video>
                </div>
                <hr/>
                <VideoControls video={video} player={player} play={this.play} pause={this.pause} />
            </div>
        );
    }


};

export default connect(mapStateToProps, mapDispatchToProps)(VideoPlayer);
