import React, { useState } from 'react';
import List from '@material-ui/core/List';
import ListItemText from '@material-ui/core/ListItemText';
import { ListItem, makeStyles } from '@material-ui/core';
import Container from '@material-ui/core/Container';

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
        maxHeight: '100px',
        overflowY: 'scroll'
    }
})


const Playlist = props => {
    const listItemClasses = listItemStyles()
    const listClasses = listStyles()
    // eslint-disable-next-line no-unused-vars
    const [musics, setMusics] = useState(props.musics)
    return (
        <Container maxWidth='sm' className='playlist'>
            <List classes={{ root: listClasses.root }} >
                {musics.map((music, index) => {
                    return (
                        <ListItem classes={{ root: listItemClasses.root, selected: listItemClasses.selected }} selected={index === props.musicSelected}
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
