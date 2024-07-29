import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainBannerPage from './Components/MainBanner/MainBannerPage'
import Footer from './Components/MainBanner/Footer';
import NavBar from './Components/MainBanner/Navbar'
import GoTop from './Components/MainBanner/Gototop';
import ChatBot from './Components/MainBanner/ChatBot'
import WhatsApp from './Components/MainBanner/Whatsapp';
import Contact from './Components/Contact/Contact'
import Faq from './Components/Faq/Faq'
import PrivacyPolicy from './Components/Faq/PrivacyPolicy'
import TermsandConditions from './Components/Faq/TermsandConditions'
import Myexperience1 from './Components/Whatwedo/Myexperience1'
import Myexperience2 from './Components/Whatwedo/Myexperience2'
import Myexperience3 from './Components/Whatwedo/Myexperience3'
import Myexperience4 from './Components/Whatwedo/Myexperience4'
import { SpeedInsights } from "@vercel/speed-insights/react"

import './App.css'
import './styles/bootstrap.min.css'
import './styles/responsive.css'
import './styles/responsive.css.map'
import './styles/responsive.scss'
import './styles/rtl.scss'
import './styles/rtl.css'
import './styles/rtl.scss'
import './styles/rtl.css.map'
import './styles/slick.css'
import './styles/style.css.map'
import './styles/style.css'
import './styles/style.scss'

function App() {
  return (
    <>
    <SpeedInsights/>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<MainBannerPage />} />
          <Route path='/contact' element={<Contact/>} />
          <Route path='/faq' element={<Faq/>} />
          <Route path='/terms-conditions' element={<TermsandConditions/>} />
          <Route path='/privacy-policy' element={<PrivacyPolicy/>} />
          <Route path='/my-experience-1' element={<Myexperience1/>} />
          <Route path='/my-experience-2' element={<Myexperience2/>} />
          <Route path='/my-experience-3' element={<Myexperience3/>} />
          <Route path='/my-experience-4' element={<Myexperience4/>} />
        </Routes>
       
        <ChatBot />
        <GoTop />
        <Footer />
      </Router>
      <WhatsApp />

    </>
  );
}

export default App
