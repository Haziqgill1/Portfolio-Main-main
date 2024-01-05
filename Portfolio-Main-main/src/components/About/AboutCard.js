import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            I'm Haziq Shahbaz, a recent graduate from{" "}
            <span className="purple">FAST-NUCES</span> with a passion for
            creating dynamic applications using the MERN stack. My expertise
            extends to both frontend and backend development, showcasing a
            strong foundation in Object-Oriented Programming (OOP). Known for
            being a quick learner, I possess a robust understanding of
            databases, data structures, and artificial intelligence. I am
            enthusiastic about exploring new technologies and am open to working
            with different stacks. My commitment to continuous learning and
            versatile skill set makes me a valuable asset for innovative
            projects
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
