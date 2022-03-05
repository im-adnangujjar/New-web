import { Grid } from '@mui/material';
import LabelImportantIcon from '@mui/icons-material/LabelImportant';
import React from 'react';
import './HeaderSection2.css'
import Button from '../../../commonComponent/button/Button';
export default function HeaderSection2() {
    return (
        <div> <p className='paragraphs13'>Our Pricing Plans</p>
            <div className='disp2'>
                <p className='paragraphs14'>When you are ready to go beyond prototyping in Figma, Webflow is ready to help you bring your designs to life — without coding them.</p>
            </div>
            <Grid container spacing={4}>
                <Grid item lg={4}><div className='bg1'>
                    $299 Per Design
                    <p className="paragraphs15">Landing Page </p>
                    <p>When you re ready to go beyond prototyping in Figma, </p>
                    <p ><LabelImportantIcon />All limited links</p>
                    <p><LabelImportantIcon />Own analytics platform</p>
                    <p><LabelImportantIcon />Chat support</p>
                    <p><LabelImportantIcon />Optimize hashtags</p>
                    <p><LabelImportantIcon />Unlimited users</p>
                    <div className="button2">
                        <Button title="Get Started" backgroundColor="yellow" width="200px" />
                    </div>
                </div></Grid>
                <Grid item lg={4}><div className='bg2'>
                    $399 Multi Design
                    <p className="paragraphs15">Website Page </p>
                    <p>When you re ready to go beyond prototyping in Figma, Webflow s ready to help.</p>
                    <p ><LabelImportantIcon />All limited links</p>
                    <p><LabelImportantIcon />Own analytics platform</p>
                    <p><LabelImportantIcon />Chat support</p>
                    <p><LabelImportantIcon />Optimize hashtags</p>
                    <p><LabelImportantIcon />Unlimited users</p>
                    <Button title="Get Started" backgroundColor="Blue" />
                </div></Grid>
                <Grid item lg={4}><div className='bg1'>
                    $499 Per Design
                    <p className="paragraphs15">Complex Project</p>
                    <p>When you re ready to go beyond prototyping in Figma, </p>
                    <p ><LabelImportantIcon />All limited links</p>
                    <p><LabelImportantIcon />Own analytics platform</p>
                    <p><LabelImportantIcon />Chat support</p>
                    <p><LabelImportantIcon />Optimize hashtags</p>
                    <p><LabelImportantIcon />Unlimited users</p>
                    <p><LabelImportantIcon />Assist and Help</p>
                    <Button title="Contact us" backgroundColor="red" />
                </div></Grid>
            </Grid>
        </div>
    );
}
