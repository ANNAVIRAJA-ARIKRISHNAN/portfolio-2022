import React from "react";
import { GoLink, GoMarkGithub, GoStar, GoRepoForked } from "react-icons/go";
import { Grid, GridItem, Badge } from "@chakra-ui/layout";
import Icon from "@chakra-ui/icon";

const ProjectMeta = ({ projectMeta }) => {
  const { language, stargazers_count, forks_count, html_url, homepage } =
    projectMeta;

  return (
    <GridItem alignSelf="end">
      <Grid templateColumns="2.4fr 1.6fr">
        <GridItem>
          {language != null ? (
            <Badge marginRight="4px">{language}</Badge>
          ) : null}
          {stargazers_count >= 0 ? (
            <span style={{ marginRight: "4px" }}>
              <Icon as={GoStar} />
              {stargazers_count}
            </span>
          ) : null}
          {forks_count >= 0 ? (
            <span style={{ marginRight: "4px" }}>
              <Icon as={GoRepoForked} />
              {forks_count}
            </span>
          ) : null}
        </GridItem>
        <GridItem justifySelf="end">
          <a href={html_url} target="_blank" rel="noreferrer">
            <Icon as={GoMarkGithub} />
          </a>
          {homepage ? (
            <a
              href={homepage}
              target="_blank"
              rel="noreferrer"
              style={{ marginLeft: "6px" }}
            >
              <Icon as={GoLink} />
            </a>
          ) : null}
        </GridItem>
      </Grid>
    </GridItem>
  );
};

export default ProjectMeta;
