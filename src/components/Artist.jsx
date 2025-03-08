import React from 'react'
import { Link } from 'react-router-dom'

const Artist = (props) => {
  return (
    <div className='content-artist-div'>
        <Link className='artist-name-label' to={props.url}>{props.name}</Link>
        <img className='artist-image' src={props.image} alt='Imagem do Artista'/>
    </div>
  )
}

export default Artist