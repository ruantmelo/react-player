import React, { Fragment } from 'react';

const Album = props => {
    return (
        <Fragment>
            <img className="album" alt={props.alt} src={props.src} />
        </Fragment>

    );
};


export default Album;