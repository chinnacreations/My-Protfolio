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
    const message = 'Hello Data Meadows, Im interested in your services and would appreciate it if you could share a quotation.Thank you!'; // Optional: Replace with your message
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