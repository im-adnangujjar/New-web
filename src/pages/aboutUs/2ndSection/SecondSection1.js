import { Grid } from '@mui/material';
import React from 'react';
import './SecondSection1.css'
import CircleIcon from '@mui/icons-material/Circle';
export default function SecondSection1() {
  return(
    <div>
<h1 className="headings4" >The process we follow</h1>
<Grid container spacing={2}>
<Grid item lg={3}><div><CircleIcon className='color1'/></div>
<div className='bor1'></div><p className='paragraphs7'>Planning</p><p className='paragraphs8'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr.</p>
</Grid>
<Grid item lg={3}><div><CircleIcon className='color1'/></div>
<div className='bor1'></div><p className='paragraphs7'>Conception</p><p className='paragraphs8'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr.</p>
</Grid>
<Grid item lg={3}><div><CircleIcon className='color1'/></div>
<div className='bor1'></div><p className='paragraphs7'>Design</p><p className='paragraphs8'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr.</p>
</Grid>
<Grid item lg={3}><div><CircleIcon className='color1'/></div>
<div className='bor1'></div>
<p className='paragraphs7'>Development</p>
<p className='paragraphs8'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr.</p>
</Grid>
</Grid>
    </div>   
  ) ;
}
