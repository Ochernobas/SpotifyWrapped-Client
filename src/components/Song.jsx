import React from 'react'
import { Link } from "react-router-dom"

const Song = (props) => {
  return (
    <div className='song-div'>
      <div className='song-texts'>
        <Link className='song-name-label' to={props.url}>{props.name}</Link>
        {props.artists.map(artist => <label className='song-artist-label'>{artist.name}</label>)}
      </div>
      <img className='song-album-image' src={props.album.cover_image} alt='Foto do Album'/>
    </div>
  )
}

export default Song