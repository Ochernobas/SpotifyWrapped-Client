import React, { useEffect, useState } from 'react'
import axios from "axios"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import api from "../api"
import Song from '../components/Song';
import Artist from '../components/Artist';
import Genre from '../components/Genre';
import fileDownload from "js-file-download"
import { Link } from 'react-router-dom';

const baseURL = "https://192.168.10.115:8000/"

const Dashboard = () => {
    const [username, setUsername] = useState("Username")
    const [profile_image, setProfileImage] = useState("Profile Image")
    const [userUrl, setUrl] = useState("Url")
    const [topTracks, setTracks] = useState([{name: "Tracks", album: {name: "Album"}, external_url: "url", popularity: "100", artists: [{name: "Artist"}]}])
    const [topArtists, setArtists] = useState([{name: "Artists", image: "image", external_url: "url"}])
    const [topGenres, setGenres] = useState([{name: "Genre", count: "Count", artist_image: "Artist-Image"}])
    const [pop, setPop] = useState(100)
    const [image, setImage] = useState("")

    useEffect( () => {
        get_profile()
        get_tracks()
        get_artists()
    }, [])

    const get_profile = async () => {
        try{
            const response = await api.get(`profile`)
            setUsername(response.data.username)
            setProfileImage(response.data.profile_image)
            setUrl(response.data.url)
        } catch (err) {
            console.error("Erro ao apanhar perfil", err)
        }
    }

    const get_tracks = async () => {
        try{
            const response = await api.get(`top-tracks`)
            setTracks(response.data.tracks)
            setPop(response.data.popularity)
        } catch (err) {
            console.error("Erro ao apanhar tracks", err)
        }
    }

    const get_artists = async () => {
        try{
            const response = await api.get(`top-artists`)
            setArtists(response.data.artists)
            setGenres(response.data.genres)
        } catch (err) {
            console.error("Erro ao apanhar artists", err)
        }
    }

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

    const getCardImage = async () => {
        try{
            const response = await api.get(`download`, {responseType: "arraybuffer"})
            const base64 = btoa(new Uint8Array(response.data).reduce(
                (data, byte) => data + String.fromCharCode(byte),
                ''
                )
            )
            fileDownload(response.data, "wrapped.jpg")
            await api.get("remove-files")
        } catch (err) {
            console.error("Erro ao baixar card de imagens", err)
        }
    }

  return (
    <div className='dashboard-div'>
        <div className="dashboard-header-div">
            <div className='dashboard-user-div'>
                <img className='dashboard-user-div-username-image' src={profile_image} alt='Erro ao baixar Imagem'/>   
                <Link className='dashboard-user-div-username-label' to={userUrl}>{username}</Link>
            </div>
            <div className='dashboard-popularity-div'>
                <label className='dashboard-popularity-label'>{`${pop}% Trending`}</label>
                <button className='dashboard-download-button' onClick={getCardImage}>
                    <FontAwesomeIcon icon={faDownload} size='xl'/>
                </button>
            </div>
        </div>
        <div className='dashboard-content-div'>
            <div className='dashboard-content-list-div'>
                <label className='dashboard-content-title'>Músicas mais ouvidas</label>
                {topTracks.map(({name, album, external_url, popularity, artists}) => <Song name={name} url={external_url} album={album} pop={popularity} artists={artists} />)}
            </div>
            <div className='dashboard-content-list-div'>
                <label className='dashboard-content-title'>Artistas mais ouvidos</label>
                {topArtists.map(({name, image, external_url}) => <Artist name={name} url={external_url} image={image}/>)}
            </div>
            <div className='dashboard-content-list-div'>
                <label className='dashboard-content-title'>Gêneros mais ouvidos</label>
                {topGenres.map(({name, count, artist_image}) => <Genre name={name} count={count} image={artist_image}/>)}
            </div>
        </div>
    </div>
  )
}

export default Dashboard