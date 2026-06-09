
import Hero from './Hero';
import Technologies from './Technologies'
import OurServices from '../Whatwedo/Myexperience'
import Ourvalues from '../MyQualification/MySkills'
import Whoweserve from '../WhoWeServe/MyQualification'
import AboutUs from '../AboutUs/AboutUs'
import Projects from './Projects'

export default function MainBannerPage() {
  return (
    <>
      <Hero />
      <Technologies />
      <AboutUs />
      <OurServices />
      <Projects />
      <Ourvalues />
      <Whoweserve />
    </>
  );
}


