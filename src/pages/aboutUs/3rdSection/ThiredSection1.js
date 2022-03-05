import { Grid } from '@mui/material';
import React from 'react';
import './ThiredSection1.css'
export default function ThiredSection1() {
  return (
    <div className='mainDiv1'>
      <Grid container spacing={2}>
        <Grid item lg={6}>
          <h1 className='headings5'>Our Mission </h1>
          <p className='paragraphs9'>Inspire, Innovate, Share</p>
          <p className='paragraphs10'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
         
        </Grid>
        <Grid item lg={6}>
          <img src='assets/image4.png'style={{margin:"100px 50px 20px 100px"}} />
        </Grid>
      </Grid>
      <Grid container spacing={2}>
      <Grid item lg={6}>
      <div>
            <img src='assets/image5.png' style={{ width: "100%",margin:"100px 50px 20px 50px" }} />
          </div>
      </Grid>
    <Grid item lg={6}>
    <h1 className='headings5'>Our Mission </h1>
          <p className='paragraphs9'>Laser focus</p>
          <p className='paragraphs10'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
    </Grid>
      </Grid>
    </div>
  );
}
