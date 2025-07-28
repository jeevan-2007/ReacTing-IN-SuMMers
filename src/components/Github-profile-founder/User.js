import React from 'react'
import './styles.css'
function User({user}) {
    const {avatar_url, name, login, html_url, followers, following, public_repos} = user;
  return (
    <div className='User'>
<div>
    <img src={avatar_url} alt={login} className='avatar' />
</div>
<div >
    <a href={html_url} target="_blank" rel="noopener noreferrer" className='username'>{name||login}</a>
</div>
<div>
    <p className='followers'>Followers: {followers}</p>
    <p className='following'>Following: {following}</p>
</div>
    </div>
  )
}

export default User