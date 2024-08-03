import { Container, Carousel } from 'react-bootstrap';
import ProjectCard from './ProjectCard';
import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import projectImage1 from "../../Image/ProjectImage/PorojectImage1.jpg"; 
import projectImage2 from "../../Image/ProjectImage/img2.jpg"
import projectImage3 from "../../Image/ProjectImage/img3.jpg"
import projectImage4 from "../../Image/ProjectImage/Img4.jpg"
import projectImage5 from "../../Image/ProjectImage/Img5.jpg"
const data = [
  {
    projects: [
      {
        image: projectImage2,
        title: "MINISTRY OF FINANCE",
      },
      {
        image: projectImage1,
        title: "IKUSI",
      },
      {
        image: projectImage3,
        title: "CENTURY COMMUNICATION LTD.",
      },
      {
        image: projectImage5,
        title: "NAGGARO",
      },
      {
        image: projectImage4,
        title: "WALLMAX",
      },
      {
        image: projectImage5,
        title: "UNITED COLORS OF BENETTON",
      },
    ]
  }
];

const Project = () => {
  const projects = data[0].projects;
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const groupedProjects = [];

  for (let i = 0; i < projects.length; i += isMobile ? 1 : 3) {
    groupedProjects.push(projects.slice(i, i + (isMobile ? 1 : 3)));
  }

  return (
    <>
      <div style={{ textAlign: 'center', margin: '20px', fontSize: '30px', marginBottom: "5%" , marginTop: "5%" }}>
        <h1>Our Projects</h1>
        <p>We Cover Your Connected IT Ecosystem.</p>
      </div>
      <Container className='d-flex flex-wrap justify-content-center'>
        <Carousel interval={3000}>
          {groupedProjects.map((group, index) => (
            <Carousel.Item key={index}>
              <div className='d-flex justify-content-center'>
                {group.map((project, idx) => (
                  <ProjectCard key={idx} {...project} />
                ))}
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
      </Container>
    </>
  );
};

export default Project;
