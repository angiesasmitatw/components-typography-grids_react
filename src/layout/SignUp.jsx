import React from 'react';
import styled from 'styled-components';
import { useMediaPredicate } from 'react-media-hook';
import { GridContainer, InputBox, Flex, Button } from '../components/commons';
import Logo from '../components/images/logo.png';
import { Colors, Typography, Breakpoints } from '../themes';

const SignUpTitle = styled.h1`
  grid-column: 2/12;
  height: 28px;
  margin-bottom: 35px;
  ${{ ...Typography['style-1'] }}
  
  @media ${Breakpoints.sm} {
    text-align: center;
  }
`;

const LogoContainer = styled(Flex)`
  grid-column: 2/12;
  margin-top: 25px;
  margin-bottom: 20px;
  @media ${Breakpoints.sm} {
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
  margin-top: 30px;
  @media ${Breakpoints.sm} {
    grid-column: 7/11;
  }
`;

const BigScreenBox = styled.div`
  @media ${Breakpoints.sm} {
    width: 600px;
    height: 670px;
    border-color: ${Colors.grey};
    border-width: 1px;
    border-radius: 5px;
    border-style: solid;
  }
`;

const BigScreenContainer = styled.div`
  @media ${Breakpoints.sm} {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }
`;

const HelperText = styled.p`
  grid-column: 2/12;
  margin-top: 10px;
  ${{ ...Typography['style-4'] }};
  @media ${Breakpoints.sm} {
    grid-column: 3/11;
  }
`;

const SignUpPage = () => {
  const biggerThanSmallScreen = useMediaPredicate(`(${Breakpoints.sm})`);
  return (
    <BigScreenContainer>
      <BigScreenBox>
        <GridContainer alignContent="flex-start">
          <LogoContainer>
            <img src={Logo} alt="Company Logo" />
          </LogoContainer>
          <SignUpTitle>Create your Diabeetus Account</SignUpTitle>
          <InputBox
            placeholderText="First Name"
            gridColumn={biggerThanSmallScreen ? '3/7' : '2/12'}
            marginTop="25px"
          />
          <InputBox
            placeholderText="Last Name"
            gridColumn={biggerThanSmallScreen ? '7/11' : '2/12'}
            marginTop="25px"
          />
          <InputBox
            placeholderText="Username"
            gridColumn={biggerThanSmallScreen ? '3/11' : '2/12'}
            marginTop="25px"
          />
          <HelperText>You can use letters, numbers & periods</HelperText>
          <InputBox
            placeholderText="Password"
            gridColumn={biggerThanSmallScreen ? '3/7' : '2/12'}
            marginTop="25px"
          />
          {!biggerThanSmallScreen && (
            <HelperText>
              Use 8 or more characters with a mix of letters, numbers & symbols
            </HelperText>
          )}
          <InputBox
            placeholderText="Confirm"
            gridColumn={biggerThanSmallScreen ? '7/11' : '2/12'}
            marginTop="25px"
          />
          {biggerThanSmallScreen && (
            <HelperText>
              Use 8 or more characters with a mix of letters, numbers & symbols
            </HelperText>
          )}
          <ButtonGridPosition>
            <StyledButton text="Confirm" />
          </ButtonGridPosition>
        </GridContainer>
      </BigScreenBox>
    </BigScreenContainer>
  );
};

export default SignUpPage;
