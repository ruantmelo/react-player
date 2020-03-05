import React, { useState } from 'react';
import List from '@material-ui/core/List';
import ListItemText from '@material-ui/core/ListItemText';
import { ListItem, makeStyles } from '@material-ui/core';
import Container from '@material-ui/core/Container';

import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import ExpandLessRoundedIcon from '@material-ui/icons/ExpandLessRounded';
import ExpandMoreRoundedIcon from '@material-ui/icons/ExpandMoreRounded';

import TimeHelper from '../utils/TimeHelper'

const listItemStyles = makeStyles({
    root: {
        borderRadius: '5px'
    },
    selected: {
        backgroundColor: '#1c1c16 !important',
    },
    primary: {
        color: 'white',
    },
    secondary: {
        color: '#52524f',

    }
})

const listStyles = makeStyles({
    root: {
        maxHeight: '150px',
        display: 'block',
        overflowY: 'scroll',
        transition: '2s all ease'
    }
})

const listDenseStyles = makeStyles({
    root: {
        display: 'none',
        overflowY: 'scroll',
        transition: '2s all ease',
        maxHeight: '0',

    }
})


const buttonStyles = makeStyles({
    root: {
        background: 'transparent',
        margin: 'auto auto',
        display: 'block',
        width: '100%',
        textAlign: 'center',
        // alignItems: 'middle',
        color: 'white',
        // '&:focus': {
        //     background: 'inherit'
        // }
        '&:focus': {
            background: 'inherit'
        },
        '& ': {
            display: 'inline-block'
        }
    },
    // label: {
    //     display: 'inline'
    // },
    // endIcon: {
    //     display
    // }
})


const Playlist = props => {
    const listItemClasses = listItemStyles()
    const listClasses = listStyles()
    const listDenseClasses = listDenseStyles()
    const buttonClasses = buttonStyles()
    // eslint-disable-next-line no-unused-vars
    const [musics, setMusics] = useState(props.musics)
    const [hidden, setHidden] = useState(false)



    const toggle = () => {
        hidden? setHidden(false) : setHidden(true);
    }
    return (
        <Container maxWidth='sm' className='playlist'>
            <Button onClick = {toggle} classes={{ root: buttonClasses.root }} endIcon={hidden? <ExpandLessRoundedIcon/> : <ExpandMoreRoundedIcon />}>Playlist</Button>
            
                <List classes={{ root: hidden? listClasses.root: listDenseClasses.root }} >
                    {musics.map((music, index) => {
                        return (
                            <ListItem classes={{ root: listItemClasses.root , selected: listItemClasses.selected }} selected={index === props.musicSelected}
                                style={{ cursor: 'pointer' }} onClick={(e) => {
                                    props.handlePlaylist(index)

                                }}
                                key={index} music-id={index} src={music.src} >
                                <ListItemText music-id={index} classes={{ primary: listItemClasses.primary, secondary: listItemClasses.secondary }}
                                    primary={music.name} secondary={`Artista: ${music.artist}  |  Duração: ${TimeHelper.format(music.duration)}`} />
                            </ListItem>)
                    })}
                </List>
    
           
        </Container>
    )
}



export default Playlist;
