import React from 'react'
import TimeHelper from '../utils/TimeHelper'
import IconButton from '@material-ui/core/IconButton';

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
    return (
        <Grid container>

            <Grid style = {{color: 'white'}} container direction="row" justify="space-between" alignItems="center">
                <Grid item>
                    <span style = {{padding:'3px',borderRadius: '5px', backgroundColor: '#0d0d0c'}} className="current-time">{TimeHelper.format(props.currentTime)}</span>
                </Grid>
                <Grid item>
                    <span style = {{padding:'3px',borderRadius: '5px', backgroundColor: '#0d0d0c'}} className="full-time">{props.music.time}</span>
                </Grid>
            </Grid>

            <Grid container direction="row" justify="center" alignItems="center">
                <Grid item >
                    <IconButton className={classes.root} onClick={props.previousMusic}><SkipPreviousRoundedIcon /></IconButton>
                </Grid>

                <Grid item >
                    <IconButton className={classes.root} onClick={props.toggle} >{!props.paused ? <PauseRoundedIcon /> : <PlayArrowRoundedIcon />}</IconButton>
                </Grid>

                <Grid item >
                    <IconButton className={classes.root} onClick={props.nextMusic}><SkipNextRoundedIcon /></IconButton>
                </Grid>



            </Grid>
        </Grid>

    )
}


export default ControlsBar;