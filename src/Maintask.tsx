import React, { useState } from 'react'
import { Dispatch, SetStateAction } from "react";

import { Card ,Box,TextField, Typography,Button} from '@mui/material'

interface maintaskstate {
  task_id:string
}

const Maintask:React.FC<{editflag:boolean,task_id:string,taskdata:string,maintaskform:any,setmaintaskform:any}>
= ({editflag,task_id,taskdata,maintaskform,setmaintaskform}) => {

  // ,changehandle:(event:any)=>void

  console.log(taskdata);

  const handlechange =(e:any) =>{
    
    // maintaskform = e.target.value;
    
    setmaintaskform([...maintaskform,{form:e.target.value}]);
    // setmaintaskform({...maintaskform,task_id:e.target.value})
    console.log(maintaskform);
  }



  return (

    <Card sx={{
        width:"100%",
        height:"100px",
        borderRadius:"5px",

    }}>
      <Box sx={{
        height:"30px",
        // backgroundColor:"#CCFF00",
        mr:2,
        ml:2,
        borderBottom:"0.3px solid #BDBDBD",
      }}>やることフェーズ</Box>
      <Box sx={{
        ml:2,
        mr:3
      }}>

        {editflag ? (
      <TextField
          fullWidth
          id="standard-search"
          label="このタスクを入力してください"
          type="search"
          variant="standard"
          onChange={handlechange}
        />
        )
        :(<Typography>{taskdata}</Typography>)

}
        </Box>
        
    </Card>
  )
}

export default Maintask
