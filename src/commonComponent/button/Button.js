import React from 'react';
import './Button.css'
export default function Button(props) {
  return (
  <div>
<div className='button' style={{backgroundColor:props.backgroundColor,width :props.width}}>
    {props.title }
</div>
  </div>
  );
}
