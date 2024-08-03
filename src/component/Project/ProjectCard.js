import Card from 'react-bootstrap/Card';
import PropTypes from 'prop-types';
import React from 'react';
import './ProjectCard.css';

const ProjectCard = ({ image, title }) => {
  return (
    <Card className='project'>
      <div className="image-container">
        <Card.Img variant="top" src={image} alt={title} />
        <div className="text-overlay">
          <Card.Title as="h4">{title}</Card.Title>
        </div>
      </div>
    </Card>
  );
};

ProjectCard.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default ProjectCard;
