import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const StyledDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  position: absolute;
  right: 50px;
`

const Notification = () => {
  return (
    <StyledDiv>
      <FontAwesomeIcon icon={faTimes} />
      Thank you for your nominations!
    </StyledDiv>
  );
}
 
export default Notification;