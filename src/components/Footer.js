import React from 'react';
import styled from 'styled-components';

const Footer = styled.footer`
  display: flex;
  justify-content: space-between;
  padding: 12px 24px;
  border-top: 1px solid #f2f2f2;
  font-size: .875em;
  a {
    color: black;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`

export default ({ numberOfIcons }) =>
  <Footer>
    <span>{numberOfIcons} icons in library</span>
    <a href="https://twitter.com/agwibawa" target="_blank">Made by @agwibawa</a>
  </Footer>
