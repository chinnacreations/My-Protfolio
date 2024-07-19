// import React, { useState, useRef } from "react";
// import axios from "axios";
// import Swal from "sweetalert2";
// import withReactContent from "sweetalert2-react-content";
// import contactImg from "../../public/images/Logo/contact.png";
// import baseUrl from "../../utils/baseUrl";
// import { CiMail, CiLocationOn } from "react-icons/ci";
// import { BsTelephone } from "react-icons/bs";
// import PageBanner from '../Common/PageBanner'
// import { FormatColorTextTwoTone } from "@mui/icons-material";
// import emailjs from '@emailjs/browser'
// import { useNavigate } from "react-router-dom";

// const MySwal = withReactContent(Swal);



// // Form initial state
// const INITIAL_STATE = {
//   from_name: "",
//   email: "",
//   contact_id: "",
//   message: "",
// };

// const INITIAL_ERRORS = {
//   from_name: "",
//   email: "",
//   contact_id: "",
//   message: "",
// };


// const ContactForm = () => {
//   const navigate = useNavigate()
//   const [contact, setContact] = useState(INITIAL_STATE);
//   const [errors, setErrors] = useState(INITIAL_ERRORS);
//   const [isCheckboxChecked, setIsCheckboxChecked] = useState(false);
//   const form = useRef();

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setContact((prevState) => ({ ...prevState, [name]: value }));
//     // console.log(contact)
//   };


//   const handleSelectChange = (e) => {
//     const { name, value } = e.target;
//     setContact((prevContact) => ({
//       ...prevContact,
//       [name]: value,
//     }));
//   };

//   const handleCheckboxChange = (e) => {
//     setIsCheckboxChecked(e.target.checked);
//   };

//   const sendEmail = (e) => {
//     e.preventDefault();

//     if (validate()) {
//       emailjs
//         .sendForm('service_d22xa1m', 'template_bqntnf5', form.current, {
//           publicKey: 'VmMDEEGy_9rRK0236',
//         })
//         .then(
//           () => {
//             navigate('/contact');
//           },
//           (error) => {
//             console.log('FAILED...', error.text);
//           },
//         );
//     }
//   };

//   const validate = () => {
//     let tempErrors = { ...INITIAL_ERRORS };
//     let isValid = true;

//     if (!contact.from_name.trim()) {
//       tempErrors.from_name = "Name is required.";
//       isValid = false;
//     }
//     if (!contact.email.trim()) {
//       tempErrors.email = "Email is required.";
//       isValid = false;
//     } else if (!/\S+@\S+\.\S+/.test(contact.email)) {
//       tempErrors.email = "Email is not valid.";
//       isValid = false;
//     }
//     if (!contact.contact_id.trim()) {
//       tempErrors.contact_id = "Phone number is required.";
//       isValid = false;
//     } else if (!/^\d+$/.test(contact.contact_id)) {
//       tempErrors.contact_id = "Phone number is not valid.";
//       isValid = false;
//     }
//     if (!contact.message.trim()) {
//       tempErrors.message = "Message is required.";
//       isValid = false;
//     }

//     setErrors(tempErrors);
//     return isValid;
//   };

//   return (
//     <>
//       <PageBanner pageTitle="Contact Us" />

//       <div className="contact-info-area">
//         <div className="container">
//           <div className="row justify-content-center">
//             <div className="col-lg-4 col-md-6 col-sm-6">
//               <div className="contact-info-box">
//                 <div className="icon">
//                   <CiMail />
//                 </div>
//                 <h3>Email</h3>
//                 <p>
//                   <a href="mailto:satishthirumani1999@gmail.com">satishthirumani1999@gmail.com</a>
//                 </p>
//               </div>
//             </div>

