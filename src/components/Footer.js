import React from 'react';
import styled from 'styled-components';

const Footer = styled.footer`
  display: flex;
  justify-content: space-between;
  padding: 12px 16px;
  border-top: 1px solid #f2f2f2;
  font-size: .875em;
  a {
    color: #1B1C32;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
  @media (min-width: 768px) {
    padding: 12px 24px;
  }
`

const style = {
  verticalAlign: 'middle'
}

export default ({ icons, numberOfIcons }) =>
  <Footer>
    <span>{numberOfIcons} icons in library</span>
    {/* <span>
      <icons.File size={14} style={style} /> <a href="https://github.com/artcoholic/akar-icons/issues" target="_blank">Request an icon</a>
      <icons.Coffee size={14} style={style} /> <a href="https://paypal.me/awibawa/5" target="_blank">Buy me a coffee</a>
    </span> */}
    <span style={{ display: 'flex', alignItems: 'center' }}>Made by <icons.TwitterFill size={14} color="#1DA1F2" style={{ verticalAlign: 'middle', margin: '0 4px' }} /> <a href="https://twitter.com/agwibawa" target="_blank">agwibawa</a></span>
  </Footer>
