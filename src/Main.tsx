import { Link, NavLink } from "react-router-dom";
import { FC, ReactNode, useState } from "react"
import React from "react";
import { Menu,MenuItem,Paper,Button,Grid,Divider,List,AppBar, Box, Card, Fab,Toolbar,Typography,Container,Drawer,IconButton,} from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { mainListItems, secondaryListItems } from './listi';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

//関数コンポーネントがchildrenを受け取る場合の型定義
// type Props = {
//     text: string
//     children: React.ReactNode
//   }
  
//   const SampleComponent5: React.VFC<Props> = (props) => {
//     return (
//       <div>
//         <h1>Hello {props.text}!</h1>
//         <p>{props.children}</p>
//       </div>

// ③ props に直接型注釈を指定するパターン
// const SampleComponent3 = (props: Props) => {
//     return <div>Hello {props.text}!</div>
//   }
  
  // ④ React.VFC<P>のジェネリック型<P>として型を指定するパターン
//   const SampleComponent4: React.VFC<Props> = (props) => {
//     return <div>Hello {props.text}!</div>
//   }

let count = 1;
const menuId = 'primary-search-account-menu';

const theme = createTheme({
  palette:{
    mode:'light',
  },
});


const Main:React.FC=()=>{
  // Generate Order Data



const [tasks,settasks] = useState([{id:1,value:""}]);
const [anchorEl,setAnchorEL] = useState(null);
const isMenuOpen = Boolean(anchorEl);

let list:any[] = [];

function createData(
  id: number,
  date: string,
  name: string,
  shipTo: string,
  paymentMethod: string,
  amount: number,) 
  {
  return { id, date, name, shipTo, paymentMethod, amount };
}

    const createtaskobject = () => {
      return {id:tasks.length + 1,value:""};}

    const addtask = () => {
      settasks([...tasks,createtaskobject()]);

    }

    const handlesetanchor = (event:any) => {
      setAnchorEL(event.currentTarget);
    }

    const handleMenuClose = () => {
      setAnchorEL(null);
    }

    const handledelete = (id:any) =>{
      console.log(id.id);
    }

    // for(const task in tasks){
      tasks.forEach((task,index)=>{
      list.push(
      <Paper elevation={3} sx={{
        mb:3,
        px:2,
        display:"flex",
        flexDirection:"column",
        height:"240px",
      }}>

        <Box sx={{
          height:"30px",
          display:"flex",
          justifyContent:"flex-end"

        }}>

      
        <IconButton
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handlesetanchor}
              color="inherit"
              sx={{
                // width:"20px",
                justifyContent:"flex-end"
            }}
            >
              <MoreHorizIcon />
            </IconButton>


            </Box>

            <Menu
        anchorEl={anchorEl}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        id={menuId}
        keepMounted
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={isMenuOpen}
        onClose={handleMenuClose}
      >
        <MenuItem onClick={()=>handledelete(task)}>削除</MenuItem>
        <MenuItem onClick={handleMenuClose}>編集</MenuItem>
      </Menu>

      </Paper>
      );
      }
      )




    
    // const renderMenu = (
    //   <Menu
    //     anchorEl={anchorEl}
    //     anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
    //     id={menuId}
    //     keepMounted
    //     transformOrigin={{ vertical: 'top', horizontal: 'right' }}
    //     open={isMenuOpen}
    //     onClose={handleMenuClose}
    //   >
    //     <MenuItem onClick={handledelete}>削除</MenuItem>
    //     <MenuItem onClick={handleMenuClose}>編集</MenuItem>
    //   </Menu>
    // );

    return (
      <ThemeProvider theme={theme}>

        <AppBar position="relative">
          <Toolbar>    
          </Toolbar>
        </AppBar>

        <Grid container spacing={0}>

          <Grid item xs={12} md={8}>
            <Box sx={{backgroundColor:"white",height:"100vh",mx:5,mt:5}}>
              {list}
            {/* {tasks.forEach((item,index)=>{
              return (
               <Paper elevation={3} sx={{
                p:2,
                display:"flex",
                flexDirection:"column",
                height:"240px",
              }}>
              </Paper>
              )
            })
            } */}
            <Fab color="primary" variant="extended" sx={{mt:3}} onClick={addtask}>
          <AddIcon />
          Task
        </Fab>

            </Box>          
          </Grid>

          <Grid item xs={0} md={4}>
            <Box sx={{backgroundColor:"#EEEEEE",height:"100vh"}}>

            </Box>


          </Grid>
        </Grid>

        
        </ThemeProvider>
        );
      }

export default Main;


        {/* <NavLink to="/" style={({ isActive }) =>
        isActive ? current : undefined}>navlink</NavLink> */}

        {/* <Drawer variant="permanent" open={open}anchor="left">
          <Toolbar
          sx={{display:'flex',alignItems:'center',justifyContent:'flex-end',px:[1],}}>

            <IconButton onClick={toggleDrawer}>
              <ChevronLeftIcon />
            </IconButton>
          </Toolbar>
          <List component="nav">
            {mainListItems}
            <Divider sx={{ my: 1 }} />
             {secondaryListItems}
          </List> Hello world side</Drawer> */}

        {/* <Card sx={{minWidth:275}}>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Word of the Day
        </Typography>
        </Card>
        <Fab>
          <AddIcon />
        </Fab>
        <Container>
        </Container> */}

      
