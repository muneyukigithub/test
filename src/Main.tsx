import { Link, NavLink } from 'react-router-dom'
import { createRef, FC, ReactNode, RefObject, useRef, useState } from 'react'
import React from 'react'
import SearchIcon from '@mui/icons-material/Search'
import CssBaseline from '@mui/material/CssBaseline'
import {
  InputBase,
  Menu,
  MenuItem,
  Paper,
  Button,
  Grid,
  Divider,
  List,
  AppBar,
  Box,
  Card,
  Fab,
  Toolbar,
  Typography,
  Container,
  Drawer,
  IconButton,
  fabClasses,
} from '@mui/material'
import AddIcon from '@mui/icons-material/Add'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import { mainListItems, secondaryListItems } from './listi'
import AccountCircle from '@mui/icons-material/AccountCircle'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz'
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import CheckIcon from '@mui/icons-material/Check';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

import { red } from '@mui/material/colors';
import { v4 as uuid4 } from 'uuid';

import Typo from 'Typo'
import Edit from 'Edit'

import Maintask from 'Maintask'
import Smalltask from 'Smalltask'
import Motivate from 'Motivate'
import Sample from 'Sample'
import { Testjson } from 'Testjson'
import { useEffect } from 'react'
import { useAuth } from 'AuthContext'
import MinPaper from 'MinPaper'
import { Header } from 'Header'
import { borderRadius } from '@mui/system'
import { Sidebar } from 'Sidebar'

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

interface item {
  smalltask_id: string
  smalltask: string
  task_id: string
}

interface formtype {
  task_id: string
  form: string
}

interface smallformtype {
  task_id: string
  form: string[]
}

interface taskArray {
  task_id: string
  edit: boolean
  task: string
  motivate: string
  created_at: string
  smalltask: string[]
  short: boolean
}

const count = 1
const menuId = 'primary-search-account-menu'

const theme = createTheme({
  palette: {
    mode: 'light',
  },
})



