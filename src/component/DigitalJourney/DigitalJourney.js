import React, { useState } from 'react';
import './DigitalJourney.css';
import image1 from "../../Image/DigitalImage/Image1.png";
import image2 from "../../Image/DigitalImage/achiving.webp";
import image3 from "../../Image/DigitalImage/unlocking.webp";
import image4 from "../../Image/DigitalImage/unlockingai.webp";
import image5 from "../../Image/DigitalImage/secure.webp";

const data = [
  {
    id: 1,
    title: "Transitioning to a Product-Based Approach",
    description: "Move from manual & excel based to a advanced product-based approach and elevate digital experiences that are integral success drivers.",
    image: image1
  },
  {
    id: 2,
    title: "Achieving Seamless Cloud Solution",
    description: "Eliminate business disruption during cloud implementation and experience a smooth transition with our expertise.",
    image: image2
  },
  {
    id: 3,
    title: "Unlocking Possibilities with Cutting-Edge Mobile Applications",
    description: "Our expert team crafts bespoke solutions, unlocking the full potential of your ideas and goals, ensuring a user-centric and impactful mobile app journey for your audience.",
    image: image3
  },
  {
    id: 4,
    title: "Unlocking Potential with Data & AI",
    description: "We lay the groundwork for a robust data foundation, seamlessly integrating the dynamic capabilities of AI to ensure triumph in your digital transformation.",
    image: image4
  },
  {
    id: 5,
    title: "Optimizing Data Security",
    description: "We fortify your digital defenses by establishing a rock-solid cybersecurity foundation. Harnessing the cutting-edge advancements in AI, we ensure digital resilience.",
    image: image5
  }
];

const DigitalJourney = () => {
  const [selectedId, setSelectedId] = useState(null);

  const handleClick = (id) => {
    setSelectedId(selectedId === id ? null : id);
  };

  return (
    <>
      <div className='acs-digital-main'>
        <p>We Empower You To Rise Above Any Challenge.</p>
        <h1>Customized For You and Your Digital Journey</h1>
      </div>
      <div className="acs-digital-journey">
        {data.map((item) => (
          <div key={item.id} className="acs-section">
            <div className={`acs-heading ${selectedId === item.id ? 'active' : ''}`} onClick={() => handleClick(item.id)}>
              {item.title}
              <span style={{float:'right'}} >{selectedId === item.id ? '-' : '+'}</span>
            </div>
            {selectedId === item.id && (
              <div className="acs-content">
                <img src={item.image} alt={item.title} />
                <p>{item.description}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </>
  );
};

export default DigitalJourney;
