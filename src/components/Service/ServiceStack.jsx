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
  SiGraphql,
  SiSolidity,
  SiRedux,
  SiMongodb,
  SiHtml5
} from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";
import { GrAndroid } from "react-icons/gr";
import { FaAppStoreIos } from "react-icons/fa";
import { TbBrandFirebase } from "react-icons/tb";

const techStackItems = [
  { Icon: TbBrandReactNative, label: "React Native", link:"https://reactnative.dev/" },
  { Icon: GrAndroid, label: "Android", link :"https://reactnative.dev/docs/native-components-android" },
  { Icon: FaAppStoreIos, label: "iOS" ,link :"https://reactnative.dev/docs/native-components-ios"},
  { Icon: SiRedux, label: "Redux" },
  { Icon: DiReact, label: "React" },
  { Icon: TbBrandFirebase, label: "Firebase" , color:"yellow"},
  { Icon: DiGit, label: "Git" },
  { Icon: SiHtml5, label: "HTML5" },
  { Icon: DiJavascript1, label: "JavaScript" },
  { Icon: DiNodejs, label: "Node.js" },
  { Icon: SiMongodb, label: "MongoDB" },
  { Icon: SiGraphql, label: "GraphQL" },
  { Icon: SiSolidity, label: "Solidity" },
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
