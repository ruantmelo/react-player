import React, { Component, Fragment } from 'react'

import './player.css'
import getMusic, { getAllMusics, getPlaylistLength } from '../../Musicas';
import Playlist from '../../components/Playlist';
import Album from '../../components/Album'
import TimeHelper from '../../utils/TimeHelper';


const Song = props => {
    return (
        <Fragment>
            <p className="playing-now center-align"><span><i className="material-icons ">music_note</i> Playing now</span></p>
            <p>{`${props.name} - ${props.artist}`}</p>
            <Album src={`/img/album-${props.src}.jpg`} alt={props.alt || "Imagem da Música"} />
            <audio onEnded={props.onEnded} src={`/songs/${props.src}.mp3`} ></audio>
        </Fragment>
    )
}


const ControlsBar = props => {
    const icons = {
        paused: "play_arrow",
        playing: "pause"
    }


    return (
        <div className="control-bar">

            <span className="current-time">00:00</span> <span className="full-time">{props.music.time}</span>
            <div className="controlls">
                <button onClick={props.previousMusic} className='btn-small btn-previous waves-effect waves-yellow '><i className="material-icons">skip_previous</i></button>
                <button onClick={props.toggle}
                    className={props.status + " btn-toggle btn-large " + (props.status === 'playing' ? 'pulse btn-floating' : '')}>
                    <i className="large material-icons ">{icons[props.status]}</i>
                </button>
                <button onClick={props.nextMusic} className='btn-small btn-next waves-effect waves-yellow ' ><i className="material-icons">skip_next</i></button>
            </div>


        </div>

    )
}


class Player extends Component {
    constructor(props) {
        super(props)
        this.stateInicial = {
            musicID: 0,
            status: 'paused'
        }
        this.state = { ...this.stateInicial };
    }


    componentDidMount() {
        document.querySelector('audio').ontimeupdate = (e) => {
            this.handleCurrentTime(Math.trunc(e.target.currentTime))
        }
    }

    handleCurrentTime = (value) => {
        document.querySelector('.current-time').textContent = TimeHelper.format(value)

    }

    handlePlaylist = (id) => {
        this.setState({
            musicID: id,
            status: 'paused'
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

        document.querySelector('audio').pause();

        this.setState({
            musicID: id,
            status: 'paused'
        })
    }

    toggle = () => {
        const audio = document.querySelector("audio");
        const button = document.querySelector('.btn-toggle');
        this.handleCurrentTime()
        button.classList.toggle('btn-floating')

        if (audio.paused) {
            audio.play();
            this.setState({
                status: 'playing'
            })
        }
        else {
            audio.pause();
            this.setState({
                status: 'paused'
            })
        }
    }

    render() {
        return (
            <Fragment>
                <div className="song-control">
                    <Song onEnded={this.changeMusic} {...getMusic(this.state.musicID)} />
                    <ControlsBar music={getMusic(this.state.musicID)} previousMusic={() => this.changeMusic('previous')} nextMusic={() => this.changeMusic('next')} status={this.state.status} toggle={this.toggle} />
                </div>

                <Playlist PlayerComponent={this} handlePlaylist={this.handlePlaylist} musics={getAllMusics()} />
            </Fragment>

        )
    }

}

export default Player;