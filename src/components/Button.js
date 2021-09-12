import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const ButtonStyle = styled.div`
  margin-top: 2rem;
  .button {
    text-align: center;
    font-size: 1.9rem;
    background-color: ${(props) =>
      props.outline ? 'transperant' : 'var(--green-secondary)'};
    padding: 0.5em 1em;
    border: 2px solid var(--gray-1);
    border-radius: 0;
    display: inline-block;
    color: ${(props) => (props.outline ? 'var(--green-secondary)' : 'white')};
    transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
    &:hover {
      transform: scale(1.08);
    }
  }
  @media only screen and (max-width: 768px) {
    .button {
      font-size: 1.8rem;
    }
  }
`;

export default function Button({
  btnText = 'test',
  btnLink = 'test',
  isEx = false,
  outline = false,
}) {
  return (
    <ButtonStyle outline={outline} className="button-wrapper">
      {isEx ?  <a className="button" href={btnLink} target="__blank">{btnText}</a> : <Link className="button" to={btnLink}>{btnText}</Link>}
    </ButtonStyle>
  );
}