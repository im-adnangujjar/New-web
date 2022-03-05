import { Grid,} from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import React from 'react';
import './FooterSection.css'


export default function FooterSection() {
  return (
    <div className='mainContainers'>
      <Grid container spacing={2}>
        <Grid item lg={6}>
        <div className="images">
        <img src='assets/logo.png'/>
        </div>
          <p className='paragraphs'>We are always open to discuss your project and improve your online presence.</p>
          <div className='backgr'>
            <div>
              <p>Email me at</p>
              <p>contact@website.com</p>
            </div>
            <div>
              <p>Call us</p>
              <p>0927 6277 28525</p>
            </div>
          </div>
        </Grid>
        <Grid item lg={6}>
          <p className='paragraphas1'>Lets Talk!</p>
          <p className='paragraphs'>We are always open to discuss your project, improve your online presence and help with your UX/UI design challenges.</p>
          <div style={{margin:"20px 0px 0px 100px"}}><FacebookIcon className='color'/><InstagramIcon className='color'/><TwitterIcon className='color'/></div>


        </Grid>
      </Grid>
    </div>);
}
