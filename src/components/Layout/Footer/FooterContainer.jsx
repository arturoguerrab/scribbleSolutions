import React from 'react'
import { DevBoxDesing, containerClass } from '../../../utils/ClassRepeated'
import Logo from '../Header/Logo/Logo'
import ContactContainer from './Contact/ContactContainer'


const FooterContainer = () => {
  return (
    <div className="w-screen pt-4 bg-white">
      <div className={containerClass + "grid grid-cols-12 items-center gap-2 pb-4"}>
        <div className={'col-span-12 lg:col-span-6 flex justify-center'}>
          <Logo props={'h-[60px] w-[150px]'}/>
        </div>
        <ContactContainer/>
      </div>
      <iframe className={'w-screen h-72'} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224444.754411368!2d-81.5074758383849!3d28.481073844047653!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88e773d8fecdbc77%3A0xac3b2063ca5bf9e!2sOrlando%2C%20Florida%2C%20EE.%20UU.!5e0!3m2!1ses-419!2sar!4v1693345912765!5m2!1ses-419!2sar"></iframe>
    </div>
  )
}

export default FooterContainer