import React from 'react'
import Hero from './HomeElements/Hero'
import WeHave from './HomeElements/WeHave'
import Steps from './HomeElements/Steps'
import Costumers from './HomeElements/Costumers'

const Home = () => {
  return (
    <div className=" bg-white flex flex-col justify-center items-center"> 
      <Hero/>
      <WeHave/>
      <Steps/>
      <Costumers/>
    </div>
  )
}

export default Home