import React, { useEffect, useState } from "react";
import {
  Grid,
  GridItem,
  Image,
  Tag,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import Typist from "react-typist";

import profilePic from "../../assets/annaviraja.png";

const ProfileCard = () => {
  const [count, setCount] = useState(0);
  const typedTextBgColor = useColorModeValue("#1da1f2", "#edf2f7");
  const typedTextColor = useColorModeValue("#edf2f7", "#1da1f2");

  useEffect(() => {
    setCount(1);
  }, [count]);

  return (
    <Grid
      templateColumns={{ base: "1fr", md: "2fr 2fr", lg: "1fr 3fr" }}
      mt={10}
      p={4}
      gridColumnGap={10}
      textAlign={{ base: "center", md: "inherit" }}
    >
      <GridItem alignSelf="center">
        <Image src={profilePic} borderRadius="full" alt="Annavi Raja A" />
      </GridItem>
      <GridItem paddingTop="30px" alignSelf="center">
        <Text fontSize="2xl" fontWeight="bold">
          Hello !
        </Text>
        {count ? (
          <Typist
            cursor={{ show: false, hideWhenDone: true }}
            onTypingDone={() => setCount(0)}
          >
            <span
              style={{ fontSize: "24px", fontWeight: "bold", color: "#1da1f2" }}
            >
              I am{" "}
              <span
                style={{
                  backgroundColor: `${typedTextBgColor}`,
                  padding: "4px",
                  borderRadius: "5px",
                  color: `${typedTextColor}`,
                }}
              >
                Annavi Raja
                <Typist.Backspace count={11} delay={1250} />
                MERN FullStack Developer
                <Typist.Backspace count={24} delay={1250} />
                DotNet Developer
                {/* <Typist.Backspace count={11} delay={1250} />
                Team Player */}
              </span>
            </span>
          </Typist>
        ) : (
          ""
        )}
        <br />
        <Text fontSize="lg">
          I fell in love with programming and I have at least learnt something,
          I think..🤷‍♂️ <Tag fontSize="lg">DotNet technologies</Tag> [ASP.Net,
          MVC, SQL Server, WCF, WebAPI and MySQL] in 8 years and 2 months of total experience
          and <Tag fontSize="lg">Full Stack</Tag> [JavaScript, NodeJS, React,
          TypeScript, MongoDB, HTML, CSS and Bootstrap].
        </Text>
        <br />
        <Text fontSize="lg">
          My field of Interest's are building new{" "}
          <Tag fontSize="lg">Products</Tag>,{" "}
          <Tag fontSize="lg">Web Technologies</Tag>,{" "}
          <Tag fontSize="lg">Mobile Technologies</Tag>,{" "}
          <Tag fontSize="lg">AI and ML</Tag>. Whenever possible, I also apply my
          passion for developing products with NodeJs, Modern Javascript Library
          and ReactJs.
        </Text>
        <Text fontSize="lg">
          Currently working as a Technology Lead at{" "}
          <Tag
            as="a"
            fontSize="lg"
            href="https://www.sc.com/in/"
            target="_blank"
            rel="noreferrer"
          >
            Infosys
          </Tag>
          .
        </Text>
      </GridItem>
    </Grid>
  );
};

export default ProfileCard;
