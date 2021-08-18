import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Button } from '../../components/Button/Button';
import Input from '../../components/Input/Input';
import LeftBanner from '../../components/LeftBanner/LeftBanner';
import { SubTitle } from '../../components/Subtitle/Subtitle';
import { Title } from '../../components/Title/Title';
import useWindowSize, { ENUMDevices } from '../../hook/windowSize';
import { pages } from '../../utils/constants/pages';
import {
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
  const history = useHistory();
  const { device } = useWindowSize();

  function goToSignup() {
    history.push(pages.SIGNUP);
  }

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

            <HaveAccountText>
              Don&apos;t have account?{' '}
              <TextLink onClick={goToSignup}>SIGN UP</TextLink>
            </HaveAccountText>
          </LoginForm>
          <Button colorType={'primary'}>SIGN IN</Button>
        </LoginContent>
      </LoginContainer>
    </LoginWrapper>
  );
}