//             <div className="col-lg-4 col-md-6 col-sm-6">
//               <div className="contact-info-box">
//                 <div className="icon">
//                   <CiLocationOn />
//                 </div>
//                 <h3>Location</h3>
//                 <p>
//                 Permanent Address :
//                 </p>
//                 <p>
//                 #1-142, Garesepudi, Kruthivennu mandal,Machlipatnam, Krishna Dist, 521324, Andhra Pradesh.
//                 </p>
//                 <hr />
//                 <p>
//                   Present Address:
//                 </p>
//                 <p>12-4-136/4/B, Pragathi nagar, Moosapet, Hyderabad, Telangana</p>
//               </div>
//             </div>

//             <div className="col-lg-4 col-md-6 col-sm-6">
//               <div className="contact-info-box">
//                 <div className="icon">
//                   <BsTelephone />
//                 </div>
//                 <h3>Phone</h3>
//                 <p>
//                 <a href="tel:+919160591908">9160591908</a>
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
      
//       <div className="contact-area ptb-80">
//         <div className="container">
//           <div className="section-title">
//             <h2>Get In Touch</h2>
//             <div className="bar"></div>
//             <p>Anything On your Mind. We’ll Be Glad To Assist You!</p>
//           </div>

//           <div className="row align-items-center">
//             <div className="col-lg-6 col-md-12">
//               <img
//                 src={contactImg}
//                 alt="contact"
//                 className="contact-img"
//                 width={685}
//                 height={694}
//               />
//             </div>

//             <div className="col-lg-6 col-md-12 res-mt-sm">

//               <form ref={form} onSubmit={sendEmail} >
//                 <div className="row">
//                   <div className="col-lg-12 col-md-12">
//                     <div className="form-group">
//                       <input
//                         type="text"
//                         name="from_name"
//                         placeholder="Name"
//                         className="form-control"
//                         value={contact.from_name}
//                         onChange={handleChange}
//                         required
//                       />
//                       {errors.from_name && <p className="text-danger">{errors.from_name}</p>}
//                     </div>
//                   </div>

//                   <div className="col-lg-12 col-md-12">
//                     <div className="form-group">
//                       <input
//                         type="text"
//                         name="email"
//                         placeholder="Email address"
//                         className="form-control"
//                         value={contact.email}
//                         onChange={handleChange}
//                         required
//                       />
//                       {errors.email && <p className="text-danger">{errors.email}</p>}
//                     </div>
//                   </div>

//                   <div className="col-lg-12 col-md-12">
//                     <div className="form-group">
//                       <input
//                         type="text"
//                         name="contact_id"
//                         placeholder="Phone number"
//                         className="form-control"
//                         value={contact.contact_id}
//                         onChange={handleChange}
//                         required
//                       />
//                       {errors.contact_id && <p className="text-danger">{errors.contact_id}</p>}
//                     </div>
//                   </div>

//                   <div className="col-lg-12 col-md-12">
//                     <div className="form-group">
//                       <textarea
//                         name="message"
//                         cols="30"
//                         rows="5"
//                         placeholder="Write message..."
//                         className="form-control"
//                         value={contact.message}
//                         onChange={handleChange}
//                         required
//                       />
//                       {errors.message && <p className="text-danger">{errors.message}</p>}
//                     </div>

//                     <div className="form-check">
//                       <input
//                         className="form-check-input"
//                         type="checkbox"
//                         value=""
//                         id="flexCheckDefault"
//                         onChange={handleCheckboxChange}
//                       />
//                       <label
//                         className="form-check-label"
//                         htmlFor="flexCheckDefault"
//                       >
//                         By checking this, you agree to our{" "}
//                         <a href="/terms-conditions">Terms</a> and{" "}
//                         <a href="/privacy-policy">Privacy policy</a>.
//                       </label>
//                     </div>
//                   </div>
//                   <div className="col-lg-12 col-sm-12">
//                     <button type="submit" className="btn btn-primary" disabled={!isCheckboxChecked}>
//                       Send Message
//                     </button>
//                   </div>
//                 </div>
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default ContactForm;


