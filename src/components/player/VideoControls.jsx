import React from 'react';


class VideoControls extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {

        let {play, pause, paused} = this.props;

        const renderPlayPause = () => {
            if (paused) {
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
                <div className="progress" style={{marginTop: "5px"}}>
                    <div className="progress-bar" style={{width: "60%"}}></div>
                </div>
                <div className="btn-group">
                    {renderPlayPause()}
                    <button className="btn btn-default btn-sm">
                        <span className="glyphicon glyphicon-chevron-left"/>
                    </button>
                    <button className="btn btn-default btn-sm">
                        <span className="glyphicon glyphicon-chevron-right"/>
                    </button>
                    <button className="btn btn-default btn-sm">
                        <span className="glyphicon glyphicon-fullscreen" />
                    </button>
                </div>

            </div>
        );
    }






};

export default VideoControls;
