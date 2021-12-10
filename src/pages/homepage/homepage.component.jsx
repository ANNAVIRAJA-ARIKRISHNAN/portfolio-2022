import React from 'react';
import { Box } from '@chakra-ui/layout';

import ProfileCard from '../../components/profile-card/profile-card.component';
import Skills from '../../components/skills/skills.component';
import Socials from '../../components/socials/socials.component';

const HomePage = () => {
  return (
    <Box>
      <ProfileCard />
      <Socials />
      <Skills />
    </Box>
  );
};

export default HomePage;
