import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { flexbox, space, color } from 'styled-system';
import pkg from '../../package.json';

const Header = styled.header`
  display: block;
  padding: 16px 16px 0;
  width: 100%;
  background: white;
  box-sizing: border-box;
  @media (min-width: 768px) {
    padding: 24px 24px 0px;
  }
`
const InnerContainer = styled.div`
  background: #DAE4E8;
  width: 100%;
  border-radius: 12px;
  padding: 24px;
  box-sizing: border-box;
  @media (min-width: 768px) {
    padding: 48px
  }
`
const Title = styled.h1`
  margin: 0;
  font-size: 2.25em;
  font-weight: 400;
  flex-basis: 100%;
  order: 2;
  @media (min-width: 768px) {
    font-size: 2.8em;
    flex-basis: 60%;
    order: 1;
  }
`
const Version = styled.span`
  background: white;
  border-radius: 4px;
  padding: .25em .5em;
  font-weight:bolder;
  order: 1;
  margin-bottom: 1em;
  @media (min-width: 768px) {
    order: 2;
    margin-bottom: 0;
  }
`

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  ${flexbox}
  ${space}
  a {
    display: flex;
    align-items: center;
    color: #1B1C32;
  }
`

const Button = styled.button`
  -webkit-appearance: none;
  border: 0;
  padding: 15px 1.2em;
  font-weight: 300;
  background: #1B1C32;
  color: #CDCDD8;
  border-radius: 2px;
  display: flex;
  align-content: center;
  cursor: pointer;
  margin-bottom: 12px;
  margin-right: 12px;
  ${color}
  &:focus {
    outline: none;
  }
  svg {
    margin-left: 8px;
  }
  @media (min-width: 768px) {
    margin-bottom: 0;
    margin-right: 24px;
  }
`

const SecondaryLinks = styled.a`
  margin-bottom: 1em;
  transition: background 150ms ease-out;
  &:last-child {
    margin-bottom: 0;
  }
  svg {
    margin-right: 8px;
  }
  @media (min-width: 768px) {
    margin-bottom: -8px;
    margin-right: 8px;
    padding: 8px 12px;
    border-radius: 4px;
    &:last-child {
      margin-bottom: -8px;
      margin-right: 0;
    }
    &:hover {
    background: #C9D5D9;
  }
  }
`

export default ({ icons, setHeight }) => {
  const ref = useRef(null);

  useEffect(() => {
    setHeight(ref.current.offsetHeight);
    const handleResize = () => {
      setHeight(ref.current.offsetHeight);
    }
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    }
  }, []);

  return (
    <Header id="myHeader" ref={ref}>
      <InnerContainer>
        <Wrapper
          justifyContent={["flex-start", "space-between"]}
          alignItems="flex-start"
          mb={['2em', '8em']}
        >
          <Title>Perfectly rounded icon library made for designers and developers</Title>
          <Version>v{pkg.version}</Version>
        </Wrapper>
        <Wrapper
          justifyContent={["flex-start", "space-between"]}
          flexDirection={['column', 'row']}
        >
          <Wrapper
            mb={['2em', 0]}
          >
            <a href="https://github.com/artcoholic/akar-icons#readme" target="_blank">
              <Button mr={[12, 24]} mb={[12, 0]}>Get started <icons.ArrowUpRight size={16} /></Button>
            </a>
            <a href="https://github.com/artcoholic/akar-icons/raw/master/src/akar-icons.zip">
              <Button mb={[12, 0]} color="#1B1C32" bg="white">Download all <icons.AlignToBottom size={16} /></Button>
            </a>
          </Wrapper>
          <Wrapper
            alignItems={[null, "flex-end"]}
            flexDirection={['column', 'row']}
            mt={[0, 14]}
          >
            <SecondaryLinks href="https://github.com/artcoholic/akar-icons" target="_blank"><icons.GithubFill size={16} />Github</SecondaryLinks>
            {/* <SecondaryLinks href="" target="_blank"><icons.FigmaFill size={16} />Figma library</SecondaryLinks> */}
            <SecondaryLinks href="https://github.com/artcoholic/akar-icons/issues" target="_blank"><icons.File size={16} />Request an icon</SecondaryLinks>
            <SecondaryLinks href="https://paypal.me/awibawa/5" target="_blank"><icons.Coffee size={16} />Buy me a coffee</SecondaryLinks>
          </Wrapper>
        </Wrapper>
      </InnerContainer>
    </Header >
  )
}

