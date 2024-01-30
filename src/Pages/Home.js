import React, {useState} from 'react';
import { Box } from '@mui/material'

import Exercises from '../components/Exercises';
import SearchExercise from '../components/SearchExercise';
import HeroBanner from '../components/HeroBanner';

const Home = () => {
  return (
    <Box>
      <HeroBanner/>
      <SearchExercise/>
      <Exercises/>
    </Box>
  )
}

export default Home
