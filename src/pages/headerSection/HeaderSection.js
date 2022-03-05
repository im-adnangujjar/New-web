import { Grid } from '@mui/material';
import React from 'react';
import Button from '../../commonComponent/button/Button';
import './HeaderSection.css';
function HeaderSection() {
    return (
        <div className='mainContainar'>
            {/* <Row>
                <Col lg={6}>
                    <h1 className='heading'> Building stellar websites for early startups</h1>
                    <p className='paragraph'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                    <Button title='submit' width='100px' height='' />
                </Col>
                <Col lg={6}>
                    <div style={{ margin: "50px 0px", padding: "0px" }}>
                        <img src="assets/Illustration.png" />
                    </div>
                </Col>
            </Row> */}

            <Grid container spacing={2}>
                <Grid item lg={6}>
                    <h1 className='heading'> Building stellar websites for early startups</h1>
                    <p className='paragraph'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                    <Button title='View our work' width='100px' height='60px' />
                </Grid>
                <Grid item lg={6}>
                    <div style={{ margin: "50px 0px" }}>
                        <img src="assets/Illustration.png" />
                    </div>
                </Grid>
            </Grid>
        </div>
    );
}
export default HeaderSection