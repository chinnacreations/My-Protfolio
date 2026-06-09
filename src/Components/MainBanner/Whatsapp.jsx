import React from 'react'
import { FaWhatsapp } from "react-icons/fa";
const WhatsApp = () => {
  const handleWhatsAppClick = () => {
    const phoneNumber = '9160591908'; 
    const message = `Hey Thirumani Satish! I am Impressed Your Skills, Could you connect each other, Thank You!.`; // Optional: Replace with your message
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, '_blank', 'noopener noreferrer');
  };
  return (
    <div>
        <FaWhatsapp className='whatsapp-flot' onClick={handleWhatsAppClick}/>
    </div>
  )
}

export default WhatsApp