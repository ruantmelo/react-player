import React, { Component, Fragment, useState } from 'react';
import Album from '../Album';
import Typography from '@material-ui/core/Typography';
import ControlsBar from './ControlsBar';

export class Song extends Component {
    constructor(props) {
        super(props);
        this.state = {
            music: {
                name: props.music.name,
                src: props.music.src,
                artist: props.music.src,
                duration: props.music.duration,
            },
            currentTime: 0,
            paused: true,
        };

        console.log(this.state.music)
        this.changeMusic = props.changeMusic;
        // this.onTimeUpdate = props.onTimeUpdate;
        // onTimeUpdate={(e) => this.onTimeUpdate(Math.trunc(e.target.currentTime))}
    }

    static getDerivedStateFromProps(props, state) {
        // Sempre que o usuário atual mudar,
        // Redefina quaisquer partes do estado que estejam vinculadas a esse usuário.
        // Neste exemplo simples, seria apenas o email.
        if (props.music !== state.music) {
            return {
                music: props.music,
                paused: true,
            };
        }
        return null;
    }

    handleCurrentTime = (value) => {
        this.setState({ currentTime: value })
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
        const { name, src, artist, duration } = this.state.music;
        console.log(duration)
        return (
            <Fragment>
                <Typography align='center' variant='h6'>{`${name} - ${artist}`}</Typography>
                <Album src={`/img/album-${src}.jpg`} alt={"Imagem da Música"} />
                <audio onTimeUpdate={(e) => { this.handleCurrentTime(Math.trunc(e.target.currentTime)) }} onEnded={() => { this.changeMusic('next') }} src={`/songs/${src}.mp3`} ></audio>
                <ControlsBar currentTime={this.state.currentTime} paused={this.state.paused} changeMusic={this.changeMusic} duration={duration} toggle={this.toggle} />
            </Fragment>
        )
    }
}



// const Song = props => {
//     const [currentTime, setCurrentTime] = useState(0);
//     const [paused, setPaused] = useState(true);


//     const handleCurrentTime = (value) => {
//         setCurrentTime(value)
//     }

//     const toggle = () => {
//         const audio = document.querySelector('audio')
//         if (paused) {
//             audio.play()
//             setPaused(false);
//         }
//         else {
//             audio.pause()
//             setPaused(true);
//         }
//     }
//     // if (paused != props.paused) {
//     //     setPaused(props.paused)
//     // }

//     const { name, src, artist, duration } = props.music;
//     const changeMusic = props.changeMusic

//     return (
//         <Fragment>
//             <Typography align='center' variant='h6'>{`${name} - ${artist}`}</Typography>
//             <Album src={`/img/album-${src}.jpg`} alt={"Imagem da Música"} />
//             <audio onTimeUpdate={(e) => { handleCurrentTime(Math.trunc(e.target.currentTime)) }} onEnded={() => { changeMusic('next') }} src={`/songs/${src}.mp3`} ></audio>
//             <ControlsBar currentTime={currentTime} paused={paused} changeMusic={changeMusic} duration={duration} toggle={toggle} />
//         </Fragment>
//     )
// }



export default Song;