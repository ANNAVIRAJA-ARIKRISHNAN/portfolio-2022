import React from 'react';
import { Flex } from '@chakra-ui/layout';
import { Tag } from '@chakra-ui/tag';

const Footer = () => {
  return (
    <Flex justifyContent="center" alignContent="end">
      <Tag height="48px" fontSize="16px" padding="8px">
        Made with{' '}
        <span style={{ color: 'red', margin: '4px', fontSize: '20px' }}>
          &#9829;
        </span>{' '}
        in React and Chakra-UI
      </Tag>
    </Flex>
  );
};

export default Footer;
