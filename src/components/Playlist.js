import React, { Component, useState } from 'react';
import List from '@material-ui/core/List';
import ListItemText from '@material-ui/core/ListItemText';
import { ListItem, makeStyles } from '@material-ui/core';
import Container from '@material-ui/core/Container';


const useStyles = makeStyles({
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


const Playlist = props => {
    const classes = useStyles()
    // eslint-disable-next-line no-unused-vars
    const [musics, setMusics] = useState(props.musics)
    return (
        <Container maxWidth='sm' className='playlist'>
            <List >
                {musics.map((music, index) => {
                    return (
                        <ListItem classes={{ root: classes.root, selected: classes.selected }} selected={index === props.musicSelected}
                            style={{ cursor: 'pointer' }} onClick={(e) => {
                                props.handlePlaylist(index)

                            }}
                            key={index} music-id={index} src={music.src} >
                            <ListItemText music-id={index} classes={{ primary: classes.primary, secondary: classes.secondary }}
                                primary={music.name} secondary={`Artista: ${music.artist}  |  Duração: ${music.duration}`} />
                        </ListItem>)
                })}
            </List>
        </Container>
    )
}



export default Playlist;
