import React from 'react';
import styled from 'styled-components';
import { GridContainer, InputBox, Flex, Button } from '../components/commons';
import Logo from '../components/images/logo.png';
import { Colors, Typography, Breakpoints } from '../themes';

const SignUpTitle = styled.h1`
  grid-column: 2/12;
  height: 28px;
  margin: 5px;
  margin-bottom: 15px;
  ${{ ...Typography['style-1'] }}
  
  @media ${Breakpoints.md} {
    text-align: center;
  }
`;

const LogoContainer = styled(Flex)`
  grid-column: 2/12;
  margin-top: 25px;
  margin-bottom: 10px;
  @media ${Breakpoints.md} {
    justify-content: center;
  }
`;

const StyledButton = styled(Button)`
  background-color: ${Colors.green};
  width: 120px;
  height: 40px;
  border: none;
  ${{ ...Typography['style-3'] }}
`;

const ButtonGridPosition = styled.div`
  display: flex;
  justify-content: flex-end;
  grid-column: 7/12;
`;

const SignUpPage = () => (
  <GridContainer alignContent="flex-start">
    <LogoContainer>
      <img src={Logo} alt="Company Logo" />
    </LogoContainer>
    <SignUpTitle>Create your Diabeetus Account</SignUpTitle>
    <InputBox placeholderText="First Name" gridColumn="2/12" marginTop="15px" />
    <InputBox placeholderText="Last Name" gridColumn="2/12" marginTop="15px" />
    <InputBox placeholderText="Username" gridColumn="2/12" marginTop="15px" />
    <InputBox placeholderText="Password" gridColumn="2/12" marginTop="15px" />
    <InputBox placeholderText="Confirm" gridColumn="2/12" marginTop="15px" />
    <ButtonGridPosition>
      <StyledButton text="Confirm" />
    </ButtonGridPosition>
  </GridContainer>
);

export default SignUpPage;
