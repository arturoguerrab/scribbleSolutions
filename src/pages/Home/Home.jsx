import Hero from './sections/Hero'
import WeHave from './sections/WeHave'
import Steps from './sections/Steps'
import Customers from './sections/Customers'

const Home = () => {
  return (
    <div className="bg-white min-h-screen w-full flex flex-col"> 
      <Hero/>
      <WeHave/>
      <Steps/>
      <Customers/>
    </div>
  )
}

export default Home