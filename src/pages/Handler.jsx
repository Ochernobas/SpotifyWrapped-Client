import Home from "./Home";
import Dashboard from "./Dashboard";
import axios from "axios"
import api from "../api"

import React, { useEffect, useState } from 'react'

const Handler = () => {
    const [elemento, setElemento] = useState("Home")
    const baseURL = "https://192.168.10.115:8000/"

    useEffect( () => {
        if (window.location.hash) {
            const { access_token, expires_in, token_type } = getReturnedParamsFromSpotifyAuth(window.location.hash)
            localStorage.clear()
            localStorage.setItem("accessToken", access_token)
            localStorage.setItem("expiresIn", expires_in)
            localStorage.setItem("tokenType", token_type)

            axios.post(baseURL, {
                access_token: access_token,
                token_type: token_type,
                expires_in: expires_in
            })

            console.log(access_token)
            setElemento("Dashboard")
        } else {
            setElemento("Home")
        }
    }, [])

    const getReturnedParamsFromSpotifyAuth = (hash) => {
        const stringAfterHashtag = hash.substring(1);
        const paramsInUrl = stringAfterHashtag.split("&")
        const paramsSplitUp = paramsInUrl.reduce((accumulater, currentValue) => {
            const [key, value] = currentValue.split("=")
            accumulater[key] = value
            return accumulater
        }, {})
  
        return paramsSplitUp
      }
    
    if (elemento == "Dashboard") {
        return (
            <div>
                <Dashboard />
            </div>
            )
    } else {
        return (
        <div>
            <Home />
        </div>
        )
    }
    
}

export default Handler