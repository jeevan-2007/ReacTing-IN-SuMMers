import React, { useEffect, useState } from 'react'
import Suggestion from './suggestions'

function SearchAutocompleteWithApi() {
    const [loading, setLoading] = useState(false)
    const [users, setUsers] = useState([])
    const [error, setError] = useState(null)
    const [searchParam, setSearchParam] = useState('')
    const [showDropdown, setShowDropdown] = useState(false)
    const [filteredUsers, setFilteredUsers] = useState([])

    const handleSearchChange = (e) => {
    const value = e.target.value
    setSearchParam(value) // <-- This line updates the input value (controlled input)

    const query = value.toLowerCase()
    if (query.length > 1) {
        const filteerData =
            users && users.length ?
                users.filter(item => item.toLowerCase().indexOf(query) > -1)
                : []
        setFilteredUsers(filteerData)
        setShowDropdown(true)
    } else {
        setShowDropdown(false)
    }
}

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                setLoading(true) // Set loading to true when fetching starts
                const res = await fetch('https://dummyjson.com/users')
                const data = await res.json()
                // setUsers(data.users) // Actually set the users data
                console.log('Fetched users:', data.users)
                if (data.users && data.users.length > 0) {
                    setUsers(data.users.map(userItem => userItem.firstName))
                    setLoading(false)
                    setError(null)
                }
            } catch (error) {

                setLoading(false)
                console.log('Error fetching users:', error)
                setError(error)
            } finally {
                setLoading(false) // Set loading to false when done
            }
        }

        fetchUsers() // Actually call the function
    }, []) // Add empty dependency array to run only once
    console.log(users,filteredUsers)
    return (
        <div className='search-auto-complete-container'>
            {loading && (
                <>
                    <h3>Loading data </h3>
                </>
            )}
            <input type='text' value={searchParam} name='search-users' placeholder='Search users Here ..... ' onChange={handleSearchChange} />
            
            {
                showDropdown && <Suggestion data={filteredUsers} />
            }
        </div>

    )
}

export default SearchAutocompleteWithApi