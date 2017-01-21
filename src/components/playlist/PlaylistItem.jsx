import React from 'react';
import { Link } from 'react-router';

const PlaylistItem = ({ url }) => {
    return (
        <Link className="list-group-item" to={`/video/${url}`}>{url} <span className="glyphicon glyphicon-play" /></Link>
    );
};

export default PlaylistItem;
