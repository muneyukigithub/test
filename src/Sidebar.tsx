import React, { forwardRef, useState } from 'react'
import { Button, Drawer, Paper, Typography } from '@mui/material'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import { mainListItems, secondaryListItems } from './listi'

export const Sidebar: React.FC<any> = forwardRef((props, ref: any) => {


  // console.log(ref.current[0].current.getBoundingClientRect())
  console.log(props.tasks)
  const test1 = (event: any) => {
    console.log(event.target.id)
    // console.log(ref.current.getBoundingClientRect());

    // console.log(ref.current[0].getBoundingClientRect());

    if (ref) {
      console.log(ref.current[event.target.id].current.getBoundingClientRect().top)
      window.scrollTo({
        top: ref.current[event.target.id].current.getBoundingClientRect().top,
        behavior: 'smooth'
      })
    }
  }

  return (
    <Paper elevation={3}
      sx={{
        display: { xs: "none", sm: "block" },
        position: "fixed",
        top: 110,
        left: 30,
        // height: "50vh",
        height: "70vh",
        // overflow: "scroll",
        p: "1rem",
        width: "240px",
        borderRadius: 5,
        backgroundColor: "#FFF",
      }}>

      {props.tasks.map((value: any, index: any) => (
        <Typography id={index} onClick={test1}>
          {value.task}
        </Typography>
      )
      )}


      {/* <button onClick={test1} >ボタン</button> */}

    </Paper >)
})