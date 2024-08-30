import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple"> Pham Vuong </span>
            from <span className="purple"> Ho Chi Minh, Vietnam. </span>I
            recently graduated with a Bachelor's degree in Information
            Technology, majoring in Information Systems, from{" "}
            <a
              target="_blank"
              href="https://hcmus.edu.vn/"
              className="purple"
              rel="noreferrer"
            >
              {" "}
              the University of Science, Ho Chi Minh City (HCMUS).{" "}
            </a>
            <br />
            <br />
            For me, programming isn't just a job—it's a way to indulge in the
            joy of life while creating meaningful benefits for others.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
            <li className="about-activity">
              <ImPointRight /> Enjoying Tea
            </li>
            <li className="about-activity">
              <ImPointRight /> Social Drinking
            </li>
          </ul>
          <p className="blockquote-footer mt-2">
            "Working is not just about completing tasks, but about creating your
            own mark and inspiring those around you."{" "}
          </p>
          <footer className="blockquote-footer">Pham Vuong</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
