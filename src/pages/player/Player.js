import React, { Component, Fragment } from 'react'

import './player.css'
import getMusic, { getAllMusics, getPlaylistLength } from '../../Musicas';
import Playlist from '../../components/Playlist';
import Song from '../../components/Song/Song'
import Container from '@material-ui/core/Container';



class Player extends Component {
    constructor(props) {
        super(props)
        this.stateInicial = {
            musicID: 0,
            paused: true,
        }
        this.state = { ...this.stateInicial };
    }

    handlePlaylist = (id) => {
        this.setState({
            musicID: id,
            paused: true,
        })
    }

    changeMusic = (option = 'next') => {
        let id = this.state.musicID;
        console.log(option)
        console.log(id)
        if (option === 'next') {
            console.log('opa')
            if (this.state.musicID < getPlaylistLength() - 1) {
                console.log('somado')
                id += 1
            } else {
                console.log('mamamia')
                id = 0;
            }

        } else {
            if (this.state.musicID > 0) {
                id -= 1
                console.log('merthens')
            }
            else {
                id = 0;
            }

        }

        console.log('final ' + id)
        this.setState({
            musicID: id,
            paused: true,
        })
    }

    render() {
        console.log(this.state)
        return (
            < Fragment >
                <Container style={{ maxWidth: '500px' }}>
                    <Song paused={this.state.paused} music={getMusic(this.state.musicID)} changeMusic={this.changeMusic} />
                    {/* <Song onTimeUpdate={this.handleCurrentTime} paused={this.state.paused} onEnded={this.changeMusic} {...getMusic(this.state.musicID)} />
                    <ControlsBar currentTime={this.state.currentTime} music={getMusic(this.state.musicID)} previousMusic={() => this.changeMusic('previous')} nextMusic={() => this.changeMusic('next')} paused={this.state.paused} toggle={this.toggle} /> */}
                    <Playlist musicSelected={this.state.musicID} handlePlaylist={this.handlePlaylist} musics={getAllMusics()} />
                </Container>


            </Fragment >

        )
    }

}

export default Player;