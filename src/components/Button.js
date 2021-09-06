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
  outline = false,
}) {
  return (
    <ButtonStyle outline={outline} className="button-wrapper">
      <Link className="button" to={btnLink}>
        {btnText}
      </Link>
    </ButtonStyle>
  );
}