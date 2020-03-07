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
        }
        this.state = { ...this.stateInicial };
    }

    handlePlaylist = (id) => {
        this.setState({
            musicID: id,
        })
    }

    componentDidMount() {
        const music = getMusic(this.state.musicID)
        document.title = `Player | ${music.name}`
    }

    componentDidUpdate() {
        const music = getMusic(this.state.musicID)
        document.title = `Player | ${music.name}`
    }

    changeMusic = (option = 'next') => {
        let id = this.state.musicID;
        if (option === 'next') {
            if (this.state.musicID < getPlaylistLength() - 1) {
                id += 1
            } else {
                id = 0;
            }

        } else {
            if (this.state.musicID > 0) {
                id -= 1
            }
            else {
                id = 0;
            }

        }

        this.setState({
            musicID: id,
            paused: true,
        })
    }

    render() {
        return (
            < Fragment >
                <Container style={{ boxShadow: '0px 1px 0px 2px gray', maxWidth: '400px', borderRadius: '5px', paddingTop: '1em' }}>
                    <Song music={getMusic(this.state.musicID)} changeMusic={this.changeMusic} />
                    {/* <Song onTimeUpdate={this.handleCurrentTime} paused={this.state.paused} onEnded={this.changeMusic} {...getMusic(this.state.musicID)} />
                    <ControlsBar currentTime={this.state.currentTime} music={getMusic(this.state.musicID)} previousMusic={() => this.changeMusic('previous')} nextMusic={() => this.changeMusic('next')} paused={this.state.paused} toggle={this.toggle} /> */}
                    <Playlist musicSelected={this.state.musicID} handlePlaylist={this.handlePlaylist} musics={getAllMusics()} />
                </Container>


            </Fragment >

        )
    }

}

export default Player;