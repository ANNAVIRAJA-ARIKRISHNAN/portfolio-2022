import React from "react";
import { Grid } from "@chakra-ui/layout";
import { FaExternalLinkAlt } from "react-icons/fa";
import { GoMarkGithub } from "react-icons/go";
import { Button } from "@chakra-ui/button";
import ProjectInfo from "../project-info/project-info.component";
// import ProjectMeta from "../project-meta/project-meta.component";

const ProjectContainer = ({ project }) => {
  const { name, description, image, tech, buttons } = project;
  return (
    <Grid
      padding="8px"
      color="white"
      borderRadius="base"
      bgGradient="linear-gradient(135deg, rgba(38,159,233,1) 30%, rgba(11,86,170,1) 87%)"
      _hover={{
        transform: "translateY(-2px)",
        transition: "all .2s",
      }}
      height={{ base: "auto", md: "auto" }}
    >
      <ProjectInfo
        name={name}
        tech={tech}
        description={description}
        image={image}
      />
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        {buttons.map((b) => (
          <Button
            style={{ width: "100%" }}
            as="a"
            marginLeft={{ base: "6px", md: "12px" }}
            href={b.link}
            target="_blank"
            rel="noreferrer"
            rightIcon={
              b.label === "Live" ? <FaExternalLinkAlt /> : <GoMarkGithub />
            }
          >
            {b.label}
          </Button>
        ))}
      </div>
    </Grid>
  );
};

export default ProjectContainer;
