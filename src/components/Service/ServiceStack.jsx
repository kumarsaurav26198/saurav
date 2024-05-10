import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiGit,
} from "react-icons/di";
import {
  Si1Password,
  SiJira,
  SiRedux,
  SiMongodb,
  SiHtml5,
  SiExpo,
  SiTypescript
} from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";
import { GrAndroid } from "react-icons/gr";
import { FaAppStoreIos } from "react-icons/fa";
import { TbBrandFirebase } from "react-icons/tb";

const techStackItems = [
  { Icon: TbBrandReactNative, label: "React Native", link:"https://www.youtube.com/watch?v=6oFuwhIibo4&ab_channel=ProgrammingwithMosh" },
  { Icon: SiExpo, label: "Expo",link:"https://www.youtube.com/watch?v=q-sKCsscIsc&ab_channel=SimonGrimm" },
  { Icon: GrAndroid, label: "Android", link :"https://reactnative.dev/docs/native-components-android" },
  { Icon: FaAppStoreIos, label: "iOS" ,link :"https://reactnative.dev/docs/native-components-ios"},
  { Icon: SiRedux, label: "Redux", link:"https://redux.js.org/introduction/getting-started" },
  { Icon: DiReact, label: "React",link:"https://react.dev/" },
  { Icon: TbBrandFirebase, label: "Firebase" , color:"yellow" ,link:"https://rnfirebase.io/"},
  { Icon: DiGit, label: "Git" ,link:"https://git-scm.com/about"},
  { Icon: SiHtml5, label: "HTML5", link:"https://www.w3schools.com/html/html_intro.asp" },
  { Icon: DiJavascript1, label: "JavaScript",link:"https://www.w3schools.com/js/" },
  { Icon: SiTypescript, label: "TypeScript",link:"https://www.w3schools.com/typescript/" },
  { Icon: DiNodejs, label: "Node.js" ,link:"https://nodejs.org/en/about"},
  { Icon: SiMongodb, label: "MongoDB", link:"https://www.mongodb.com/company/what-is-mongodb" },
  { Icon: SiJira, label: "Jira",link:"https://www.atlassian.com/software/jira" },
  { Icon: Si1Password, label: "1Password" },
];

const ServiceStack = () => {
  const handleIconClick = (link) => {
    if (link) {
      window.open(link, "_blank");
    }
  };

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {techStackItems.map((item, index) => (
        <Col key={index} xs={4} md={2} className="tech-icons">
          <div onClick={() => handleIconClick( item.link)}>
            <item.Icon color="white" />
          </div>
        </Col>
      ))}
    </Row>
  );
}

export default ServiceStack;
