import { Container, Stepper } from '@mui/material';
import React, { ReactNode } from 'react'

interface StepWrapperProps {
    activeStep: number;
    children: ReactNode
}

const StepWrapper: React.FC<StepWrapperProps> = ({activeStep, children}) => {
  return (
    <Container>
        <Stepper activeStep={activeStep}>

        </Stepper>
    </Container>
  )
}

export default StepWrapper