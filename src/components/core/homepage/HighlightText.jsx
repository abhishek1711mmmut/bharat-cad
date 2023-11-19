import React from 'react'

const HighlightText = ({text}) => {
  return (
    <span className='bg-gradient-to-b from-[#E21143] to-[#FFB03A] text-transparent bg-clip-text font-bold'>
        {" "}
        {text}
        {" "}
    </span>
  )
}

export default HighlightText