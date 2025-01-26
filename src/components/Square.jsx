import React from 'react'

const Square = ({value}) => {

    const handleClick = () =>{
        console.log('click');
    }
  return (
    <div>
         <button onClick={handleClick} className="bg-white border border-gray-400 h-12 w-12 m-1 leading-9 text-lg cursor-pointer">
          {value}
        </button>
        
    </div>
  )
}

export default Square