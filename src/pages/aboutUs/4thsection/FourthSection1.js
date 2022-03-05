import { Grid } from '@mui/material';
import React from 'react';
import './FourthSection1.css'
export default function FourthSection1() {
  return (
    <div>
      <h1 className='headings6'>The benefits of working with us</h1>
      <Grid container spacing={6}>
        <Grid item lg={4}>
          <div className='bg'>
            <div className='ico'>
              <img src="assets/icon (3).png" />
            </div>
            <p className='paragraphs11'>Customize with ease</p>
            <p className='paragraphs12'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim.</p>
          </div></Grid>
        <Grid item lg={4}>
          <div className='bg'>
            <div className='ico'>
              <img src="assets/icon (2).png" />
            </div>
            <p className='paragraphs11'>Perfectly Responsive</p>
            <p className='paragraphs12'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim.</p>
          </div></Grid>
        <Grid item lg={4}>
          <div className='bg'>
            <div className='ico'>
              <img src="assets/icon (1).png" />
            </div>
            <p className='paragraphs11'>Friendly Support</p>
            <p className='paragraphs12'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim.</p>
          </div></Grid>
      </Grid>
      {/* <Grid container spacing={2}>
        <Grid item lg={6}> */}

        {/* </Grid>
        <Grid item lg={6}>

        </Grid>
      </Grid> */}
      <div className='disp1'>
      <div>
       <h1>100.000+</h1>
      <p>Finsweet Users</p>
      </div>
      <div><img src="assets/Logo 1.png"/></div>
      <div><img src="assets/Logo 2.png"/></div>
      <div><img src="assets/Logo 3.png"/></div>
      <div><img src="assets/Logo 4.png"/></div>
      </div>

    </div>

  );
} 
