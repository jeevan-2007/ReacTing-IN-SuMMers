import React from 'react'
import './styles.css'
function Suggestion({data}) {
  return (
    <div className='suggestion-container'>
        <ul>
            {
                data && data.length ? data.map((item,index) => <li key={index}>{item}</li>) : null
            }
        </ul>
    </div>
  )
}

export default Suggestion