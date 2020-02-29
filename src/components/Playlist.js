import React, { useState } from 'react';
import List from '@material-ui/core/List';
import ListItemText from '@material-ui/core/ListItemText';
import { Typography, ListItem, makeStyles } from '@material-ui/core';
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
    const [selected, setSelected] = useState(0);
    return (
        <Container maxWidth='sm' className='playlist'>
            <List >
                {musics.map((value, index) => {
                    return (
                        <ListItem classes={{ root: classes.root, selected: classes.selected }} selected={index === selected} style={{ cursor: 'pointer' }} onClick={(e) => {
                            props.handlePlaylist(index)
                            setSelected(index)
                        }}
                            key={index} music-id={index} src={value.src} >
                            <ListItemText music-id={index} classes={{ primary: classes.primary, secondary: classes.secondary }}
                                primary={value.name} secondary={`Artista: ${value.artist}  |  Duração: ${value.time}`} />
                        </ListItem>)
                })}
            </List>
        </Container>
    )
}


// <div className='playlist'>
//     <ul className='lista'>
//         {musics.map((value, index) => {
//             return (<li onClick={(e) => {
//                 props.handlePlaylist(e.target.getAttribute('data-musicid'));
//             }}
//                 className='musica' src={value.src} data-musicid={index} key={index} name={value.name} artist={value.artist} id={'music-' + index}>{value.name + ' - ' + value.artist}</li>)
//         })}

//     </ul>
// </div>


export default Playlist;
