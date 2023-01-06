import { useAuth } from 'AuthContext';
import { userInfo } from 'os';
import React from 'react'
import { useLocation } from 'react-router-dom'
import { Avatar, Button, Card, CardContent, CardMedia, Grid, Paper, Theme } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import { Link as RouterLink } from 'react-router-dom'

const RegistComplete = (props: any) => {

    const Auth = useAuth();

    return (
        <Box
            sx={{
                minHeight: '100vh',
                backgroundColor: '#EEEEEE',
                p: 5
            }}>

            <Typography>ユーザー登録が完了しました。</Typography>
            <Typography gutterBottom>{Auth.user}</Typography>
            <Link
                component={RouterLink}
                to={"/main"}
                color="primary"
                variant='h6'

                sx={{ textDecoration: "None", pt: 2 }}
            >ホームへ
            </Link>
            <CssBaseline />
        </Box >
    )


}

export default RegistComplete
