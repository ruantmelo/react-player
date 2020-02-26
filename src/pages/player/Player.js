import React, { Component, Fragment } from 'react'

import './player.css'
import getMusic, { getAllMusics, getPlaylistLength } from '../../Musicas';
import Playlist from '../../components/Playlist';
import ControlsBar from '../../components/ControlsBar'
import Song from '../../components/Song'


class Player extends Component {
    constructor(props) {
        super(props)
        this.stateInicial = {
            musicID: 0,
            paused: true,
            currentTime: 0,
        }
        this.state = { ...this.stateInicial };
    }


    handleCurrentTime = (value) => {
        this.setState({ currentTime: value })
    }

    handlePlaylist = (id) => {
        this.setState({
            musicID: id,
            paused: true,
        })

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

    toggle = () => {
        const audio = document.querySelector('audio')
        if (this.state.paused) {
            audio.play()
            this.setState({
                paused: false
            })
        }
        else {
            audio.pause()
            this.setState({
                paused: true
            })
        }
    }

    render() {
        return (
            <Fragment>
                <div className="song-control">
                    <Song onTimeUpdate={this.handleCurrentTime} paused={this.state.paused} onEnded={this.changeMusic} {...getMusic(this.state.musicID)} />
                    <ControlsBar currentTime={this.state.currentTime} music={getMusic(this.state.musicID)} previousMusic={() => this.changeMusic('previous')} nextMusic={() => this.changeMusic('next')} paused={this.state.paused} toggle={this.toggle} />
                </div>

                <Playlist PlayerComponent={this} handlePlaylist={this.handlePlaylist} musics={getAllMusics()} />
            </Fragment>

        )
    }

}

export default Player;