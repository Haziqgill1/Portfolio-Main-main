import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/asa.png";
import emotion from "../../Assets/Projects/blog.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/on.png";
import bitsOfCode from "../../Assets/Projects/d.jpg";

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
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="SportiX FYP"
              description="SportiX is a dynamic platform that caters to sports administrators and students alike. For sports officers, the web application offers comprehensive functionalities such as inventory management, schedule coordination, result management, and even team auctions. On the flip side, the mobile application empowers students to effortlessly check the availability of sports equipment, make online bookings, participate in team auctions, and stay updated on game results and schedules"
              ghLink="https://github.com/Haziqgill1/Final-Year-Project-Sportix"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="
              Point of Sale system For chemical Trade Business"
              description="In this endeavor, I crafted a robust POS system catering specifically to a chemical trade business. The system facilitates the purchase of various products from companies, subsequently selling them to farmers through three transaction modes: Credit, Advance booking, and Cash. Notably, digital ledgers are maintained for both companies and farmers, ensuring a transparent and efficient record of all transactions."
              ghLink="https://github.com/Haziqgill1/POS"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="
              Student Management System"
              ghLink="https://github.com/Haziqgill1/Student-Management-System"
          
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Data Structure Visualizer"
              description=""
              ghLink="https://github.com/Haziqgill1/DatStructure_Visualizer"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Online Retail Store Data Analysis"
              ghLink="https://github.com/Haziqgill1/DataAnalysis_OnlineRetailStore"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="The Property Buy and Sell Application"
              description="The Property Buy and Sell Application project is a dynamic initiative that aims to develop a user-friendly
              online platform facilitating property transactions. This application, leveraging ASP.NET for the frontend
              and SQL Server with Entity Framework Core for the backend, empowers users to list, search, and engage
              in the buying and selling process seamlessly."
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
