import React from 'react'

/*
https://accounts.spotify.com/authorize?client_id=<CLIENT_ID>&redirect_uri=<REDIRECT_URL>&scope=<SCOPE>%20<SCOPE>&response_type=token&state=123
*/

const Home = () => {
    const client_id = "b4197f508abe44bfa68e5197369cf427"
    const spotify_authorize_endpoint = "https://accounts.spotify.com/authorize"
    const redirect_utl_after_login = "https://ochernobas.github.io/SpotifyWrapped-Client/#/dashboard"
    const space_delimiter = "%20"
    const scopes = ["user-top-read", "user-read-recently-played", "user-read-private", "user-read-email"]
    const scopes_url_param = scopes.join(space_delimiter)

    const handleLogin = () => {
        window.location = `${spotify_authorize_endpoint}?client_id=${client_id}&redirect_uri=${redirect_utl_after_login}&scope=${scopes_url_param}&response_type=token&show_dialog=true`
    }

  return (
    <div className='home-div'>
        <button className="home-login-button" onClick={handleLogin}>
            <span className='login-button-span'>Login com Spotify</span>
        </button>
    </div>
  )
}

export default Home