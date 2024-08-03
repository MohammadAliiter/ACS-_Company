import React, { useEffect, useRef, useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import './Sec1.css';
import Image from '../../Image/Image.webp';
import FormData from '../../globalComponent/Form/FormData'; 

function Sec1() {
  const [isVisible, setIsVisible] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.3,
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  return (
    <>
      <div ref={containerRef} className={`acs_main_container ${isVisible ? 'visible' : ''}`}>
        <div className='text_container'>
          <h1>Ready to Embrace New Opportunities and Thrive?</h1>
          <p>Every great partnership starts with a conversation. Let's begin ours.</p>
          <Button onClick={handleShowModal}>Register Here</Button>
        </div>
        <div className='image_container'>
          <img src={Image} alt='referenceImage' />
        </div>
      </div>

      <Modal show={showModal} onHide={handleCloseModal} centered>
        <Modal.Header closeButton>
          <Modal.Title>Register</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FormData />
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Sec1;
