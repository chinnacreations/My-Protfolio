import React, { useEffect, useState, useRef } from "react";
import emailjs from '@emailjs/browser';
import { useNavigate, useLocation } from "react-router-dom";
import Modal from 'react-modal';
import { AiOutlineClose } from "react-icons/ai";
import { HiOutlineChatBubbleOvalLeft } from "react-icons/hi2";

Modal.setAppElement('#root');


const ChatBot = () => {
  const form = useRef();
  const navigate = useNavigate();
  const location = useLocation();
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    from_name: "",
    email: "",
    message: "",
    contact_id: "",
  });

  const [formErrors, setFormErrors] = useState({
    from_name: "",
    email: "",
    message: "",
    contact_id: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      emailjs
      .sendForm('service_d22xa1m', 'template_bqntnf5', form.current, {
        publicKey: 'VmMDEEGy_9rRK0236',
        })
        .then(
          () => {
            navigate('/contact/successGIT');
            closeModal();
            console.log("Success");
          },
          (error) => {
            console.log('FAILED...', error.text);
          }
        );
    }
  };

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const validateForm = () => {
    let valid = true;
    const errors = {};
    if (!formData.from_name.trim()) {
      errors.from_name = "Name is required";
      valid = false;
    }
    if (!formData.email.trim()) {
      errors.email = "Email is required";
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Email is invalid";
      valid = false;
    }
    if (!formData.contact_id.trim()) {
      errors.contact_id = "Phone Number is required";
      valid = false;
    } else if (!/^[0-9]+$/.test(formData.contact_id)) {
      errors.contact_id = "Phone Number should contain only numbers";
      valid = false;
    }
    setFormErrors(errors);
    return valid;
  };

  

  return (
    <div>
      <div className="chaticon">
      <HiOutlineChatBubbleOvalLeft className="chat-flot" onClick={openModal} />
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        className="popup-content" // Use the class name for modal content styling
        overlayClassName="modal-overlay" // Use the class name for overlay styling
      >
        <>
          <div className="modal-body modal-form">
            <form ref={form} onSubmit={handleSubmit} className=''>
              <div>
                <label className='auto-popup-label' htmlFor="name">Name:</label>
                <input
                  type="text"
                  id="name"
                  name="from_name"
                  value={formData.from_name}
                  onChange={handleInputChange}
                  className='form-control'
                />
                {formErrors.from_name && <p className="error-message text-danger">{formErrors.from_name}</p>}
              </div>

              <div>
                <label className='auto-popup-label' htmlFor="contact_id">Phone Number:</label>
                <input
                  type="Number"
                  id="contact_id"
                  name="contact_id"
                  value={formData.contact_id}
                  onChange={handleInputChange}
                  className='form-control'
                />
                {formErrors.contact_id && <p className="error-message text-danger">{formErrors.contact_id}</p>}
              </div>
              <div>
                <label className='auto-popup-label' htmlFor="email">Email:</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className='form-control'
                />
                {formErrors.email && <p className="error-message text-danger">{formErrors.email}</p>}
              </div>
              <div>
                <label className='auto-popup-label' htmlFor="message">Message:</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  className='form-control'
                />
              </div>

              <button type="submit" className='btn btn-primary mt-2'>Submit</button>
            </form>
          </div>
          <div className="modal-footer">
            <AiOutlineClose className='close-btn text-white pointer' onClick={closeModal} />
          </div>
        </>
      </Modal>
    </div>
  );
};

export default ChatBot;
