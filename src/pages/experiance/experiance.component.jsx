import React from "react";
import { Text } from "@chakra-ui/react";
import { Image } from "@chakra-ui/image";
import { Box, Grid } from "@chakra-ui/layout";
import { Spinner } from "@chakra-ui/spinner";
import { ExperienceData, QualificationData, AwardsData } from "./data";

class ExperiancePage extends React.Component {
  render() {
    return (
      <>
        <Text fontSize="2xl" fontWeight="bold" style={{ textAlign: "center" }}>
          WORK EXPERIANCE
        </Text>
        <Grid
          mt={10}
          p={4}
          templateColumns={{
            base: "1fr",
            sm: "repeat(2, 1fr)",
            md: "repeat(3, 1fr)",
          }}
          gap={3}
        >
          {ExperienceData.length ? (
            ExperienceData.map((exp) => (
              <Box
                style={{ border: "3px solid pink", padding: "10px" }}
                key={exp.title}
                as="a"
                m={2}
                href={exp.link}
                target="_blank"
                rel="noreferrer"
                position="relative"
                _hover={{
                  transform: "translateY(-2px)",
                  transition: "all .2s",
                }}
              >
                <Text
                  style={{ textAlign: "center", marginBottom: "10px" }}
                  fontSize="20"
                  fontWeight="bold"
                >
                  {exp.title}
                </Text>
                <Image
                  src={exp.image}
                  alt={exp.title}
                  borderRadius="base"
                  style={{
                    width: "25%",
                    marginLeft: "auto",
                    marginRight: "auto",
                    marginBottom: "10px",
                  }}
                />
                <Box>
                  <Text style={{ textAlign: "center", marginBottom: "10px" }}>
                    {exp.designation}
                  </Text>
                  <Text style={{ textAlign: "center", marginBottom: "10px" }}>
                    {exp.experiance}
                  </Text>
                  <Text
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      justifyContent: "center",
                    }}
                  >
                    {exp.detail.split(",").map((t) => (
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
                  <Text style={{ textAlign: "center", marginBottom: "10px" }}>
                    {exp.time}
                  </Text>
                </Box>
              </Box>
            ))
          ) : (
            <Spinner />
          )}
        </Grid>
        <br />
        <br />
        <br />
        <Text fontSize="2xl" fontWeight="bold" style={{ textAlign: "center" }}>
          EDUCATIONAL QUALIFICATIONS
        </Text>
        <Grid
          mt={10}
          p={4}
          templateColumns={{
            base: "1fr",
            sm: "repeat(2, 1fr)",
            md: "repeat(3, 1fr)",
          }}
          gap={3}
        >
          {QualificationData.length ? (
            QualificationData.map((qualification) => (
              <Box
                style={{ border: "3px solid green", padding: "10px" }}
                key={qualification.title}
                as=""
                m={2}
                position="relative"
                _hover={{
                  transform: "translateY(-2px)",
                  transition: "all .2s",
                }}
              >
                <Text
                  style={{ textAlign: "center", marginBottom: "10px" }}
                  fontSize="20"
                  fontWeight="bold"
                >
                  {qualification.title}
                </Text>
                <Box>
                  <Text style={{ textAlign: "center", marginBottom: "10px" }}>
                    {qualification.university}
                  </Text>
                  <Text style={{ textAlign: "center", marginBottom: "10px" }}>
                    {qualification.college}
                  </Text>
                  <Text
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      justifyContent: "center",
                    }}
                  >
                    {qualification.percentage}
                  </Text>
                  <Text style={{ textAlign: "center", marginBottom: "10px" }}>
                    {qualification.year}
                  </Text>
                </Box>
              </Box>
            ))
          ) : (
            <Spinner />
          )}
        </Grid>
        <br />
        <br />
        <br />
        <Text fontSize="2xl" fontWeight="bold" style={{ textAlign: "center" }}>
          AWARDS & ACHIVEMENTS
        </Text>
        <Grid
          mt={10}
          p={4}
          templateColumns={{
            base: "1fr",
            sm: "repeat(2, 1fr)",
            md: "repeat(3, 1fr)",
          }}
          gap={3}
        >
          {AwardsData.length ? (
            AwardsData.map((award) => (
              <Box
                style={{ border: "3px solid yellow", padding: "10px" }}
                key={award.title}
                as="a"
                m={2}
                href={award.link}
                target="_blank"
                rel="noreferrer"
                position="relative"
                _hover={{
                  transform: "translateY(-2px)",
                  transition: "all .2s",
                }}
              >
                <Text
                  style={{ textAlign: "center", marginBottom: "10px" }}
                  fontSize="20"
                  fontWeight="bold"
                >
                  {award.title}
                </Text>
                <Image
                  src={award.image}
                  alt={award.title}
                  borderRadius="base"
                  style={{
                    width: "25%",
                    marginLeft: "auto",
                    marginRight: "auto",
                    marginBottom: "10px",
                  }}
                />
                <Box>
                  <Text style={{ textAlign: "center", marginBottom: "10px" }}>
                    {award.prize}
                  </Text>
                  <Text style={{ textAlign: "center", marginBottom: "10px" }}>
                    {award.year}
                  </Text>
                </Box>
              </Box>
            ))
          ) : (
            <Spinner />
          )}
        </Grid>
      </>
    );
  }
}

export default ExperiancePage;
