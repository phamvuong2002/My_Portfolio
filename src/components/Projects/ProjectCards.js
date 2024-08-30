import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";
import { SwiperImages } from "../Swiper/SwiperImages";

// Sử dụng require.context để lấy tất cả file ảnh trong thư mục mẹ và các thư mục con
const parentDirectory = require.context(
  "../../Assets/Projects",
  true, // true để include các thư mục con
  /\.(png|jpe?g|svg)$/ // chỉ lấy các file ảnh
);

const importImagesFromSubfolder = (subfolderName) => {
  // Lọc ảnh dựa trên tên thư mục con
  return parentDirectory
    .keys()
    .filter((fileName) => fileName.includes(`./${subfolderName}/`))
    .map(parentDirectory);
};

function ProjectCards(props) {
  const images = importImagesFromSubfolder(props.imgPaths);
  return (
    <Card className="project-card-view">
      <Card.Header
        style={{
          height: "13.5rem",
          alignItems: "center",
          paddingTop: "1.2rem",
        }}
      >
        <SwiperImages images={images} />
      </Card.Header>
      <Card.Body style={{ paddingTop: "0" }}>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
        <Button variant="primary" href={props.ghLink} target="_blank">
          <BsGithub /> &nbsp;
          {props.isBlog ? "Blog" : "GitHub"}
        </Button>
        {"\n"}
        {"\n"}

        {/* If the component contains Demo link and if it's not a Blog then, it will render the below component  */}

        {!props.isBlog && props.demoLink && (
          <Button
            variant="primary"
            href={props.demoLink}
            target="_blank"
            style={{ marginLeft: "10px" }}
          >
            <CgWebsite /> &nbsp;
            {"Demo"}
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
