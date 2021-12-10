import React from "react";
import { Grid, Text } from "@chakra-ui/layout";
import { Spinner } from "@chakra-ui/spinner";
import ProjectContainer from "../../components/project-container/project-container.component";
import projects from "./data";

class ProjectsPage extends React.Component {
  render() {
    return (
      <>
        <br />
        <Text fontSize="2xl" fontWeight="bold" style={{ textAlign: "center" }}>
          MERN PROJECTS
        </Text>

        <Grid
          mt={10}
          p={4}
          templateColumns={{
            base: "1fr",
            md: "repeat(2, 1fr)",
            lg: "repeat(3, 1fr)",
          }}
          gap={3}
        >
          {projects.length ? (
            projects.map((project) => (
              <ProjectContainer key={project.id} project={project} />
            ))
          ) : (
            <Spinner />
          )}
        </Grid>
      </>
    );
  }
}

export default ProjectsPage;
