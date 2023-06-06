import React from 'react'
import Bold from './Bold'

const Item = ({img,desc,model,rate, type}) => {
    function highlightNum(sentence){

        return
    }
  return (
    <div className='p-2 h-72 w-72 border m-3 border-gray-300 shadow-lg border-2 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300'>
        <b>
            {type}
        </b>
            <br/>
        {model}
        <img src={img} alt={desc}  className='my-4'/>
        {model? <p>from <b>{rate}</b> a day</p>:''}
    </div>
  )
}

export default Item