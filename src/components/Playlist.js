import React, { useState } from 'react';


const Playlist = props => {
    // eslint-disable-next-line no-unused-vars
    const [musics, setMusics] = useState(props.musics)
    return (
        <div className='playlist'>
            <p>Playlist</p>
            <ul className='lista'>
                {musics.map((value, index) => {
                    return (<li onClick={(e) => {
                        props.handlePlaylist(e.target.getAttribute('data-musicid'));
                    }}
                        className='musica' src={value.src} data-musicid={index} key={index} name={value.name} artist={value.artist} id={'music-' + index}>{value.name + ' - ' + value.artist}</li>)
                })}

            </ul>
        </div>

    )
}


export default Playlist;
