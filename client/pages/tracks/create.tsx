import StepWrapper from '@/components/StepWrapper'
import MainLayout from '@/layouts/MainLayout'
import { Button, Grid } from '@mui/material'
import React, { useState } from 'react'

const create = () => {
   const [activeStep, setActiveStep] = useState(0)
   const next = () => {
    if (activeStep !== 2) {
        setActiveStep(prev => prev + 1)
    }
   }
   const back = () => {
     setActiveStep(prev => prev - 1)
   }


  return (
    <MainLayout>
            <StepWrapper activeStep={activeStep}>
                    {activeStep === 0 &&
                      <h1>STEP 0</h1>
                    }
                      {activeStep === 1 &&
                      <h1>STEP 1</h1>
                    }
                      {activeStep === 2 &&
                      <h1>STEP 2</h1>
                    }
            </StepWrapper>
            <Grid container justifyContent={'space-between'}>
              <Button disabled={activeStep === 0}  onClick={back}>Назад</Button>
              <Button onClick={next}>Далее</Button>
            </Grid>
    </MainLayout>
    
  )
}

export default create