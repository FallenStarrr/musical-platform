import MainLayout from '@/layouts/MainLayout'
import { Box, Button, Card, Grid } from '@mui/material'
import { useRouter } from 'next/router'
import React from 'react'

const create = () => {
    const router = useRouter()
  return (
    <MainLayout>
        <Grid container justifyContent={'center'}>
              <Card style={{width: 900}}>
                    <Box p={3}>
                        <Grid container justifyContent={'space-between'}>
                            <h1>Список треков</h1>
                            <Button onClick={() => router.push('tracks/create')}>Загрузить</Button>
                        </Grid>
                    </Box>        
              </Card>  
        </Grid>
    </MainLayout>
  )
}

export default create