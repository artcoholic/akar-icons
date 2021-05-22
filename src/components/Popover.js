import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';

const Container = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  pointer-events: none;
  z-index: 99;
  button {
    border: none;
    background: none;
    transition: all 150ms ease-out;
    border-radius: 4px;
    cursor: pointer;
    padding: 0;
  }
`

const Wrapper = styled.div`
  background: white;
  color: black;
  border-radius: 8px;
  border: .5px solid #e6eaef;
  box-shadow: rgb(45 59 66 / 0.1) 0px 6px 12px 0px;
  display: flex;
  flex-direction: column;
  max-width: 480px;
  width: 100%;
  pointer-events: auto;
  margin: 16px;
  @media (min-width: 768px) {
    margin: 24px;
  }
`

const Header = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  border-bottom: 1px solid #e6eaef;
  .icon-wrapper {
    padding: 12px;
    background-image: linear-gradient(45deg, #f2f2f2 25%, transparent 25%), 
                      linear-gradient(-45deg, #f2f2f2 25%, transparent 25%), 
                      linear-gradient(45deg, transparent 75%, #f2f2f2 75%), 
                      linear-gradient(-45deg, transparent 75%, #f2f2f2 75%);
    background-size: 10px 10px;
    background-position: 0 0, 0 5px, 5px -5px, -5px 0px;
    border-radius: 4px;
  }
  .icon-name {
    padding: 0 1em;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .close-btn {
    background-color: none;
    padding: 16px;
    margin-right: 8px;
    &:hover {
      background: #f5f7f9;
    }
  }
`

const ReactCode = styled.div`
  padding: 16px;
  .label {
    font-size: 14px;
    margin-bottom: .5em;
  }
  .snippet-box {
    background-color: #f5f7f9;
    padding: 4px;
    border-radius: 4px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 1px solid #e6eaef;
    input {
      font-size: 14px;
      padding: 0 1em;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      background: none;
      border: none;
      outline: none;
      font-family: monospace;
      width: 100%;
    }
    .copy-btn {
      background-color: none;
      padding: 11px;
      border-radius: 2px;
      display: flex;
      justify-content: center;
      position: relative;
      &:hover {
        background-color: #dae4e8;
        .tooltip {
          opacity: 1;
          top: -30px;
        }
      }
      .tooltip {
        position: absolute;
        background-color: #1B1C32;
        color: white;
        text-align: center;
        border-radius: 2px;
        font-size: 10px;
        opacity: 0;
        top: -22px;
        text-transform: uppercase;
        padding: .5em .75em;
        white-space: nowrap;
        transition: all 150ms ease-out;
        &::after {
          content: '';
          position: absolute;
          top: 100%;
          left: 50%;
          margin-left: -4px;
          border-width: 4px;
          border-style: solid;
          border-color: #1B1C32 transparent transparent transparent;
        }
      }
    }
  }
`

const CopySVGContainer = styled.div`
  padding: 0 16px 16px;
  .copy-svg-btn {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #1B1C32;
    color: #CDCDD8;
    padding: 15px;
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
    svg {
      margin-right: 8px;
    }
  }
`

const Popover = ({ open, setOpen, name, icons, size }) => {
  const [copiedSnippet, setCopiedSnippet] = useState(false);
  const [copiedSVG, setCopiedSVG] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => { setCopiedSnippet(false); }, 3000);
    return () => clearTimeout(timeout);
  }, [copiedSnippet]);

  useEffect(() => {
    const timeout = setTimeout(() => { setCopiedSVG(false); }, 3000);
    return () => clearTimeout(timeout);
  }, [copiedSVG]);

  const Icon = icons[name];
  const addSpace = str => str.replace(/([a-z])([A-Z])/g, '$1 $2');
  const copySVG = (i) => {
    const svg = document.getElementById(`${i}`);
    const s = new XMLSerializer();
    const str = s.serializeToString(svg);
    const el = document.createElement('textarea');
    el.value = str;
    document.body.appendChild(el);
    el.select();
    document.execCommand("copy");
    document.body.removeChild(el);
    setCopiedSVG(true);
  }
  function copySnippet() {
    const snippet = document.getElementById('reactSnippet');
    snippet.select(snippet.value);
    snippet.setSelectionRange(0, 99999);
    document.execCommand("copy");
    setCopiedSnippet(true);
  }
  return (
    <AnimatePresence>
      {open && (
        <Container
          id="popover"
          as={motion.div}
          initial={{ y: 24, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 24, opacity: 0, transition: { type: 'spring', stiffness: 100 } }}
        >
          <Wrapper>
            <Header>
              <div style={{ display: 'flex', alignItems: 'center', flexFlow: 'row nowrap', padding: 8 }}>
                <div className="icon-wrapper"><Icon /></div>
                <div className="icon-name">{addSpace(name)}</div>
              </div>
              <button className="close-btn" onClick={() => setOpen(false)}><icons.Cross size={16} /></button>
            </Header>
            <ReactCode>
              <div className="label">React snippet</div>
              <div className="snippet-box">
                <input type="text" value={`<${name} size={${size}} />`} id="reactSnippet" />
                <button className="copy-btn" onClick={copySnippet}>
                  <span class="tooltip" id="myTooltip">
                    {copiedSnippet ? 'Copied!' : 'Copy snippet'}
                  </span>
                  {copiedSnippet ? <icons.CircleCheckFill size={16} /> : <icons.Copy size={16} />}
                </button>
              </div>
            </ReactCode>
            <CopySVGContainer>
              <button className="copy-svg-btn" onClick={() => copySVG(name)}>
                {copiedSVG ? <icons.CircleCheckFill size={16} /> : <icons.Copy size={16} />}
                {copiedSVG ? "Copied to clipboard!" : "Copy SVG"}
              </button>
            </CopySVGContainer>
          </Wrapper>
        </Container>
      )}
    </AnimatePresence>
  )
}

export default Popover;