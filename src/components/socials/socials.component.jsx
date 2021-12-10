import React from "react";
import { Box, Text, Flex } from "@chakra-ui/react";

import SociaLink from "../social-link/social-link.component";

import { FaLinkedin, FaGithubSquare } from "react-icons/fa";
import { FiMail, FiPhone } from "react-icons/fi";

const socialsInfo = [
  {
    name: "github",
    socialUrl: "https://github.com/ANNAVIRAJA-ARIKRISHNAN/",
    svgIcon: FaGithubSquare,
    color: "black",
  },
  {
    name: "linkedin",
    socialUrl: "https://www.linkedin.com/in/annaviraja-arikrishnan/",
    svgIcon: FaLinkedin,
    color: "linkedin",
  },
  {
    name: "mail",
    socialUrl: "mailto:annaviraja.arikrishnan@yahoo.com",
    svgIcon: FiMail,
    color: "blue",
  },
  {
    name: "phone",
    socialUrl: "https://wa.me/919791337337",
    svgIcon: FiPhone,
    color: "green",
  },
];

const Socials = () => {
  return (
    <Box p={4}>
      <Text fontSize="lg" fontWeight="bold">
        You can find me on:
      </Text>

      <br />
      <Flex maxW="240px" justify="space-between">
        {socialsInfo.map((socialInfo) => (
          <SociaLink
            key={socialInfo.name}
            color={socialInfo.color}
            socialUrl={socialInfo.socialUrl}
            svgIcon={socialInfo.svgIcon}
          />
        ))}
      </Flex>
    </Box>
  );
};

export default Socials;
