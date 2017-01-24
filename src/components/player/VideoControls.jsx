import React from 'react';


class VideoControls extends React.Component {

    constructor(props) {
        super(props);
        this.renderProgress = this.renderProgress.bind(this);
    }


    renderProgress() {
        let { video, player } = this.props;
        let width = (player.currentPosition / video.duration) * 100;

        return (
            <div className="progress" style={{marginTop: "5px"}}>
                <div className="progress-bar" style={{width: width + "%"}}></div>
            </div>
        );

    }


    render() {

        let {play, pause, player, video} = this.props;

        const renderPlayPause = () => {
            if (player.paused) {
                return (
                    <button className="btn btn-default btn-sm" onClick={() => play()}>
                        <span className="glyphicon glyphicon-play"/>
                    </button>
                )
            }
            return (
                <button className="btn btn-default btn-sm" onClick={() => pause()}>
                    <span className="glyphicon glyphicon-pause"/>
                </button>
            )

        };



        return (
            <div className="video-player-controls">
                {this.renderProgress()}
                <div className="btn-group">
                    {renderPlayPause()}
                </div>
                <span className="pull-right"><strong>{Math.floor(player.currentPosition)} / {video.duration} sec.</strong></span>
            </div>
        );
    }






};

export default VideoControls;
