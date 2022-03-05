import { Grid } from '@mui/material';
import React from 'react';
import './LastSection1.css'
export default function LastSection1() {
    return (
        <div className='mainDiv'>
            <h1 className='headings7'>Meet our team</h1>
            <Grid container spacing={2}>
                <Grid item lg={3}><div style={{ backgroundColor: "white" }}>
                    <img src="assets/image6.png" />
                    <p>John Smith</p>
                    <p>CEO</p>
                </div>
                </Grid>
                <Grid item lg={3}><div style={{ backgroundColor: "white" }}>
                    <img src="assets/image7.png" />
                    <p>Simon Adams</p>
                    <p>CTO</p>
                </div>
                </Grid>
                <Grid item lg={3}><div style={{ backgroundColor: "white" }}>
                    <img src="assets/image8.png" />
                    <p>Paul Jones</p>
                    <p>Design Lead</p>
                </div>
                </Grid>
                <Grid item lg={3}><div style={{ backgroundColor: "white" }}>
                    <img src="assets/image9.png" />
                    <p>Sara Hardin</p>
                    <p>Project Manager</p>
                </div>
                </Grid>
            </Grid>

        </div>
    );
}
