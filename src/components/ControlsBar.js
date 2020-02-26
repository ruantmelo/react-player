import React from 'react'
import TimeHelper from '../utils/TimeHelper'



const ControlsBar = props => {
    const icons = {
        paused: "play_arrow",
        playing: "pause"
    }


    return (
        <div className="control-bar">

            <span className="current-time">{TimeHelper.format(props.currentTime)}</span> <span className="full-time">{props.music.time}</span>
            <div className="controlls">
                <button onClick={props.previousMusic} className='btn-small btn-previous waves-effect waves-yellow '><i className="material-icons">skip_previous</i></button>
                <button onClick={props.toggle}
                    className={props.status + " btn-toggle btn-large " + (!props.paused ? 'pulse btn-floating' : '')}>
                    <i className="large material-icons ">{!props.paused ? icons.playing : icons.paused}</i>
                </button>
                <button onClick={props.nextMusic} className='btn-small btn-next waves-effect waves-yellow ' ><i className="material-icons">skip_next</i></button>
            </div>


        </div>

    )
}


export default ControlsBar;