const Main: React.FC = () => {
  // Generate Order Data
  console.log("Main.tsx");

  useEffect(() => {
    addtask();
  }, [])




  // const jsonsetedit = () => {
  //   const taskjson: taskArray[] = Array(Testjson.length);
  //   for (let i = 0; i < Testjson.length; i++) {
  //     taskjson[i] = { edit: true, ...Testjson[i] };
  //   }

  //   return taskjson;
  // }

  // const taskjson: taskArray[] = jsonsetedit();

  // const getmaintaskdata = (getjson: object) => {

  //   return
  // }


  // test2[0] = {edit:true,...test2[0]};
  // Testjson[0].edit
  // console.log(test2);

  // const [tasks, settasks] = useState([{ id: 1, value: 'content field', edit: true }])
  // const [tasks, settasks] = useState(taskjson);
  const [tasks, settasks] = useState<taskArray[]>([]);

  const [anchorEl, setAnchorEL] = useState(null)
  const isMenuOpen = Boolean(anchorEl)
  const [currentRow, setCurrentRow] = React.useState(null)

  // const [maintaskform,setmaintaskform] = useState([{task_id:"iu0f4ab2-ee0a-474f-919a-540fb3de16df",form:""},{task_id:"be0f4ab2-ee0a-474f-919a-540fb3de16df",form:""}]);
  // const [maintaskform,setmaintaskform] = useState({});
  const [maintaskform, setmaintaskform] = useState<formtype[]>([]);
  // const [motivatetaskform,setmotivateform] = useState<formtype[]>([{task_id:"iu0f4ab2-ee0a-474f-919a-540fb3de16df",form:""},{task_id:"be0f4ab2-ee0a-474f-919a-540fb3de16df",form:""}]);
  const [motivatetaskform, setmotivateform] = useState<formtype[]>([]);
  const [smalltaskform, setsmalltaskform] = useState<smallformtype[]>([]);

  // const [username, setusername] = useState<String>("");
  const username = useAuth().user;
  const logout = useAuth().logout;



  // 編集フラグ
  // const [edit,setedit] = React.useState<boolean>(true);
  // const [editid, seteditid] = React.useState(null)

  const list: any[] = []

  // function createData(id: number, date: string, name: string, shipTo: string, paymentMethod: string, amount: number) {
  //   return { id, date, name, shipTo, paymentMethod, amount }
  // }

  // const createtaskobject = () => {
  //   // return { id: tasks.length + 1, value: '', edit: true }
  //   return { task_id: uuid4(), edit: true, motivate: "", task: "", created_at: "", smalltask: [] };
  // }

  const changeshort = (e: any) => {
    console.log(e.target.id)
    console.log(tasks)
    // console.log(e.target.id)

    const newtasks = tasks.slice();
    settasks(newtasks.map((value) => value.task_id === e.target.id ?
      { ...value, short: !value.short } : value))
  }

  const addtask = () => {

    // console.log(tasks);
    const newtasks = tasks.slice();
    const newuuid = uuid4();
    newtasks[newtasks.length] = { task_id: newuuid, edit: true, motivate: "", task: "", created_at: "", smalltask: [], short: false };
    settasks(newtasks);

    setmaintaskform([...maintaskform, { task_id: newuuid, form: "" }])
    setmotivateform([...motivatetaskform, { task_id: newuuid, form: "" }])
    setsmalltaskform([...smalltaskform, { task_id: newuuid, form: [] }])

    // newtasks[tasks.length].smalltask[0]= {
    //   "smalltask_id": "be451694-3bc5-4139-8a8b-51778b7e51d1",
    //   "smalltask": "newsmall",
    //   "task_id": "be0f4ab2-ee0a-474f-919a-540fb3de16df"
    // }

    // console.log(newtasks);
    // settasks();

    // settasks([...taskjson, createtaskobject()])
    // taskjson = [...taskjson, createtaskobject()]
  }


  const test = (e: any) => {
    console.log(maintaskform);
    console.log(motivatetaskform);
    console.log(smalltaskform);
    console.log(tasks);
  }


  const handlesetanchor = (event: any) => {
    setAnchorEL(event.currentTarget)
  }

  const handleMenuClose = () => {
    setAnchorEL(null)
    setCurrentRow(null)
  }




  const deletetask = (e: any) => {

    // console.log(e.target.id);
    //   const newtasks = tasks.slice();
    //   newtasks.filter(item=>item.task_id.match(e.target.id))
    //   console.log(newtasks);
    // }

    // const i = maintaskform.filter((value) => {
    //   return (value.task_id === e.target.id);
    // });
    setmaintaskform(maintaskform.filter((value) => {
      return (value.task_id !== e.target.id);
    }));

    setmotivateform(motivatetaskform.filter((value) => {
      return (value.task_id !== e.target.id);
    }));

    setsmalltaskform(smalltaskform.filter((value) => {
      return (value.task_id !== e.target.id);
    }));

    settasks(tasks.filter((value) => {
      console.log(e.target.id);
      console.log(value.task_id);
      console.log(value.task_id === e.target.id);
      return (value.task_id !== e.target.id);
    }));

    // console.log(i);
    // setmaintaskform([...maintaskform,{task_id:newuuid,form:""}])
    // setmotivateform([...motivatetaskform,{task_id:newuuid,form:""}])
    // setsmalltaskform([...smalltaskform,{task_id:newuuid,form:[]}])


    // let newtasks = tasks.slice();
    // const newtasks = tasks.filter((value) => {
    //   return (value.task_id === e.target.id);
    // });





  }
  // const handledelete = (e: any, task: any) => {
  //   e.preventDefault()

  //   const newlist = tasks.filter((i) => {
  //     console.log(i.id != task.id)
  //     return i.id != task.id
  //   })

  //   settasks(newlist)
  // }

  const addsmalltask = (e: any) => {
    console.log(e.target.id);

    settasks((mapstate: taskArray[]) => mapstate.map((value: taskArray) => value.task_id === e.target.id
      ? { ...value, smalltask: [...value.smalltask, ""] }
      : value))
  }

  const handleOpenMenu = (event: any, row: any) => {
    setAnchorEL(event.currentTarget)
    setCurrentRow(row)
  }

  // const handleEdit = (task: any) => {
  //   const newtask = { ...task, edit: true }
  //   const newtasks = tasks.map((_task) => {
  //     return _task.id === newtask.id ? { ...newtask } : { ..._task }
  //   })

  //   settasks(newtasks)
  // }

  // const handleCreate = (task: any) => {
  //   const newtask = { ...task, edit: false }

  //   console.log(tasks)

  //   const newtasks = tasks.map((_task, index) => {
  //     return _task.id === newtask.id ? { ...newtask } : { ..._task }
  //   })
  //   settasks(newtasks)
  // }

  // const [state, setState] = useState(['foo', 'bar']);

  // setState((prevState) =>
  //   prevState.map((value) => (value === 'bar' ? 'hoge' : value)));

  //   console.log(state);


  // setmaintaskform((mapstate:any)=>mapstate.map((v:{task_id:string,form:string})=>v.task_id===task_id?
  // {...v,form:e.target.value}:v));



  const editchange = (e: any) => {
    console.log(e.target.id)

    const newtasks = tasks.slice();

    for (let i = 0; i < tasks.length; i++) {
      for (let j = 0; j < maintaskform.length; j++) {
        if (tasks[i].task_id === maintaskform[j].task_id) {
          newtasks[i].task = maintaskform[j].form
          newtasks[i].motivate = motivatetaskform[i].form
          newtasks[i].smalltask = smalltaskform[i].form
        }
      }
    }

    console.log(newtasks);


    //     const [state, setState] = useState(['foo', 'bar']);

    // const updateState = () => {
    //   setState((prevState) =>
    //     prevState.map((value) => (value === 'bar' ? 'new' : value))
    //   );

    settasks(newtasks.map((value) => value.task_id === e.target.id ?
      { ...value, edit: !value.edit } : value))

    // settasks((newtasks)=>
    // newtasks.map((value)=>value.task_id === e.target.id? 
    // {...value,edit:!value.edit}:value))

    // for(let i=0;i<tasks.length;i++){
    //   console.log(tasks[i].task_id);
    //   console.log(e.target.id);
    //   if(tasks[i].task_id===e.target.id){
    //     console.log("toutatu");
    //     settasks([...tasks,{...tasks[i],edit:!tasks[i].edit}])
    //     break;
    //   }
    // }

  }


  // const elm = useRef<any>(null);
  const taskRefs = useRef<RefObject<HTMLDivElement>[]>([])
  tasks.forEach((_, index) => {
    taskRefs.current[index] = createRef<HTMLDivElement>()
  })

  const handlescrollbutton = () => {

    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  // const test1 = (event: any) => {
  //   console.log(event);
  //   if (elm.current) {
  //     console.log(elm.current.getBoundingClientRect());
  //   }
  // }


  tasks.forEach((task, index) => {
    const edit = task.edit;

    list.push(

      task.short ? <MinPaper taskname={task.task} changeEvent={changeshort} taskid={task.task_id} />
        : <Paper

          ref={taskRefs.current[index]}
          elevation={3}
          sx={{
            // mb: 3,
            px: 3,
            pb: 3,
            m: 3,
            display: 'flex',
            flexDirection: 'column',
            minHeight: "240px",
            borderRadius: 3,
          }}
        >


          <KeyboardArrowDownIcon id={task.task_id} onClick={changeshort} sx={{ textAlign: "1px solid black" }} />

          {/* <Button id={task.task_id} onClick={changeshort}>
            <KeyboardArrowDownIcon />
          {'∨'}
          </Button> */}
          {/* <button id={task.task_id} onClick={changeshort}>
            <KeyboardArrowDownIcon />
          </button> */}



          <Box
            sx={{
              height: '30px',
              display: 'flex',
              justifyContent: 'flex-end',

            }}
          >




            {
              edit ?
                <Button onClick={editchange} id={task.task_id} sx={{ color: "green", fontWeight: "bold" }}>
                  <EditIcon color="success" />タスクカードの編集を確定する
                  {/* <Typography sx={{color:"green"}}>タスクカードの編集を確定する</Typography> */}
                </Button>
                : <Button onClick={editchange} id={task.task_id} sx={{ color: "green" }}>
                  <CheckIcon color="success" />
                  タスクカードを編集する
                  {/* <Typography sx={{color:"green"}}>タスクカードを編集する</Typography>  */}
                </Button>
            }

            <Button id={task.task_id} onClick={deletetask} sx={{ color: "red" }}>
              <DeleteIcon sx={{ color: red[500], ml: 2 }} />
              タスクカードを削除する
              {/* <Typography sx={{color:"red"}}></Typography> */}
            </Button>

            {/* <IconButton
            edge="end"
            aria-label="account of current user"
            aria-controls={menuId}
            aria-haspopup="true"
            onClick={(event) => handleOpenMenu(event, task)}
            color="inherit"
            sx={{
              // width:"20px",
              justifyContent: 'flex-end',
            }}
          >
            <MoreHorizIcon />
          </IconButton> */}
            {/* <Menu
            anchorEl={anchorEl}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            id={menuId}
            keepMounted
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            open={currentRow === task}
            onClose={handleMenuClose}
          >
            <MenuItem onClick={(e) => handledelete(e, task)}>削除</MenuItem>
            <MenuItem onClick={(e) => handleEdit(task)}>編集</MenuItem>
            <MenuItem onClick={(e) => handleCreate(task)}>作成</MenuItem>
          </Menu> */}
          </Box>

          <Grid container justifyContent="center" direction="column" spacing={2}>


            {/* やることフェーズコンポーネント */}

            <Grid item>
              <Maintask editflag={edit} task_id={task.task_id} taskdata={task.task} maintaskform={maintaskform} setmaintaskform={setmaintaskform} />
            </Grid>

            {/* モチベータフェーズコンポーネント */}
            <Grid item>
              <Motivate editflag={edit} task_id={task.task_id} taskdata={task.motivate} motivatetaskform={motivatetaskform} setmotivatetaskform={setmotivateform} />
            </Grid>

            {/* 細分化フェーズコンポーネント */}
            <Grid item>
              <Smalltask editflag={edit} task_id={task.task_id} taskdata={task.smalltask} smalltaskform={smalltaskform} setsmalltaskform={setsmalltaskform} addsmalltask={addsmalltask} />
            </Grid>

          </Grid>





          {/* <Box>{task.edit ? <Edit {...task} /> : <Typo {...task} />}</Box> */}

          {/* {task.edit ? (
          <Button
            onClick={(e) => handleCreate(task)}
            variant="contained"
            sx={{ mb: '20px', ml: 'auto', mt: 'auto', width: '120px', fontSize: '3px' }}
          >
            タスクカード作成
          </Button>
        ) : (
          ''
        )} */}
        </Paper>
    )
  })



  const drawerWidth = 240;

  return (
    < Box sx={{ backgroundColor: '#EEEEEE', minHeight: "100vh", display: "flex" }}>
      <Header />
      <CssBaseline />

      <Box
        component="nav"
        sx={{ p: 2, width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
      >
        <Sidebar tasks={tasks} ref={taskRefs} />

        {/* <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          <Sidebar tasks={tasks} ref={taskRefs} />
        </Drawer> */}



      </Box>

      <Box
        component="main"
        sx={{ height: "100vh", mt: 8, p: 3, overflow: "scroll", flexGrow: 1, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >

        {list}
      </Box>









      {/* <Grid container spacing={0} sx={{ pt: 8 }}>
        <Grid item xs={12} md={9}>
          {list}
          <Fab color="primary" variant="extended" sx={{ mt: 3 }} onClick={addtask}>
            <AddIcon />
            Task
          </Fab>
        </Grid>
        <Grid item xs={0} md={3}>
          <Box component="nav" sx={{ width: { xs: "0px", sm: "200px" }, flexShrink: { sm: 0 } }}>
            <Sidebar tasks={tasks} ref={taskRefs} />
          </Box>
        </Grid>
      </Grid> */}

    </Box >
  )
}

export default Main
