import React, { useEffect, useState } from 'react'
import { FaWhatsapp } from "react-icons/fa";
const WhatsApp = () => {
    const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 0) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      toggleVisibility();
    };
    document.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);
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