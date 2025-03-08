import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHeart } from "@fortawesome/free-solid-svg-icons";

/*
  <FontAwesomeIcon className="genre-count-heart-bg" icon={faHeart} size='xl'/>
  <FontAwesomeIcon className="genre-count-heart-fill" icon={faHeart} size='xl'/>
*/ 

const Genre = (props) => {
  return (
    <div className='content-genre-div'>
      <div className='genre-texts'>
        <label className='genre-name-label'>{props.name}</label>
        <label className='genre-count-label'>{`${props.count}%`}</label>
      </div>
      <img className='genre-image' src={props.image} alt='Imagem de Exemplo'/>
    </div>
  )
}

export default Genre