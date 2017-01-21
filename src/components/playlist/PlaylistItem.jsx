import React from 'react';
import { Link } from 'react-router';

const PlaylistItem = ({ url }) => {
    return (
        <Link className="list-group-item" to={`/video/${url}`}>{url}</Link>
    );
};

export default PlaylistItem;
