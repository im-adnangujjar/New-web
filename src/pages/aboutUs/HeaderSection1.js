import { Grid } from '@mui/material';
import React from 'react';
import './HeaderSection1.css'
export default function HeaderSection1() {
  return (
  <div>
  
<Grid container spacing={2} >
<Grid item lg={6}>
    <h1 className='headings2'>About us</h1>
    <p className='paragraphs3'>Our designs solve problems</p>
    <p className='paragraphs4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
</Grid>
<Grid item lg={6}>
<div style={{margin:"100px 0px 100px 20px"}}>
<img src='assets/image2.png' />
</div>
</Grid>
</Grid>
  </div>
  );
}
