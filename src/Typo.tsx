import React from 'react'
import { Typography } from '@mui/material'

// rafce
type Content = {
    id:number;
    value:string;
    edit:boolean;
  };


const Typo = (props:Content) => {
  return (
    <div>
        <Typography>{props.value}</Typography>
      
    </div>
  )
}

export default Typo
