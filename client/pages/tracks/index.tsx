import TrackList from '@/components/TrackList'
import { useActions } from '@/hooks/useActions'
import { useTypedSelector } from '@/hooks/useTypedSelector'
import MainLayout from '@/layouts/MainLayout'
import { ITrack } from '@/types/track'
import { Box, Button, Card, Grid } from '@mui/material'
import { useRouter } from 'next/router'
import React from 'react'


function Index() {
  const router = useRouter()
  const tracks: ITrack[] = [


    {_id: '2', name: 'Трек 2', artist: 'Исполнитель 2', text: 'Текст', listens: 5, audio: 'http://localhost:5000/audio/mixkit-birds-and-snapping-branch-2421.wav', picture: 'http://localhost:5000/picture/animal-after.webp', comments: []},
    {_id: '3', name: 'Трек 3', artist: 'Исполнитель 3', text: 'Текст', listens: 5, audio: 'http://localhost:5000/audio/mixkit-birds-chirping-in-the-jungle-2433.wav', picture: 'http://localhost:5000/picture/rose-729509_640.jpg', comments: []},

  ]
  return (
    <MainLayout>
    <Grid container justifyContent={'center'}>
          <Card style={{width: 900}}>
                <Box p={3}>
                    <Grid container justifyContent={'space-between'}>
                        <h1>Список треков</h1>
                        <Button onClick={() => router.push('/tracks/create')}>
                          Загрузить
                        </Button>
                    </Grid>
                </Box>
                <TrackList tracks={tracks}/>        
          </Card>  
    </Grid>
</MainLayout>
  )
}

export default Index