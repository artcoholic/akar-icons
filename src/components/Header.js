import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { flexbox, space, color, layout } from 'styled-system';

const Container = styled.header`
  display: block;
  width: 100%;
  background: ${props => props.theme.colors.bg.primary};
  box-sizing: border-box;
  @media (min-width: 768px) {
    padding: 0px 24px;
  }
`
const InnerContainer = styled.div`
  background: ${props => props.theme.colors.bg.secondary};
  width: 100%;
  padding: 48px 24px 24px;
  box-sizing: border-box;
  position: relative;
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
  border-radius: 4px;
  display: flex;
  align-items: center;
  align-content: center;
  cursor: pointer;
  margin: 12px 0 0 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  ${color}

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

const Toggle = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  padding: 6px;
  border: none;
  border-radius: 8px;
  background-color: ${props => props.theme.colors.bg.tertiary};
  cursor: pointer;
  svg {
    fill: ${props => props.theme.colors.content.primary};
  }
  &:hover {
    background-color: ${props => props.theme.colors.bg.primary};
  }
`

const Header = ({
  icons,
  setHeight,
  theme,
  themeToggler
}) => {
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
    <Container id="myHeader" ref={ref}>
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
              <path d="M559.368 138.804C584.115 135.252 584.116 135.26 584.117 135.269L584.12 135.288L584.126 135.331L584.14 135.436C584.151 135.515 584.164 135.61 584.179 135.722C584.209 135.946 584.246 136.236 584.288 136.589C584.373 137.295 584.48 138.255 584.593 139.443C584.819 141.816 585.07 145.12 585.214 149.148C585.5 157.158 585.372 168.283 583.68 180.795C580.375 205.232 570.582 238.512 542.244 262.127L542.244 262.128C514.783 285.011 477.191 292.481 450.004 295.035C435.855 296.363 423.244 296.465 414.162 296.24C409.604 296.127 405.888 295.931 403.258 295.757C402.049 295.677 401.066 295.602 400.333 295.542C399.6 295.602 398.618 295.677 397.408 295.757C394.778 295.931 391.063 296.127 386.504 296.24C377.423 296.465 364.811 296.363 350.662 295.035C323.475 292.481 285.883 285.011 258.423 262.128L258.423 262.127C230.084 238.512 220.291 205.232 216.986 180.795C215.295 168.283 215.166 157.158 215.452 149.148C215.596 145.12 215.847 141.816 216.073 139.443C216.186 138.255 216.293 137.295 216.378 136.589C216.421 136.236 216.458 135.946 216.487 135.722C216.502 135.61 216.515 135.515 216.526 135.436L216.541 135.331L216.547 135.288L216.549 135.269C216.551 135.26 216.552 135.252 241.298 138.804M559.368 138.804C561.848 113.927 561.842 113.927 561.835 113.926L561.821 113.924L561.786 113.921L561.693 113.912C561.658 113.909 561.619 113.905 561.575 113.901C561.528 113.896 561.476 113.892 561.419 113.886C561.196 113.866 560.896 113.839 560.521 113.808C559.772 113.745 558.724 113.664 557.408 113.577C554.778 113.403 551.063 113.206 546.504 113.093C537.423 112.868 524.811 112.97 510.662 114.299C483.475 116.852 445.883 124.323 418.423 147.206L418.423 147.206C411.279 153.16 405.313 159.727 400.333 166.613C395.353 159.727 389.388 153.16 382.244 147.206L382.244 147.206C354.783 124.323 317.191 116.852 290.004 114.299C275.855 112.97 263.244 112.868 254.162 113.093C249.604 113.206 245.888 113.403 243.258 113.577C241.942 113.664 240.894 113.745 240.145 113.808C239.77 113.839 239.47 113.866 239.248 113.886C239.137 113.897 239.045 113.905 238.973 113.912L238.881 113.921L238.846 113.924L238.831 113.926C238.825 113.927 238.818 113.927 241.298 138.804M559.368 138.804L584.115 135.252C582.481 123.868 573.291 115.068 561.848 113.927L559.368 138.804ZM241.298 138.804L216.552 135.252C218.186 123.868 227.375 115.068 238.818 113.927L241.298 138.804ZM400.333 280.211L400.333 280.213C400.333 280.214 400.333 280.214 400.333 280.215C400.333 280.214 400.333 280.214 400.333 280.213L400.333 280.211Z" fill="#FFF7D9" stroke="white" stroke-width="50" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M399.368 270.53C399.368 270.53 317.366 278.704 274.427 242.922C231.489 207.14 241.298 138.804 241.298 138.804C241.298 138.804 323.3 130.63 366.239 166.412C409.177 202.194 399.368 270.53 399.368 270.53Z" fill="#4DFF74" stroke="#1B1C32" stroke-width="40" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M401.298 270.53C401.298 270.53 483.3 278.704 526.239 242.922C569.177 207.14 559.368 138.804 559.368 138.804C559.368 138.804 477.366 130.63 434.427 166.412C391.489 202.194 401.298 270.53 401.298 270.53Z" fill="#4DFF74" stroke="#1B1C32" stroke-width="40" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M163.922 425.705L163.922 425.705C159.197 462.935 162.453 497.297 182.134 526.555C201.544 555.409 234.017 574.913 277.807 589.348L277.807 589.348C309.166 599.685 333.418 621.452 342.028 649.429L357.528 644.659L342.028 649.43L347.955 668.688C350.435 676.745 356.81 683.011 364.909 685.351C373.009 687.692 381.742 685.792 388.138 680.299L390.678 678.117C390.68 678.116 390.681 678.115 390.682 678.114C405.959 664.999 423.239 654.418 441.866 646.774L493.107 625.747C539.1 606.874 578.206 582.034 604.397 548.813C631.195 514.823 643.197 473.62 637.115 425.705C629.137 362.842 577.345 316.334 507 316.334H293.666C223.208 316.334 171.888 362.952 163.922 425.705ZM188.722 428.853L188.723 428.853L188.722 428.853Z" fill="#FFF7D9" stroke="white" stroke-width="50" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M507 341.334H293.666C235.323 341.334 195.044 379.055 188.723 428.853C180.056 497.141 202.831 538.309 285.634 565.605C322.823 577.864 354.404 604.651 365.922 642.076L371.849 661.334L374.393 659.149C391.698 644.292 411.274 632.305 432.375 623.646L483.616 602.619C571.229 566.667 622.834 511.736 612.314 428.853C605.994 379.055 565.343 341.334 507 341.334Z" fill="#FFE894" stroke="#1B1C32" stroke-width="40" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M587 381.334C573.666 408 503.426 421.334 400.333 421.334C297.24 421.334 227 408 213.666 381.334" stroke="#1B1C32" stroke-width="40" stroke-linejoin="round" />
            </svg>

          </Logo>
          <Title>Perfectly rounded icon library made for designers and developers</Title>
          <SubTitle>Use these icons to bring life into your user interface and experience. Free to use for your personal and commercial projects. Start creating!</SubTitle>
        </Wrapper>
        <Toggle onClick={themeToggler} aria-label="Theme Toggle">
          {theme === 'light' ? <icons.MoonFill /> : <icons.SunFill />}
        </Toggle>
        <Wrapper justifyContent="center">
          <ButtonLink className="button" bg="content.primary" color="content.secondary" href="https://github.com/artcoholic/akar-icons#readme" target="_blank" rel="noopener">
            <icons.Paper size={16} style={{ marginRight: 8 }} /> Read the docs <icons.ArrowUpRight size={16} style={{ marginLeft: 8 }} />
          </ButtonLink>
          <ButtonLink className="button" bg="bg.primary" color="content.primary" href="https://paypal.me/awibawa/5" target="_blank" rel="noopener">
            <icons.Coin size={16} style={{ marginRight: 8 }} /> Donate <icons.ArrowUpRight size={16} style={{ marginLeft: 8 }} />
          </ButtonLink>
        </Wrapper>
      </InnerContainer>
    </Container>
  )
}

export default Header;