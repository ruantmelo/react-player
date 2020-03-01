import React, { useState } from 'react'
import TimeHelper from '../../utils/TimeHelper'
import IconButton from '@material-ui/core/IconButton';
import Slider from '../Slider'

import SkipNextRoundedIcon from '@material-ui/icons/SkipNextRounded';
import SkipPreviousRoundedIcon from '@material-ui/icons/SkipPreviousRounded';
import PlayArrowRoundedIcon from '@material-ui/icons/PlayArrowRounded';
import PauseRoundedIcon from '@material-ui/icons/PauseRounded';


import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';



const useStyles = makeStyles({
    root: {
        color: 'white',
        '&:focus': {
            background: 'inherit'
        }
    }
})


const ControlsBar = props => {
    const classes = useStyles();
    const [currentTime, setCurrentTime] = useState(0);
    const duration = props.duration;

    return (
        <Grid container>
            <audio onTimeUpdate={(e) => {
                setCurrentTime(e.target.currentTime)
            }
            }
                onEnded={() => { props.changeMusic('next') }} src={`/songs/${props.src}.mp3`} />
            <Slider duration={duration} currentTime={currentTime} onChangeCommitted={(value) => {
                document.querySelector('audio').currentTime = value * duration / 100;
            }} />
            <Grid style={{ color: 'white' }} container direction="row" justify="space-between" alignItems="center">
                <Grid item>
                    <span style={{ padding: '3px', borderRadius: '5px', backgroundColor: '#0d0d0c' }}>{TimeHelper.format(Math.trunc(currentTime))}</span>
                </Grid>
                <Grid item>
                    <span style={{ padding: '3px', borderRadius: '5px', backgroundColor: '#0d0d0c' }}>{TimeHelper.format(duration)}</span>
                </Grid>
            </Grid>

            <Grid container direction="row" justify="center" alignItems="center">
                <Grid item >
                    <IconButton className={classes.root} onClick={() => { props.changeMusic('previous') }}><SkipPreviousRoundedIcon /></IconButton>
                </Grid>

                <Grid item >
                    <IconButton className={classes.root} onClick={props.toggle} >{!props.paused ? <PauseRoundedIcon /> : <PlayArrowRoundedIcon />}</IconButton>
                </Grid>

                <Grid item >
                    <IconButton className={classes.root} onClick={() => { props.changeMusic('next') }}><SkipNextRoundedIcon /></IconButton>
                </Grid>



            </Grid>
        </Grid>

    )
}


export default ControlsBar;