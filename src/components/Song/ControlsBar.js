import React, { useState, useEffect, Fragment } from 'react'
import TimeHelper from '../../utils/TimeHelper'
import IconButton from '@material-ui/core/IconButton';
import Slider, { StyledSlide } from '../Slider';

// import Tooltip from '@material-ui/core/Tooltip';

// import PropTypes from 'prop-types';
import SkipNextRoundedIcon from '@material-ui/icons/SkipNextRounded';
import SkipPreviousRoundedIcon from '@material-ui/icons/SkipPreviousRounded';
import PlayArrowRoundedIcon from '@material-ui/icons/PlayArrowRounded';
import PauseRoundedIcon from '@material-ui/icons/PauseRounded';

import MoreHorizRoundedIcon from '@material-ui/icons/MoreHorizRounded';


import VolumeDownRoundedIcon from '@material-ui/icons/VolumeDownRounded';
import VolumeMuteRoundedIcon from '@material-ui/icons/VolumeMuteRounded';
import VolumeOffRoundedIcon from '@material-ui/icons/VolumeOffRounded';
import VolumeUpRoundedIcon from '@material-ui/icons/VolumeUpRounded';


import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';



const useStyles = makeStyles({
    root: {
        color: 'white',
        '&:focus': {
            background: 'inherit'
        },

        '&:focus ~ .volumeBar': {
            display: 'block'
        },
    },

})

// function ValueLabelComponent(props) {
//     const { children, open, value } = props;

//     return (
//         <Tooltip open={open} enterTouchDelay={0} placement="top" title={value}>
//             {children}
//         </Tooltip>
//     );
// }

// ValueLabelComponent.propTypes = {
//     children: PropTypes.element.isRequired,
//     open: PropTypes.bool.isRequired,
//     value: PropTypes.number.isRequired,
// };


const VolumeSlider = props => {
    return (
        <div className='volumeBar'>

            <span style={{ display: 'block', textAlign: 'center', fontSize: '14px', padding: '3px', borderRadius: '5px', backgroundColor: '#2e2a2a' }}>{Math.trunc(props.volume * 100)}</span>

            <StyledSlide style={{ height: '70px', marginTop: '10px', }} value={props.volume * 100}
                defaultValue={100} onChange={(e, val) => { props.handleVolume(val) }} orientation='vertical' />

        </div>
    )
}


const Controls = props => {
    const classes = useStyles();
    const { volume, fontSize, muted } = props;
    let VolumeButton;

    if (muted) {
        VolumeButton = <VolumeOffRoundedIcon fontSize={fontSize} />
    }
    else if (volume <= 0) {
        VolumeButton = <VolumeMuteRoundedIcon fontSize={fontSize} />

    } else if (volume <= 0.4) {
        VolumeButton = <VolumeDownRoundedIcon fontSize={fontSize} />

    }
    else {
        VolumeButton = <VolumeUpRoundedIcon fontSize={fontSize} />
    }

    return (
        <Fragment>
            <Grid container direction='row' justify='space-between'>
                <Grid style={{ position: 'relative' }} item>
                    <IconButton className={classes.root} style={{ color: 'gray' }}>
                        {VolumeButton}

                    </IconButton>
                    <VolumeSlider handleVolume={props.handleVolume} volume={props.volume} />
                </Grid>

                <Grid item >
                    <Grid container direction="row" justify="center" alignItems="center">

                        <Grid item >
                            <IconButton aria-label='anterior' className={classes.root} onClick={() => { props.changeMusic('previous') }}><SkipPreviousRoundedIcon fontSize={fontSize} /></IconButton>
                        </Grid>

                        <Grid item >
                            <IconButton style={{ border: '1px solid white' }} arial-label={props.paused ? 'tocar' : 'pausar'} className={classes.root} onClick={props.toggle} >{!props.paused ? <PauseRoundedIcon fontSize='large' /> : <PlayArrowRoundedIcon fontSize='large' />}</IconButton>
                        </Grid>

                        <Grid item >
                            <IconButton aria-label='próxima' className={classes.root} onClick={() => { props.changeMusic('next') }}><SkipNextRoundedIcon fontSize={fontSize} /></IconButton>
                        </Grid>

                    </Grid>
                </Grid>

                <Grid item >
                    <IconButton className={classes.root} style={{ color: 'gray' }}>
                        <MoreHorizRoundedIcon />

                    </IconButton>
                </Grid>
            </Grid>



        </Fragment>

    )
}

const ControlsBar = props => {
    const [currentTime, setCurrentTime] = useState(0);
    const [volume, setVolume] = useState(1);
    const [muted, setMuted] = useState(false);
    const duration = props.duration;

    useEffect(() => {
        document.querySelector('audio').volume = volume
    }, [volume]); // Apenas re-execute o efeito quando o count mudar

    const handleVolume = (value) => {
        setVolume(value / 100)
    }

    const handleMute = (value) => {
        setMuted(value)
    }

    return (
        <Grid container>
            <audio onPlay={() => {
                if (props.paused) {
                    props.handleAudio(false)
                }
            }} onPause={() => {
                if (!props.paused) {
                    props.handleAudio(true)
                }
            }

            } onTimeUpdate={(e) => {
                setCurrentTime(e.target.currentTime)
            }
            }
                onEnded={() => { props.changeMusic('next') }} src={`/songs/${props.src}.mp3`} />
            <Grid style={{ color: 'white' }} container direction="row" justify="space-between" alignItems="center">
                <Grid item>
                    <span style={{ fontSize: '14px', padding: '3px', borderRadius: '5px' }}>{TimeHelper.format(Math.trunc(currentTime))}</span>
                </Grid>
                <Grid item>
                    <span style={{ fontSize: '14px', padding: '3px', borderRadius: '5px' }}>{TimeHelper.format(duration)}</span>
                </Grid>
            </Grid>
            <Slider duration={duration} currentTime={currentTime} onChangeCommitted={(value) => {
                document.querySelector('audio').currentTime = value * duration / 100;
                setCurrentTime(value * duration / 100)
            }} />


            <Controls handleVolume={handleVolume} handleMute={handleMute} muted={muted} fontSize={'large'} volume={volume} toggle={props.toggle} changeMusic={props.changeMusic} paused={props.paused} />
        </Grid>

    )
}


export default ControlsBar;