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
  }
  @media (min-width: 768px) {
    padding: 16px 24px;
    flex-flow: row wrap;
  }
`

const LinkWrapper = styled.a`
  transition: all 150ms ease-out;
  display: flex;
  align-items: center;
  margin-right: 8px;
  border-radius: 4px;
  padding: 8px 12px;
  background: #f5f7f9;
  &:hover {
    text-decoration: none;
    background: #C9D5D9;
  }
  &:focus {
    outline: none;
    box-shadow: 0 0 0 4px rgba(0, 95, 204, 0.3);
  }
`

const MadeByContainer = styled.div`
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
  a {
    margin: 0;
  }
`

const style = {
  marginRight: 4,
}

export default ({ icons }) =>
  <Footer>
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <LinkWrapper href="https://github.com/artcoholic/akar-icons/issues" target="_blank" rel="noopener"><icons.File size={14} style={style} /> Request an icon</LinkWrapper>
      <LinkWrapper href="https://paypal.me/awibawa/5" target="_blank" rel="noopener"><icons.Coin size={14} style={style} /> Donate</LinkWrapper>
    </div>
    <MadeByContainer>
      <LinkWrapper href="https://twitter.com/agwibawa" target="_blank" rel="noopener" bg="#1DA1F2">
        Made by <icons.TwitterFill size={14} color="#1DA1F2" style={{ margin: '0 4px' }} /> agwibawa
      </LinkWrapper>
    </MadeByContainer>
  </Footer>
