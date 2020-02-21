import React, { Fragment } from 'react';

const Album = props => {
    return (
        <Fragment>
            <img className="album img circle responsive-img pulse" alt={props.alt} src={props.src} />
        </Fragment>

    );
};


export default Album;