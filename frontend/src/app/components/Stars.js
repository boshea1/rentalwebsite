import React from 'react'

const Stars = (stars) => {
    
  return (
    <div>
 {()=>{const a = []
    for (let i = 0; i < stars; i++){
        a.push(<img src='/star.png'/>)
    } return a}}
    </div>
  )
}

export default Stars