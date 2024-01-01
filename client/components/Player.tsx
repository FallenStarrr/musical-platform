import { IconButton } from '@mui/material'
import React from 'react'
import styles from '../styles/Player.module.scss'
import {Pause, PlayArrow } from '@mui/icons-material';
import {ITrack} from '../types/track'
import TrackProgress from './TrackProgress';
import Grid from '@mui/material/Grid';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';

const Player = () => {
  const track : ITrack = {_id: '1', name: 'Трек 1', artist: 'Исполнитель 1', text: 'Текст', listens: 5, audio: 'http://localhost:5000/audio/mixkit-big-volcano-lava-bubble-burst-2448.wav', picture: 'http://localhost:5000/picture/70e029ec-b5a3-4822-81f3-67cb5743a7db.jpg', comments: []}

  const active = false
  return (
    <div className={styles.player}>
              <IconButton onClick={e => e.stopPropagation()}>
                {active 
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
            <TrackProgress left={0} right={100} onChange={(e) =>({}) }/>

    </div>
  )
}

export default Player