import { Grid } from '@mui/material';
import React from 'react';
import './FirstSection1.css'
export default function FirstSection1() {
  return (
  <div className='mainDiv'>
  <Grid container spacing={2}>
      <Grid item lg={6}>
      <h1 className='headings3'>Who we are</h1>
<p className='paragraphs5'>Goal focussed</p>
<p className='paragraphs6'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      </Grid>
      <Grid item lg={6}>
          <p className='paragraphs5'style={{marginTop:"60px"}} >Continuous improvement</p>
          <p className="paragraphs6">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        
      </Grid>
  </Grid>

 <div>  <img src='assets/image3.png' style={{width:"100%"}}/> </div>
  </div>
  );
}
