import React from 'react'
import OneCharacter from './OneCharacter'

function Characters({list}) {
    const listCharacters = Object.values(list).map((item)=>{
        return(
            <li><OneCharacter item={item}/></li>
        )
    })
  return (
    <div>
        <ul>{listCharacters}</ul>
    </div>
  )
}

export default Characters