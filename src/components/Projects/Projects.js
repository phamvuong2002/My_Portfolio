import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {/* Project 1 */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPaths={"bookada"}
              isBlog={false}
              title="Bookada - Realtime Recommendation on Bookstore website"
              description="I joined a project to develop a book-selling website that features real-time personalized recommendations based on user behavior. This involved using tools like Kafka and Redis for real-time data collection and processing, leveraging machine learning models through Python libraries to generate accurate recommendations, and building a fully functional and user-friendly online bookstore."
              ghLink="https://github.com/phamvuong2002/RT-Recommendation-Project"
              demoLink="https://www.youtube.com/watch?v=zkST8O6y93w"
            />
          </Col>

          {/* Project 2 */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPaths={"editor"}
              isBlog={false}
              title="Code2D - Realtime Editor"
              description="This project is a real-time collaborative code editor that allows multiple users to work together simultaneously, with a focus on supporting the creation of small, reusable components. It features integrated ChatGPT support for coding assistance and provides functionalities for saving and retrieving code. Built with Node.js for the backend and React.js for the frontend, the platform offers a seamless and interactive environment for component-based development."
              ghLink="https://github.com/phamvuong20022002/VioDontComeBack"
              // demoLink=""
            />
          </Col>

          {/* Project 3 */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPaths={"abc_store"}
              isBlog={false}
              title="ABC Food Ordering System"
              description="The ABC Food Ordering System is a web-based platform designed to streamline the process of placing and delivering food orders. It offers a comprehensive solution for customers, staff, drivers, and restaurant partners, featuring online menu browsing, order management, delivery tracking, and performance analysis to enhance the overall food ordering experience."
              ghLink="https://github.com/phamvuong2002/QLBH"
              demoLink="https://youtu.be/hqyUW80AnXk"
            />
          </Col>

          {/* Project 4 */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPaths={"wrire"}
              isBlog={false}
              title="Wrire - Author Management System"
              description="The Multi-Role Web Application is a dynamic platform designed to support multiple user roles, including Author, Editor, and Admin. Each role has specific permissions to perform their respective tasks, such as creating and managing content, providing feedback, and administering user accounts."
              ghLink="https://github.com/phamvuong2002/SE_QLTG"
              demoLink="https://youtu.be/xYRM8D0-kXw"
            />
          </Col>

          {/* Project 5 */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPaths={"ATBM"}
              isBlog={false}
              title="ATBM_AccessControl"
              description="This project implements an access control system using Role-Based Access Control (RBAC) and Basic Access Control (BAC) in C# and Oracle. The system is designed to manage permissions for different roles within an organization such as Directors, Managers, Employees, and other custom roles. Each role has specific permissions to access and perform actions within the system, ensuring secure and efficient management of user access rights."
              ghLink="https://github.com/phamvuong2002/ATBM_AccessControl"
              demoLink="https://youtu.be/rQb3RDh7BFg"
            />
          </Col>

          {/* Project 6 */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPaths={"sorai"}
              isBlog={false}
              title="Web Interface Refresh for SORAI ELECTRONICS"
              description="This project revitalizes the web interface of SORAI ELECTRONICS using ReactJS and Vite. The new design enhances user experience, showcases products, and integrates key information from the old website. It features a modern UI, improved performance, and a responsive layout for all devices."
              ghLink="https://github.com/phamvuong2002/Sorai_Frontend"
              // demoLink=""
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
