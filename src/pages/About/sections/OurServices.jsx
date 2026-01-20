import React from 'react'
import Machines from './Machines'

export const OurServices = () => {
  return (
    <div className='flex flex-col justify-center items-center'>
        <span>We’re Scribble, a family</span>
        <h2 className='text-xl font-bold mb-10'>Our <span className='text-purple-400'>services & machines</span></h2>
        <div className='grid grid-cols-2 gap-8 lg:gap-14 lg:grid-cols-3'>
            <Machines/>
            <Machines/>
            <Machines/>
            <Machines/>
            <Machines/>
            <Machines/>
        </div>
    </div>
  )
}
