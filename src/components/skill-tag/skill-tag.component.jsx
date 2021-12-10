import React from 'react';
import { Tag } from '@chakra-ui/react';

const SkillTag = ({ tag, colorScheme }) => {
  return (
    <Tag
      size="lg"
      borderRadius="base"
      height="40px"
      cursor="pointer"
      justifyContent="center"
      colorScheme={colorScheme}
      variant="outline"
      _hover={{
        transform: 'translateX(2px)',
        transition: 'all .2s',
      }}
    >
      {tag}
    </Tag>
  );
};

export default SkillTag;
