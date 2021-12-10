import React from "react";
import { Box, Grid, Text } from "@chakra-ui/react";
import SkillTag from "../skill-tag/skill-tag.component";

const tags = [
  { name: "ReactJS", colorScheme: "blue" },
  { name: "JavaScript", colorScheme: "teal" },
  { name: "TypeScript", colorScheme: "cyan" },
  { name: "Node", colorScheme: "telegram" },
  { name: "C# .NET", colorScheme: "messenger" },
  { name: "MongoDB", colorScheme: "blue" },
  { name: "SQL Server", colorScheme: "linkedin" },
  { name: "Redux", colorScheme: "red" },
  { name: "Express", colorScheme: "blue" },
  { name: "HTML5", colorScheme: "purple" },
  { name: "CSS3", colorScheme: "red" },
  { name: "Git", colorScheme: "gray" },
  { name: "VS Code", colorScheme: "pink" },
  { name: "Visual Studio", colorScheme: "yellow" },
  { name: "Postman", colorScheme: "red" },
];

const Skills = () => {
  return (
    <Box p={4}>
      <Text fontSize="lg" fontWeight="bold">
        Skills:
      </Text>
      <br />

      <Grid
        templateColumns={{
          base: "repeat(2, 1fr)",
          sm: "repeat(3, 1fr)",
          md: "repeat(4, 1fr)",
          lg: "repeat(6, 1fr)",
        }}
        gap={3}
      >
        {tags.map((tag) => (
          <SkillTag
            key={tag.name}
            tag={tag.name}
            colorScheme={tag.colorScheme}
          />
        ))}
      </Grid>
    </Box>
  );
};

export default Skills;
