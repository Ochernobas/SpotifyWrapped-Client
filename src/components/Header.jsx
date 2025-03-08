import React from 'react'
import { Link } from "react-router-dom"
import imagemRafael from '../assets/cquadrado.jpg'

const Header = () => {
  return (
    <div className='header-div'>
        <div style={{width: "250px"}}></div>
        <div className='header-div-labelbox'>
            <Link className='header-div-label-title' to={"/"}>Spotify Wrapped</Link>
        </div>
        <div className='header-credits-div'>
          <label className='header-credits-label'>Conheça meus projetos!</label>
          <Link to={"https://github.com/Ochernobas"} className='header-credits-link'>
            <img className='header-credits-image' src={imagemRafael} alt='Imagem Rafael'/>
          </Link>
        </div>
    </div>
  )
}

export default Header