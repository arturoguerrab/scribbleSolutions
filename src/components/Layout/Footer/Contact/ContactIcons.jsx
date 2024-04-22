import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { Link } from 'react-router-dom';
import { YouTube } from '@mui/icons-material';

const ContactIcons = () => {
  return (
      <div className='flex gap-3 text-black'>
        <Link to={'https://www.instagram.com/scribblesolutionsfl/'} target='_blank'><InstagramIcon sx={{fontSize:30}}/></Link>
        <Link to={'https://wa.me/16892411744'} target='_blank'><WhatsAppIcon sx={{fontSize:30}}/></Link>
        <Link to={'https://www.youtube.com'} target='_blank'><YouTube sx={{fontSize:30}}/></Link>
      </div>
  )
}

export default ContactIcons 