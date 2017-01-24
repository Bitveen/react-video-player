import React from 'react';


class VideoControls extends React.Component {

    constructor(props) {
        super(props);
        this.renderProgress  = this.renderProgress.bind(this);
        this.renderPlayPause = this.renderPlayPause.bind(this);
    }




    renderProgress() {
        let { video, player } = this.props;
        let width = (player.currentPosition / video.duration) * 100;

        return (
            <div className="progress" style={{marginTop: "5px", cursor: "pointer" }}
                onClick={(event) => this.props.handleProgressClick(event)}>
                <div className="progress-bar" style={{width: width + "%"}}></div>
            </div>
        );

    }

    renderPlayPause = () => {
        if (this.props.player.paused) {
            return (
                <button className="btn btn-default btn-sm" onClick={() => this.props.play()}>
                    <span className="glyphicon glyphicon-play"/>
                </button>
            )
        }
        return (
            <button className="btn btn-default btn-sm" onClick={() => this.props.pause()}>
                <span className="glyphicon glyphicon-pause"/>
            </button>
        )

    };



    render() {

        let {player, video, changePosition, toggleFullScreen} = this.props;

        return (
            <div className="video-player-controls">
                {this.renderProgress()}
                <div className="btn-group">
                    {this.renderPlayPause()}
                    <button className="btn btn-default btn-sm" onClick={() => changePosition(-1)}>
                        <span className="glyphicon glyphicon-chevron-left"/>
                    </button>
                    <button className="btn btn-default btn-sm" onClick={() => changePosition(1)}>
                        <span className="glyphicon glyphicon-chevron-right"/>
                    </button>
                    <button className="btn btn-default btn-sm" onClick={() => toggleFullScreen()}>
                        <span className="glyphicon glyphicon-fullscreen" />
                    </button>

                </div>
                <span className="pull-right">
                    <strong>{Math.floor(player.currentPosition)} / {video.duration} sec.</strong>    
                </span>
            </div>
        );
    }






};

export default VideoControls;
