
import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider';
import Technologies from './Technologies'
import OurServices from '../Whatwedo/Myexperience'
import Ourvalues from '../MyQualification/MySkills'
import Whoweserve from '../WhoWeServe/MyQualification'
import AboutUs from '../AboutUs/AboutUs'
import Projects from './Projects'

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
                <div
                  style={{
                    position: "absolute",
                    top: "60%",
                    left: "50%",
                    transform: "translate(100px, -50%)",
                    color: "#fff",
                    zIndex: "1000",
                    fontSize: "22px",
                    width: "350px",
                    fontFamily: "Miso-Light",
                    lineHeight: "1.4",
                  }}
                >
                  <h2 className="!text-[#4A148C] fw-bold mb-3">
                    Hi, I'm <span className="!text-[#00796B]">Thirumani Satish</span>
                  </h2>

                  <p
                    style={{
                      color: "#000000ff",
                      fontSize: "18px",
                      lineHeight: "1.6",
                    }}
                  >
                    As <strong>Front-End Developer</strong> with <strong>2+ years of professional experience</strong> in building high-performance, scalable, and user-centric web interfaces.
                    Specialized in <strong>React.js, Next.js, JavaScript (ES6+)</strong>, and modern UI development using <strong>Tailwind CSS, Bootstrap, and reusable component systems</strong>.
                    I engineer responsive digital experiences optimized for performance and measurable product impact.
                  </p>


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
                  <h3 className="text-color-span-main-banner fw-semibold" style={{ fontSize: "26px", letterSpacing: "1px" }}>
                    FRONT-END ENGINEER
                  </h3>
                  <p className="text-white opacity-75" style={{ fontSize: "16px" }}>
                    Developing responsive UIs with a performance-first approach <br />
                    Building reusable and structured React components <br />
                    Integrating REST APIs and third-party platform APIs <br />
                    Improving Core Web Vitals through frontend optimizations <br />
                    Understanding and contributing to monolith → micro (UI modularization & API separation)
                  </p>

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
              HI THIS IS <span className='text-color-span-main-banner'>THIRUMANI SATISH</span>
            </h3>
            <h3 className='text-white-hwading-mian-ng'>
              I AM A  <span className='text-color-span-main-banner'>MERN STACK DEVELOPER</span>
            </h3>
          </div>
        </div>

      </div>
      <Technologies />
      <AboutUs />
      <OurServices />
      <Projects />
      <Ourvalues />
      <Whoweserve />
    </>
  );
}


