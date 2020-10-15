import React from 'react';
import styled from 'styled-components';

const Footer = styled.footer`
  display: block;
  padding: 12px 24px;
  border-top: 1px solid #f2f2f2;
  a {
    color: black;
    text-decoration: none;
    font-size: .875em;
    &:hover {
      text-decoration: underline;
    }
  }
`

export default () =>
  <Footer>
    <a href="https://twitter.com/agwibawa" target="_blank">Made by @agwibawa</a>
  </Footer>
