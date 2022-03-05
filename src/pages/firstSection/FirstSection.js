import { Grid } from '@mui/material';
import React from 'react';
import './FirstSection.css'
export default function FirstSection() {
    return (
        <div className='mainContainer1'>
            <Grid container spacing={2} >
                <Grid item lg={6}>
                    <h2 className='heading1'>How we work</h2>
                    <p className='paragraph1'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                    <p className='paragraph2'>Get in touch with us</p>
                </Grid>
                <Grid item lg={6}>
                    <div className='display'>
                        <div>
                            <h1 className='heading2'>01</h1>
                            <h1 className='heading3'>Strategy</h1>
                            <p className='paragraph3'>Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam .</p></div>
                        <div>
                            <h1 className='heading2'>02</h1>
                            <h1 className='heading3'>Wireframing</h1>
                            <p  className='paragraph3'>Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam .</p>
                        </div>
                    </div>
                    <div className='display'>
                        <div>
                        <h1 className='heading2'>03</h1>
                            <h1 className='heading3'>Design</h1>
                            <p  className='paragraph3'>Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam .</p>
                        </div>
                        <div>
                        <h1 className='heading2'>04</h1>
                            <h1 className='heading3'>Development</h1>
                            <p  className='paragraph3'>Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam .</p>
                        </div>
                    </div>
                </Grid>
            </Grid>
        </div>
    );
}
