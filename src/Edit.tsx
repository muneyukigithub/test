import React from 'react'
import { TextField } from '@mui/material';

type Content = {
  id:number;
  value:string;
  edit:boolean;
};

const Edit = (props:Content) => {
  return (
    <div>
      <TextField variant="standard" label="Taskを入力してください" sx={{width:"200px"}}/>
    </div>
  )
}

export default Edit
