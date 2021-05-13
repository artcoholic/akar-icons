import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { flexbox, space, color, layout } from 'styled-system';

const Header = styled.header`
  display: block;
  width: 100%;
  background: white;
  box-sizing: border-box;
  @media (min-width: 768px) {
    padding: 0px 24px;
  }
`
const InnerContainer = styled.div`
  background: #DAE4E8;
  width: 100%;
  padding: 48px 24px 24px;
  box-sizing: border-box;
  @media (min-width: 768px) {
    padding: 96px 48px;
    border-radius: 12px;
  }
`
const Title = styled.h1`
  margin: 0;
  font-size: 1.4em;
  font-weight: 300;
  text-align:center;
  width: 100%;
  margin-top: .75em;
  margin-bottom: .25em;
  max-width: 460px;
  @media (min-width: 375px) {
    font-size: 1.8em;
  }
  @media (min-width: 768px) {
    max-width: 710px;
    font-size: 2.8em;
  }
`

const SubTitle = styled.h2`
  font-size: 1em;
  line-height: 1.25em;
  font-weight: 300;
  text-align: center;
  width: 100%;
  opacity: .75;
  max-width: 600px;
  @media (min-width: 375px) {
    font-size: 1.25em;
  }
`

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  ${flexbox}
  ${space}
  ${layout}
`

const ButtonLink = styled.a`
  -webkit-appearance: none;
  border: 0;
  padding: 15px 1.2em;
  font-weight: 300;
  background: ${props => props.primary ? "#1B1C32" : "white"};
  color: ${props => props.primary ? "#CDCDD8" : "#1B1C32"};
  border-radius: 4px;
  display: flex;
  align-items: center;
  align-content: center;
  cursor: pointer;
  margin: 12px 0 0 0;
  transition: all 150ms ease-out;
  width: 100%;
  display: flex;
  justify-content: space-between;
  ${color}

  &:focus {
    outline: none;
    box-shadow: 0 0 0 4px rgba(0, 95, 204, 0.3);
  }
  &:hover {
    box-shadow: rgb(45 59 66 / 0.15) 0px 6px 12px 0px;
  }
  &:active {
    box-shadow: none;
  }
  @media (min-width: 768px) {
    margin: 0 12px;
    width: auto;
  }

`

const Logo = styled.div`
  box-shadow: rgb(45 59 66 / 0.15) 0px 6px 12px 0px;
  border-radius: 8px;
  border: 1px solid #d8c789;
  background: #FFD542;
  width: 48px;
  height: 48px;
  svg {
    display: block;
  }
  @media (min-width: 375px) {
    width: 64px;
    height: 64px;
  }
`

const HeaderTitle = styled.span`
  text-transform: uppercase;
  letter-spacing: 2px;
  font-weight: 500;
  font-size: .75em;
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
      <Wrapper
        justifyContent="center"
        padding="12px 0"
      >
        <HeaderTitle>Akar Icons</HeaderTitle>
      </Wrapper>
      <InnerContainer>
        <Wrapper
          alignItems="center"
          mb="2em"
          flexDirection="column"
        >
          <Logo>
            <svg viewBox="0 0 800 800" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M506.667 346.667H293.333C234.99 346.667 194.711 384.388 188.39 434.186C179.723 502.474 202.498 543.642 285.301 570.938C322.49 583.197 354.071 609.984 365.589 647.409L371.516 666.667L374.06 664.482C391.365 649.625 410.941 637.638 432.042 628.979L483.283 607.952C570.896 572 622.501 517.069 611.981 434.186C605.661 384.388 565.01 346.667 506.667 346.667Z" fill="#FFF7D9" stroke="#1B1C32" stroke-width="40" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M399.035 265.863C399.035 265.863 317.033 274.037 274.094 238.255C231.156 202.473 240.965 134.137 240.965 134.137C240.965 134.137 322.967 125.963 365.906 161.745C408.844 197.527 399.035 265.863 399.035 265.863Z" fill="#FFD542" stroke="#1B1C32" stroke-width="40" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M400.965 265.863C400.965 265.863 482.967 274.037 525.906 238.255C568.844 202.473 559.035 134.137 559.035 134.137C559.035 134.137 477.033 125.963 434.094 161.745C391.156 197.527 400.965 265.863 400.965 265.863Z" fill="#FFD542" stroke="#1B1C32" stroke-width="40" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M586.667 386.667C573.333 413.333 503.093 426.667 400 426.667C296.907 426.667 226.667 413.333 213.333 386.667" stroke="#1B1C32" stroke-width="40" stroke-linejoin="round" />
            </svg>
          </Logo>
          <Title>Perfectly rounded icon library made for designers and developers</Title>
          <SubTitle>Use these icons to bring life into your user interface and experience. Free to use for your personal and commercial projects. Start creating!</SubTitle>
        </Wrapper>
        <Wrapper
          justifyContent="center"
        >
          <ButtonLink primary href="https://github.com/artcoholic/akar-icons#readme" target="_blank" rel="noopener">
            <icons.Paper size={16} style={{ marginRight: 8 }} /> Read the docs <icons.ArrowUpRight size={16} style={{ marginLeft: 8 }} />
          </ButtonLink>
          <ButtonLink href="https://github.com/artcoholic/akar-icons#readme" target="_blank" rel="noopener">
            <icons.Coin size={16} style={{ marginRight: 8 }} /> Donate <icons.ArrowUpRight size={16} style={{ marginLeft: 8 }} />
          </ButtonLink>
        </Wrapper>
      </InnerContainer>
    </Header>
  )
}

