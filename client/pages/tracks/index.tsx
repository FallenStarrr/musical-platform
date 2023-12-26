import MainLayout from '@/layouts/MainLayout'
import { ITrack } from '@/types/track'
import { Box, Button, Card, Grid } from '@mui/material'
import { useRouter } from 'next/router'
import React from 'react'

const index = () => {
  const router = useRouter()
  const tracks: ITrack[] = [
    {_id: '1', name: 'Трек 1', artist: 'Исполнитель 1', text: 'Текст', listens: 5, audio: 'http://localhost:5000/audio/', picture: 'http://localhost:5000/picture/', comments: []},
    {_id: '2', name: 'Трек 2', artist: 'Исполнитель 2', text: 'Текст', listens: 5, audio: 'http://localhost:5000/audio/', picture: 'http://localhost:5000/picture/', comments: []},
    {_id: '3', name: 'Трек 3', artist: 'Исполнитель 3', text: 'Текст', listens: 5, audio: 'http://localhost:5000/audio/', picture: 'http://localhost:5000/picture/', comments: []},

  ]
  return (
    <MainLayout>
    <Grid container justifyContent={'center'}>
          <Card style={{width: 900}}>
                <Box p={3}>
                    <Grid container justifyContent={'space-between'}>
                        <h1>Список треков</h1>
                        <Button onClick={() => router.push('/tracks/create')}>Загрузить</Button>
                    </Grid>
                </Box>        
          </Card>  
    </Grid>
</MainLayout>
  )
}

export default index