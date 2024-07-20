
import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider';
import Technologies from './Technologies'
import OurServices from '../Whatwedo/Myexperience'
import Ourvalues from '../MyQualification/MySkills'
import Whoweserve from '../WhoWeServe/MyQualification'
import AboutUs from '../AboutUs/AboutUs'

export default function MainBannerPage() {
  return (
    <>
      <div className='bg-display-none'>
        <div className='baanner-image-main'>
          <ReactCompareSlider
            itemOne={
              <div style={{ position: 'relative', height: '100%' }}>
                <ReactCompareSliderImage
                  style={{
                    height: '100%',
                    width: '100%',
                    background: 'rgb(0 0 0 / 5%)',
                  }}
                />
                <div style={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(100px, -50%)',
                  color: '#fff',
                  zIndex: '1000',
                  fontSize: '22px',
                  width: '350px',
                  fontFamily: 'Miso-Light',
                }}>
                  HI... THIS IS <span className='text-color-span-main-banner'>THIRUMANI SATISH</span>
                </div>
              </div>
            }

            itemTwo={
              <div style={{ position: 'relative', height: '100%' }}>
                <ReactCompareSliderImage
                  style={{
                    width: '100%',
                    height: '100%',
                    background: 'rgba(0, 0, 0, 0.6)',
                  }}
                />
                <div style={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(100px, -50%)',
                  color: '#fff',
                  zIndex: '1000',
                  fontSize: '22px',
                  fontFamily: 'Miso-Light',
                }}>
                  I AM A  <span className='text-color-span-main-banner'>MERN STACK DEVELOPER</span>
                </div>
              </div>
            }


            style={{ width: '100%', height: '100%', border: 'none', }}
          />

        </div>
      </div>
      <div className='bg-display-none-main-banner'>
        <div className='baanner-image-main '>
          <div className='baanner-image-main-text-center'>
            <h3 className='text-white-hwading-mian-ng'>
              HI THIS IS <span className='text-color-span-main-banner'>THIRUMANI SATISH</span> .
            </h3>
            <h3 className='text-white-hwading-mian-ng'>
              I AM A  <span className='text-color-span-main-banner'>MERN STAK DEVELOPER</span>.
            </h3>
          </div>
        </div>

      </div>
      <Technologies />
      <AboutUs />
      <OurServices />
      <Ourvalues />
      <Whoweserve />
    </>
  );
}


