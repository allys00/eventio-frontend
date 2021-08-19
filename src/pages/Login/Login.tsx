import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Button } from '../../components/Button/Button';
import Input from '../../components/Input/Input';
import LeftBanner from '../../components/LeftBanner/LeftBanner';
import { SubTitle } from '../../components/Subtitle/Subtitle';
import { Title } from '../../components/Title/Title';
import { IStore } from '../../config/Store/mainReducer';
import useWindowSize, { ENUMDevices } from '../../hook/windowSize';
import { theme } from '../../styles/theme';
import { pages } from '../../utils/constants/pages';
import {
  HaveAccountText,
  LoginContainer,
  LoginContent,
  LoginForm,
  LoginWrapper,
  TextLink,
} from './LoginStyle';
import { changeCredentials, doLogin } from './Store/actions';

export default function Login(): JSX.Element {
  const { loading, credentials, loginError } = useSelector(({ login }: IStore) => ({
    loginError: login.loginError,
    loading: login.loading,
    credentials: login.credentials,
  }));
  const history = useHistory();
  const dispatch = useDispatch();
  const { device } = useWindowSize();

  function goToSignup() {
    history.push(pages.SIGNUP);
  }

  const handlerChangeCredentials = useCallback(
    ({ currentTarget }: React.FormEvent<HTMLInputElement>): void => {
      dispatch(
        changeCredentials({
          [currentTarget.id]: currentTarget.value,
        })
      );
    },
    []
  );

  function handlerLogin() {
    dispatch(doLogin(credentials));
  }

  return (
    <LoginWrapper className={device}>
      {device === ENUMDevices.isDesktop && <LeftBanner />}
      <LoginContainer>
        <LoginContent>
          <Title fontSize={28}>Sign in to Eventio.</Title>
          {
            loginError ?
            <SubTitle fontSize={18} color={theme.color.secondary_action}>{loginError}</SubTitle>:
            <SubTitle fontSize={18}>Enter your details below</SubTitle>
          }

          <LoginForm>
            <Input
              label='Email'
              value={credentials.email}
              id='email'
              onChange={handlerChangeCredentials}
              type='email'
              required
            />
            <Input
              label='Password'
              value={credentials.password}
              id='password'
              onChange={handlerChangeCredentials}
              type={'password'}
              required
            />

            <HaveAccountText>
              Don&apos;t have account?{' '}
              <TextLink onClick={goToSignup}>SIGN UP</TextLink>
            </HaveAccountText>
          </LoginForm>
          <Button
            colorType={'primary'}
            onClick={handlerLogin}
            disabled={loading}
          >
            {loading ? 'LOADING...' : 'SIGN IN'}
          </Button>
        </LoginContent>
      </LoginContainer>
    </LoginWrapper>
  );
}
