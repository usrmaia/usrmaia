'use client';

import Image from 'next/image';
import { useState } from 'react';
import { Box, Card, CardActions, CardContent, CardMedia, Chip, IconButton, Link, MobileStepper, Paper, Typography } from '@mui/material';
import { KeyboardArrowRight, KeyboardArrowLeft } from '@mui/icons-material';

export interface ICardPotfolioProps {
  imagesPath: string[];
  startDate: string;
  endDate: string;
  title: string;
  description: string;
  buttons: { name: string; href: string }[];
  href: string;
}

const ImageStyle = {
  width: '100%',
  height: '100%',
  aspectRatio: '16/9'
};

export const CardPotfolio = (props: ICardPotfolioProps) => {
  const [activeStep, setActiveStep] = useState(0);
  const maxSteps = props.imagesPath.length;

  const handleNext = () => {
    setActiveStep((step) => step === maxSteps - 1 ? step = 0 : step + 1);
  };

  const handleBack = () => {
    setActiveStep((step) => step === 0 ? step = maxSteps - 1 : step - 1);
  };

  const Carousel = () => (
    <CardMedia sx={{ position: 'relative' }}>
      <Link href={props.href} target='_blank' rel="noopener">
        <Image src={props.imagesPath[activeStep]} alt={`Step ${activeStep}`} width={1024} height={768} style={ImageStyle} />
      </Link>
      <MobileStepper variant='dots' steps={maxSteps} position="static" activeStep={activeStep} sx={{ background: 'transparent' }}
        nextButton={
          <IconButton size="small" onClick={handleNext}>
            <KeyboardArrowRight />
          </IconButton>
        }
        backButton={
          <IconButton size="small" onClick={handleBack}>
            <KeyboardArrowLeft />
          </IconButton>
        }
      />
    </CardMedia>
  );

  const Details = () => (
    <Box display='flex' flexDirection='column' gap={0}>
      <Typography variant='caption'>{props.startDate} • {props.endDate}</Typography>
      <Link href={props.href} target='_blank' rel="noopener" underline='none'>
        <Typography variant="h6">{props.title}</Typography>
      </Link>
      <Typography variant='body2'>{props.description}</Typography>
    </Box>
  );

  const Chips = () => (
    <Box display='flex' flexDirection='row' flexWrap='wrap' gap={2}>
      {props.buttons.map((button, index) => (
        <Link key={index} href={button.href} target='_blank' rel="noopener">
          <Chip label={button.name} color="primary" clickable />
        </Link>
      ))}
    </Box>
  );

  return (
    <Card>
      <Paper>
        <Carousel />
        <CardContent>
          <Box display='flex' flexDirection='column' gap={2}>
            <Details />
            <Chips />
          </Box>
        </CardContent>
        <CardActions></CardActions>
      </Paper>
    </Card>
  );
};