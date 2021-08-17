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
  LoginContainer,
  LoginContent,
  LoginForm,
  LoginWrapper,
  TextLink,
} from './LoginStyle';

export default function Login(): JSX.Element {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { device } = useWindowSize();

  return (
    <LoginWrapper className={device}>
      {device === ENUMDevices.isDesktop && <LeftBanner />}
      <LoginContainer>
        <LoginContent>
          <Title fontSize={28}>Sign in to Eventio.</Title>
          <SubTitle fontSize={18}>Enter your details below</SubTitle>
          <LoginForm>
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
            />

            <HaveAccount>
              <HaveAccountText>
                Don&apos;t have account? <TextLink>SIGN UP</TextLink>
              </HaveAccountText>
            </HaveAccount>
          </LoginForm>
          <Button colorType={'primary'}>
            SIGN IN
          </Button>
        </LoginContent>
      </LoginContainer>
    </LoginWrapper>
  );
}