import React, { useState, useRef } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import contactImg from "../../public/images/Logo/contact.png";
import baseUrl from "../../utils/baseUrl";
import { CiMail, CiLocationOn } from "react-icons/ci";
import { BsTelephone } from "react-icons/bs";
import PageBanner from '../Common/PageBanner'
import { FormatColorTextTwoTone } from "@mui/icons-material";
import emailjs from '@emailjs/browser'
import { useNavigate } from "react-router-dom";
import { MdOutlineContactSupport } from "react-icons/md";
import { FaXTwitter, FaLinkedinIn, FaWhatsapp, FaFacebookF } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
const MySwal = withReactContent(Swal);

// Form initial state
const INITIAL_STATE = {
  from_name: "",
  email: "",
  contact_id: "",
  message: "",
};

const INITIAL_ERRORS = {
  from_name: "",
  email: "",
  contact_id: "",
  message: "",
};

const ContactForm = () => {

  const handleWhatsAppClick = () => {
    const phoneNumber = '9908022727';
    const message = 'Hello Data Meadows, Im interested in your services and would appreciate it if you could share a quotation.Thank you!'; // Optional: Replace with your message
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, '_blank', 'noopener noreferrer');
  };
  
  const navigate = useNavigate();
  const [contact, setContact] = useState(INITIAL_STATE);
  const [errors, setErrors] = useState(INITIAL_ERRORS);
  const [isCheckboxChecked, setIsCheckboxChecked] = useState(false);
  const form = useRef();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContact((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSelectChange = (e) => {
    const { name, value } = e.target;
    setContact((prevContact) => ({
      ...prevContact,
      [name]: value,
    }));
  };

  const handleCheckboxChange = (e) => {
    setIsCheckboxChecked(e.target.checked);
  };

  const sendEmail = (e) => {
    e.preventDefault();

    if (validate()) {
      emailjs
        .sendForm('service_d22xa1m', 'template_bqntnf5', form.current, {
          publicKey: 'VmMDEEGy_9rRK0236',
        })
        .then(
          () => {
            setContact(INITIAL_STATE);
            navigate('/contact');
          },
          (error) => {
            console.log('FAILED...', error.text);
          },
        );
    }
  };

  const validate = () => {
    let tempErrors = { ...INITIAL_ERRORS };
    let isValid = true;

    if (!contact.from_name.trim()) {
      tempErrors.from_name = "Name is required.";
      isValid = false;
    }
    if (!contact.email.trim()) {
      tempErrors.email = "Email is required.";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(contact.email)) {
      tempErrors.email = "Email is not valid.";
      isValid = false;
    }
    if (!contact.contact_id.trim()) {
      tempErrors.contact_id = "Phone number is required.";
      isValid = false;
    } else if (!/^\d+$/.test(contact.contact_id)) {
      tempErrors.contact_id = "Phone number is not valid.";
      isValid = false;
    }
    if (!contact.message.trim()) {
      tempErrors.message = "Message is required.";
      isValid = false;
    }

    setErrors(tempErrors);
    return isValid;
  };

  return (
    <>
      <PageBanner pageTitle="Contact Us" />

      <div className="contact-info-area">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="contact-info-box">
                <div className="icon">
                  <CiMail />
                </div>
                <h3>Email</h3>
                <p>
                  <a href="mailto:satishthirumani1999@gmail.com">satishthirumani1999@gmail.com</a>
                </p>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="contact-info-box">
                <div className="icon">
                  <CiLocationOn />
                </div>
                <h3>Location</h3>
                <p>
                  Permanent Address :
                </p>
                <p>
                  #1-142, Garesepudi, Kruthivennu mandal, Machlipatnam, Krishna Dist, 521324, Andhra Pradesh.
                </p>
                <hr />
                <p>
                  Present Address:
                </p>
                <p>12-4-136/4/B, Pragathi nagar, Moosapet, Hyderabad, Telangana</p>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="contact-info-box">
                <div className="icon">
                  <BsTelephone />
                </div>
                <h3>Phone</h3>
                <p>
                  <a href="tel:+919160591908">9160591908</a>
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="contact-info-box">
                <div className="icon">
                <MdOutlineContactSupport />
                </div>
                <h3>Contact Us</h3>
                <div
              className="col-lg-3 col-md-6"
              data-aos="fade-in"
              data-aos-delay="400"
              data-aos-duration="500"
              data-aos-once="true"
            >
              <div className="single-footer-widget">
                <ul className="social-links text-center d-flex">
                  <li>
                    <a
                      href="tel:+919160591908"
                      className="whatsapp"
                      target="_blank"
                      onClick={handleWhatsAppClick}
                    >
                      <FaWhatsapp />
                    </a>
                  </li>

                  <li>
                    <a
                      href="https://x.com/satishthiruman?t=us8fPMHUkYWZLOdIRYuAHg&s=09"
                      className="twitter twitter-contact-page"
                      target="_blank"
                    >
                      <FaXTwitter />
                    </a>
                  </li>


                  <li>
                    <a
                      href="https://www.linkedin.com/in/chinnacreations"
                      className="linkedin"
                      target="_blank"
                    >
                      <FaLinkedinIn />
                    </a>
                  </li>

                  <li>
                    <a
                      href="https://www.instagram.com/chinna_creations_0191?igsh=dHo3YWNreGxoYzR2"
                      className="instagram"
                      target="_blank"
                    >
                      <FaInstagram />
                    </a>
                  </li>

                  <li>
                    <a
                      href="https://www.facebook.com/profile.php?id=61562227289264&mibextid=ZbWKwL"
                      className="facebook"
                      target="_blank"
                    >
                      <FaFacebookF />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="contact-area ptb-80">
        <div className="container">
          <div className="section-title">
            <h2>Get In Touch</h2>
            <div className="bar"></div>
            <p>Anything On your Mind. We’ll Be Glad To Assist You!</p>
          </div>

          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <img
                src={contactImg}
                alt="contact"
                className="contact-img"
                width={685}
                height={694}
              />
            </div>

            <div className="col-lg-6 col-md-12 res-mt-sm">

              <form ref={form} onSubmit={sendEmail}>
                <div className="row">
                  <div className="col-lg-12 col-md-12">
                    <div className="form-group">
                      <input
                        type="text"
                        name="from_name"
                        placeholder="Name"
                        className="form-control"
                        value={contact.from_name}
                        onChange={handleChange}
                        required
                      />
                      {errors.from_name && <p className="text-danger">{errors.from_name}</p>}
                    </div>
                  </div>

                  <div className="col-lg-12 col-md-12">
                    <div className="form-group">
                      <input
                        type="text"
                        name="email"
                        placeholder="Email address"
                        className="form-control"
                        value={contact.email}
                        onChange={handleChange}
                        required
                      />
                      {errors.email && <p className="text-danger">{errors.email}</p>}
                    </div>
                  </div>

                  <div className="col-lg-12 col-md-12">
                    <div className="form-group">
                      <input
                        type="text"
                        name="contact_id"
                        placeholder="Phone number"
                        className="form-control"
                        value={contact.contact_id}
                        onChange={handleChange}
                        required
                      />
                      {errors.contact_id && <p className="text-danger">{errors.contact_id}</p>}
                    </div>
                  </div>

                  <div className="col-lg-12 col-md-12">
                    <div className="form-group">
                      <textarea
                        name="message"
                        cols="30"
                        rows="5"
                        placeholder="Write message..."
                        className="form-control"
                        value={contact.message}
                        onChange={handleChange}
                        required
                      />
                      {errors.message && <p className="text-danger">{errors.message}</p>}
                    </div>

                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                        onChange={handleCheckboxChange}
                      />
                      <label
                        className="form-check-label"
                        htmlFor="flexCheckDefault"
                      >
                        By checking this, you agree to our{" "}
                        <a href="/terms-conditions">Terms</a> and{" "}
                        <a href="/privacy-policy">Privacy policy</a>.
                      </label>
                    </div>
                  </div>
                  <div className="col-lg-12 col-sm-12">
                    <button type="submit" className="btn btn-primary" disabled={!isCheckboxChecked}>
                      Send Message
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactForm;
