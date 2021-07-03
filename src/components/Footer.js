import React from 'react';
import styled from 'styled-components';

const Footer = styled.footer`
  display: flex;
  justify-content: space-between;
  padding: 12px;
  border-top: 1px solid ${props => props.theme.colors.border};
  font-size: .875em;
  flex-flow: column wrap;
  a {
    color: ${props => props.theme.colors.content.primary};
  }
  @media (min-width: 768px) {
    padding: 12px 16px;
    flex-flow: row wrap;
  }
`

const LinkWrapper = styled.a`
  display: flex;
  align-items: center;
  margin: 4px;
  border-radius: 4px;
  padding: 8px 12px;
  background: ${props => props.theme.colors.bg.tertiary};
  &:hover {
    text-decoration: none;
    background: ${props => props.theme.colors.bg.secondary};
  }
  &:focus {
    outline: none;
    box-shadow: 0 0 0 4px rgba(0, 95, 204, 0.3);
  }
`

const MadeByContainer = styled.div`
  display: flex;
  align-items: center;
  border-top: 1px solid ${props => props.theme.colors.border};
  padding-top: 12px;
  margin-top: 12px;
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
    <div style={{ display: 'flex', flexFlow: 'row wrap' }}>
      <LinkWrapper href="https://github.com/artcoholic/akar-icons/issues/new?assignees=artcoholic&labels=enhancement&template=icon-request.md&title=%5BICON+REQUEST%5D" target="_blank" rel="noopener"><icons.File size={14} style={style} /> Request an icon</LinkWrapper>
      <LinkWrapper href="https://github.com/artcoholic/akar-icons/issues/new?assignees=artcoholic&labels=bug&template=bug_report.md&title=%5BBUG%5D" target="_blank" rel="noopener"><icons.Bug size={14} style={style} /> Report a bug</LinkWrapper>
      <LinkWrapper href="https://paypal.me/awibawa/5" target="_blank" rel="noopener"><icons.Coin size={14} style={style} /> Donate</LinkWrapper>
    </div>
    <MadeByContainer>
      <LinkWrapper href="https://twitter.com/agwibawa" target="_blank" rel="noopener" bg="#1DA1F2">
        Made by <icons.TwitterFill size={14} color="#1DA1F2" style={{ margin: '0 4px' }} /> agwibawa
      </LinkWrapper>
    </MadeByContainer>
  </Footer>
