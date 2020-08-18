import React from 'react';
import styled from 'styled-components';

import { SelectProps } from './Select.models';

const StyledSelect = styled.select`
  width: 100%;
  height: 38px;
  font-size: 18px;
  border-radius: 8px;
  border: none;
  padding: 0 8px;
`;

const Select: React.FC<SelectProps> = (props) => {
  const { data } = props;

  return (
    <StyledSelect {...props}>
      {data.map((d, i) => (
        <option key={`option-${d.label}-${i}`}>{d.label}</option>
      ))}
    </StyledSelect>
  );
};

export default Select;
