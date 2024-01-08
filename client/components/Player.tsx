import { IconButton } from '@mui/material'
import React, { useEffect } from 'react'
import styles from '../styles/Player.module.scss'
import {Pause, PlayArrow } from '@mui/icons-material';
import {ITrack} from '../types/track'
import TrackProgress from './TrackProgress';
import Grid from '@mui/material/Grid';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import { useTypedSelector } from '@/hooks/useTypedSelector';
import { useActions } from '@/hooks/useActions';
let audio: HTMLAudioElement
const Player = () => {
  const track : ITrack = {_id: '1', name: 'Трек 1', artist: 'Исполнитель 1', text: 'Текст', listens: 5, audio: 'http://localhost:5000/audio/mixkit-big-volcano-lava-bubble-burst-2448.wav', picture: 'http://localhost:5000/picture/70e029ec-b5a3-4822-81f3-67cb5743a7db.jpg', comments: []}
  const {pause, volume, active, duration, currentTime} = useTypedSelector(state => state.player)
  const {pauseTrack, playTrack, setVolume, setCurrentTime, setDuration, setActiveTrack} = useActions()

  useEffect( () => {
      if (!audio) {
        audio = new Audio()
        audio.src = track.audio
        audio.volume = volume / 100
      }
  }, [])


  const play = () => {
      if (pause) {
          playTrack()
          audio.play()
      } else {
         pauseTrack()
         audio.pause()
      }
  }

  const changeVolume = (e: React.ChangeEvent<HTMLInputElement>) => {
        audio.volume = Number(e.target.value) / 100
        setVolume(Number(e.target.value))
  }

  return (
    <div className={styles.player}>
              <IconButton onClick={play}>
                {pause 
                    ? <Pause/>

                    :
                      <PlayArrow/>  
                    }
            </IconButton>
            <Grid container direction={'column'} style={{width: 200, margin: '0 20px'}}>
                <div>{track.name}</div>
                <div style={{fontSize: 12, color: 'gray'}}>{track.artist}</div>
            </Grid>
            <TrackProgress left={0} right={100} onChange={(e) =>({}) }/>
            <VolumeUpIcon style={{marginLeft: 'auto'}}/>
            <TrackProgress left={volume} right={100} onChange={changeVolume}/>

    </div>
  )
}

export default Player