import React,{useState} from 'react'
import {Button, Drawer} from "@mui/material";
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { mainListItems, secondaryListItems } from './listi';

const Sidebar:React.FC = () => {
  const [op,setop] = useState(true)
  const toggleopen = () =>{ 
    setop(!op);
    console.log(op);
  }

  return (
    <div>
      
      <Drawer
      anchor="left"
      open={op}
      onClose={toggleopen}>

      <button onClick={toggleopen}>
      <ChevronLeftIcon />
      </button>

        { mainListItems }

      </Drawer>
    </div>
  )
}

export default Sidebar