import React from 'react'

import {FaLocationArrow} from "react-icons/fa"
import { FaRegUser } from 'react-icons/fa'

const Gradient = () => {
  return (
    <div className=' text-white bg-black p-2 sm:p-5'>
    <div className='  flex justify-between text-2xl '>
      <div className='flex items-center gap-x-1 font-mono '>
        <FaLocationArrow />
        Gradient
      </div> 
      <div>
        <FaRegUser />
      </div>
    </div>
    <div className='text-center'>
        Account Status: 
    </div>
    </div>
  )
}

export default Gradient
