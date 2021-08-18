import React, { useState } from 'react';
import { Button } from '../../components/Button/Button';
import Input from '../../components/Input/Input';
import LeftBanner from '../../components/LeftBanner/LeftBanner';
import { SubTitle } from '../../components/Subtitle/Subtitle';
import { Title } from '../../components/Title/Title';
import useWindowSize, { ENUMDevices } from '../../hook/windowSize';
import {
  HaveAccount,
  HaveAccountText,
  SignupContainer,
  SignupContent,
  SignupForm,
  SignupWrapper,
  TextLink,
} from './SignupStyle';

export default function Signup(): JSX.Element {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const { device } = useWindowSize();

  return (
    <SignupWrapper className={device}>
      {device === ENUMDevices.isDesktop && <LeftBanner />}
      <SignupContainer>
        <SignupContent>
          <Title fontSize={28}>Get started absolutely free.</Title>
          <SubTitle fontSize={18}>Enter your details below</SubTitle>
          <SignupForm>
            <Input
              label='First name'
              value={firstName}
              onChange={({ currentTarget }) => setFirstName(currentTarget.value)}
            />
            <Input
              label='Last name'
              value={lastName}
              onChange={({ currentTarget }) => setLastName(currentTarget.value)}
            />
             <Input
              label='Email'
              value={email}
              onChange={({ currentTarget }) => setEmail(currentTarget.value)}
            />
            <Input
              label='Password'
              value={password}
              onChange={({ currentTarget }) => setPassword(currentTarget.value)}
              type={'password'}
              noShowButton
            />
            <Input
              label='Repeat password'
              value={confirmPassword}
              onChange={({ currentTarget }) => setConfirmPassword(currentTarget.value)}
              type={'password'}
              noShowButton
            />


            <HaveAccount>
              <HaveAccountText>
                Already have an account? <TextLink>SIGN IN</TextLink>
              </HaveAccountText>
            </HaveAccount>
          </SignupForm>
          <Button colorType={'primary'}>
            SIGN UP
          </Button>
        </SignupContent>
      </SignupContainer>
    </SignupWrapper>
  );
}
