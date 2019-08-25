import React from 'react';
import styled from 'styled-components';
import { useMediaPredicate } from 'react-media-hook';
import { GridContainer, Flex, Button } from '../components/commons';
import Logo from '../components/images/logo.png';
import Product from '../components/images/product.png';
import { Colors, Typography, Breakpoints } from '../themes';
import { HelperText, TitleText, SignUpInputBox } from '../components/SignUp';

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
    width: 530px;
    height: 670px;
    border-color: ${Colors.grey};
    border-width: 1px;
    border-radius: 5px;
    border-style: solid;
  }
  @media ${Breakpoints.md} {
    border: none;
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

const BigScreenExtension = styled.div`
  @media ${Breakpoints.md} {
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 800px;
    height: 670px;
    padding-right: 80px;
    justify-content: center;
    border-color: ${Colors.grey};
    border-width: 1px;
    border-radius: 5px;
    border-style: solid;
  }
`;

const BigScreenImage = styled.div`
  display: none;
  @media ${Breakpoints.md} {
    display: flex;
    align-items: center;
  }
`;

const SignUpPage = () => {
  const biggerThanSmallScreen = useMediaPredicate(`(${Breakpoints.sm})`);
  return (
    <BigScreenContainer>
      <BigScreenExtension>
        <BigScreenBox>
          <GridContainer alignContent="flex-start">
            <LogoContainer>
              <img src={Logo} alt="Company Logo" />
            </LogoContainer>
            <TitleText text="Create your Diabeetus Account" />
            <SignUpInputBox
              placeholderText="First Name"
              isAlwaysFullLengthField={false}
              isFirstHalf
            />
            <SignUpInputBox
              placeholderText="Last Name"
              isAlwaysFullLengthField={false}
              isFirstHalf={false}
            />
            <SignUpInputBox placeholderText="Username" />
            <HelperText text="You can use letters, numbers & periods" />
            <SignUpInputBox
              placeholderText="Password"
              isAlwaysFullLengthField={false}
              isFirstHalf
            />
            {!biggerThanSmallScreen && (
              <HelperText text="Use 8 or more characters with a mix of letters, numbers & symbols" />
            )}
            <SignUpInputBox
              placeholderText="Confirm"
              isAlwaysFullLengthField={false}
              isFirstHalf={false}
            />
            {biggerThanSmallScreen && (
              <HelperText text="Use 8 or more characters with a mix of letters, numbers & symbols" />
            )}
            <ButtonGridPosition>
              <StyledButton text="Confirm" />
            </ButtonGridPosition>
          </GridContainer>
        </BigScreenBox>
        <BigScreenImage>
          <img
            src={Product}
            alt="Product Illustration"
            height="300px"
            width="300px"
          />
        </BigScreenImage>
      </BigScreenExtension>
    </BigScreenContainer>
  );
};

export default SignUpPage;
