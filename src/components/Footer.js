import React from 'react';
import styled from 'styled-components';

const Footer = styled.footer`
  display: flex;
  justify-content: space-between;
  padding: 16px;
  border-top: 1px solid #e6eaef;
  font-size: .875em;
  flex-flow: column wrap;
  a {
    color: #1B1C32;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
  @media (min-width: 768px) {
    padding: 16px 24px;
    flex-flow: row wrap;
  }
`

const LinkWrapper = styled.span`
  display: flex;
  align-items: center;
  margin-right: 16px;
`

const MadeByContainer = styled.span`
  display: flex;
  align-items: center;
  border-top: 1px solid #f5f7f9;
  padding-top: 16px;
  margin-top: 16px;
  @media (min-width: 768px) {
    border: none;
    padding: 0;
    margin: 0;
  }
`

const style = {
  marginRight: 4,
}

export default ({ icons }) =>
  <Footer>
    <span style={{ display: 'flex', flexDirection: 'row' }}>
      <LinkWrapper><icons.File size={14} style={style} /> <a href="https://github.com/artcoholic/akar-icons/issues" target="_blank" rel="noopener">Request an icon</a></LinkWrapper>
      <LinkWrapper><icons.Coffee size={14} style={style} /> <a href="https://paypal.me/awibawa/5" target="_blank" rel="noopener">Buy me a coffee</a></LinkWrapper>
    </span>
    <MadeByContainer>Made by <icons.TwitterFill size={14} color="#1DA1F2" style={{ margin: '0 4px' }} /> <a href="https://twitter.com/agwibawa" target="_blank" rel="noopener">agwibawa</a></MadeByContainer>
  </Footer>
