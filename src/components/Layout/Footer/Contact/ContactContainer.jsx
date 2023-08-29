import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { DevBoxDesing } from '../../../../utils/ClassRepeated';

const ContactContainer = () => {
  return (
    <div className={'flex flex-col col-span-12 lg:col-span-6  items-center p-1 gap-2'}>
      <div className='flex'>
        <InstagramIcon sx={{fontSize:40}}/>
        <WhatsAppIcon sx={{fontSize:40}}/>
        <FacebookIcon sx={{fontSize:40}}/>
      </div>
    </div>
  )
}

export default ContactContainer