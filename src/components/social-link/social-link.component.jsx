import React from 'react';
import { Icon } from '@chakra-ui/react';

const SociaLink = ({ color, socialUrl, svgIcon }) => {
  return (
    <a href={socialUrl} target="_blank" rel="noreferrer">
      <Icon
        as={svgIcon}
        w="50px"
        h="50px"
        _hover={{
          transform: 'translateY(-2px)',
          transition: 'all .2s',
        }}
        borderRadius="14px"
        color={`${color}.500`}
      />
    </a>
  );
};

export default SociaLink;
