import React from 'react'
import { useEffect, useState } from 'react'
import User from './User.js'
import './styles.css'
function GithubProfileFinder() {
    const [userName, setUsername] = React.useState("jeevan-2007");
    const [profileData, setProfileData] = useState(null);
    const [loading, setLoading] = useState(false);


    function handleSubmit() {
        if (userName.trim() === "") {
            alert("Please enter a username");
            return;
        }
        fetchGithubProfile();
    }


    async function fetchGithubProfile() {
        setLoading(true);
        const response = await fetch(`https://api.github.com/users/${userName}`);
        const data = await response.json();
        console.log(data);
        if (data) { 
            setProfileData(data);
            setLoading(false);
            setUsername("");
        }
    }

    useEffect(() => {
        fetchGithubProfile();
    }, [])
    if (loading) {
        return <div>Loading...</div>
    }
    return (
        <div className='github-profile-container'>
            <div className='input-wrapper'>
                <input
                    type="text"
                    placeholder='Enter GitHub username'
                    name='search-by-name'
                    value={userName}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <button onClick={handleSubmit}>Search</button>
            </div>
            {
                profileData !== null ? <User user={profileData} /> : <div>No profile found</div>
            }
        </div>
    )
}

export default GithubProfileFinder