import React from 'react';
import styled from 'styled-components';

const SiteFooter = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1.5rem;
  font-size: 0.875rem;
  background-color: #e3dccf;

  p:not(:last-child) {
    margin-bottom: 0.5rem;
  }

  a {
    color: inherit;
  }
`;

const Footer = () => (
  <SiteFooter>
    <p>
      Made by{' '}
      <a href='https://twitter.com/matty_h' rel='noopener noreferrer' target='_blank'>
        @matty_h
      </a>
    </p>

    <p>
      Data from{' '}
      <a href='https://open-platform.theguardian.com/' rel='noopener noreferrer' target='_blank'>
        The Guardian Open Platform
      </a>
    </p>
  </SiteFooter>
);

export default Footer;
