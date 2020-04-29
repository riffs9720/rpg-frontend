import React, { Component } from 'react';
import soundfile from '../../assets/Audios/abertura.mp3'
import Sound from 'react-sound'
export default class Introducao extends Component {
render() {
 return (
   <Sound
   url={soundfile}
   playStatus={Sound.status.PLAYING}
   onLoading={this.handleSongLoading}
   onPlaying={this.handleSongPlaying}
   onFinishedPlaying={this.handleSongFinishedPlaying}
   autoLoad={true}
   loop={true}
   volume={50}
   />
  );
 }
}