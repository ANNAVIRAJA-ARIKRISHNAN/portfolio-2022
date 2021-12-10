import React from "react";
import { GridItem, Heading, Text } from "@chakra-ui/layout";
import { Image } from "@chakra-ui/react";

const ProjectInfo = ({ name, description, image, tech }) => {
  const technologies = tech.split(",");
  return (
    <GridItem alignSelf="start">
      <Heading
        fontSize={{ base: "14px", md: "16px", lg: "18px" }}
        paddingBottom="2px"
      >
        {name}
      </Heading>
      <Text
        style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
      >
        {technologies.map((t) => (
          <span
            key={t}
            style={{
              fontSize: "12px",
              background: "grey",
              padding: "3px 6px",
              margin: "3px",
            }}
          >
            {t}
          </span>
        ))}
      </Text>
      {/* <Text fontSize={{ base: "10px", md: "12px", lg: "13px" }}>{tech}</Text> */}
      <Image src={image} alt={name} />
      <Text fontSize={{ base: "10px", md: "12px", lg: "13px" }}>
        {description}
      </Text>
    </GridItem>
  );
};

export default ProjectInfo;
