import React from 'react';
import styled from 'styled-components';

type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

const StyledInput = styled.input`
  width: 100%;
  height: 38px;
  font-size: 18px;
  border-radius: 8px;
  border: none;
  padding: 0 8px;
`;

const Input: React.FC<InputProps> = (props) => {
  return <StyledInput type="text" {...props} />;
};

export default Input;
