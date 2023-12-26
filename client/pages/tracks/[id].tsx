import MainLayout from '@/layouts/MainLayout'
import { ITrack } from '@/types/track'
import { Button, Grid, TextField } from '@mui/material'
import { useRouter } from 'next/router'
import React from 'react'

const TrackPage = () => {
    const router = useRouter()
    const track : ITrack = {_id: '1', name: 'Трек 1', artist: 'Исполнитель 1', text: 'Текст', listens: 5, audio: 'http://localhost:5000/audio/mixkit-big-volcano-lava-bubble-burst-2448.wav', picture: 'http://localhost:5000/picture/70e029ec-b5a3-4822-81f3-67cb5743a7db.jpg', comments: []}

  return (
    <MainLayout>
        <Button onClick={() => router.push('/tracks')}
        variant={'outlined'}
        style={{fontSize: 32}}
        >
            К списку
        </Button>
        <Grid container style={{margin: '20px 0'}}>
            <img src={track.picture} width={200} height={200}/>
            <div style={{marginLeft: 30}}>
                <h1>Название трека - {track.name}</h1>
                <h1> Исполнитель - {track.artist}</h1>
                <h1> Прослушиваний - {track.listens}</h1>
            </div>
        </Grid>
        <h1>Слова в треке</h1>
        <p>{track.text}</p>
        <Grid container>
            <h1>Комментарии</h1>
            <TextField
              label="Ваше имя"
              fullWidth
            />
            <TextField
              label="Комментарий"
              fullWidth
              multiline
              rows={4}
            />
            <Button>Отправить</Button>
        </Grid>   
     </MainLayout>
  )
}

export default TrackPage