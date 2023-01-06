import React, { createContext } from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { redirect, useNavigate } from 'react-router-dom';

const AuthContext = React.createContext<any>(null);

export type AuthUserContextType = {
    Auth: () => boolean;
    login: (username: string, password: string) => void;
    logout: () => void;
    user: string;
}

export const useAuth = () => {
    return useContext(AuthContext);
}

export const AuthProvider: React.FC<any> = ({ children }) => {
    const [user, setuser] = useState("")
    const [isAuth, setIsAuth] = useState(false)
    const navigate = useNavigate();

    const login = async (username: any, password: any) => {
        return execlogin(username, password)
    }

    const logout = async () => {
        const returnuser = user;
        await fetch("http://127.0.0.1:8000/api/v1/logout/", {
            method: "GET",
            credentials: "include"
        }).then(() => {
            setIsAuth(false)
            setuser("")
            console.log(returnuser + "--------------")
        })
        return returnuser
    }

    const execlogin = async (username: any, password: any) => {
        // login処理fetch
        // login処理fetchがfalseならreturn false
        // user処理fetch
        // login処理fetchがfalseならreturn false
        // return true

        const loginFetchResult = await fetch("http://127.0.0.1:8000/api/v1/token/", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            credentials: 'include',
            body: JSON.stringify({ "email": username, "password": password })

        }).then((response) => {

            if (response.ok === false) {
                throw new Error("認証エラー");
            }

            return true

        }).catch(error => {
            console.log("error")
            console.error('通信に失敗', error)

            return false
        })

        if (!loginFetchResult) {
            return false;
        }

        const userFetchResult = await fetch("http://127.0.0.1:8000/api/v1/user/", {
            method: "GET",
            credentials: 'include'
        }).then((response) => {
            if (response.ok === false) {
                throw new Error("認証エラー");
            }

            return response.json()
        }).then(response => {
            setuser(response.username)
            setIsAuth(true)
            return true
        }).catch(error => {
            console.log("error")
            console.error('通信に失敗', error)
            return false
        })

        if (!loginFetchResult) {
            return false;
        }

        return true
    }

    const Auth = () => {
        return isAuth
    }

    const value: AuthUserContextType = {
        "login": login,
        "logout": logout,
        "Auth": Auth,
        "user": user,
    };

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
};