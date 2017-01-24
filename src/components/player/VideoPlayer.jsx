import React from 'react';
import { connect } from 'react-redux';
import VideoControls from 'VideoControls';
import { playVideo, pauseVideo, updatePosition, defaultPlayer, toggleFullScreen } from 'actions';


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
        updatePosition: time => dispatch(updatePosition(time)),
        defaultPlayer: () => dispatch(defaultPlayer()),
        toggleFullScreen: () => dispatch(toggleFullScreen())
    };
};



class VideoPlayer extends React.Component {

    constructor(props) {
        super(props);
        this.play                   = this.play.bind(this);
        this.pause                  = this.pause.bind(this);
        this.onPlay                 = this.onPlay.bind(this);
        this.onPause                = this.onPause.bind(this);
        this.onTimeUpdate           = this.onTimeUpdate.bind(this);
        this.onEnded                = this.onEnded.bind(this);
        this.changePosition         = this.changePosition.bind(this);
        this.handleProgressClick    = this.handleProgressClick.bind(this);
        this.handleToggleFullScreen = this.handleToggleFullScreen.bind(this);
    }


    componentDidMount() {
        let videoElem = this.refs.player;
        videoElem.addEventListener('pause', this.onPause);
        videoElem.addEventListener('play', this.onPlay);
        videoElem.addEventListener('timeupdate', this.onTimeUpdate);
        videoElem.addEventListener('ended', this.onEnded);
    }


    componentWillUnmount() {
        let videoElem = this.refs.player;
        videoElem.removeEventListener('pause', this.onPause);
        videoElem.removeEventListener('play', this.onPlay);
        videoElem.removeEventListener('timeupdate', this.onTimeUpdate);
        videoElem.removeEventListener('ended', this.onEnded);
        this.props.defaultPlayer();
    }




    play() {
        let videoElem = this.refs.player;
        videoElem.play();
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


    changePosition(position) {
        let videoElem = this.refs.player;
        this.props.updatePosition(videoElem.currentTime + position);
        videoElem.currentTime = videoElem.currentTime + position;
    }


    handleToggleFullScreen() {
        let videoElem = this.refs.player;
        if (videoElem.requestFullscreen) {
            videoElem.requestFullscreen();
        } else if (videoElem.mozRequestFullScreen) {
            videoElem.mozRequestFullScreen();
        } else if (videoElem.webkitRequestFullscreen) {
            videoElem.webkitRequestFullscreen();
        }
        this.props.toggleFullScreen();
    }



    pause() {
        let videoElem = this.refs.player;
        videoElem.pause();
    }


    handleProgressClick(event) {
        let progressDimensions = event.currentTarget.getBoundingClientRect();
        let newPosition = Math.ceil((this.props.video.duration * (event.clientX - progressDimensions.left)) / progressDimensions.width);
        this.props.updatePosition(newPosition);
        this.play();
        this.refs.player.currentTime = newPosition;
    }



    render() {
        let { video, player, updatePosition } = this.props;
        return (
            <div className="video-player">
                <h3>VideoPlayer: {video.url}</h3>
                <div className="embed-responsive embed-responsive-16by9">
                    <video className="embed-responsive-item" id="player" ref="player">
                        <source src={`/video/${video.url}.mkv`} type="video/mp4" />
                    </video>
                </div>
                <hr/>
                <VideoControls
                    toggleFullScreen={this.handleToggleFullScreen}
                    handleProgressClick={this.handleProgressClick}
                    changePosition={this.changePosition}
                    video={video} player={player}
                    play={this.play} pause={this.pause} />
            </div>
        );
    }


};

export default connect(mapStateToProps, mapDispatchToProps)(VideoPlayer);
