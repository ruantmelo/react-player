import React, { Fragment } from 'react';
import Album from './Album';

const Song = props => {
    return (
        <Fragment>
            <p className="playing-now center-align"><span><i className="material-icons ">music_note</i> Playing now</span></p>
            <p>{`${props.name} - ${props.artist}`}</p>
            <Album src={`/img/album-${props.src}.jpg`} alt={props.alt || "Imagem da Música"} />
            <audio onTimeUpdate={(e) => props.onTimeUpdate(Math.trunc(e.target.currentTime))} onEnded={props.onEnded} src={`/songs/${props.src}.mp3`} ></audio>
        </Fragment>
    )
}

export default Song;