import React, { useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Button } from '../../components/Button/Button';
import Input, { IInputChange } from '../../components/Input/Input';
import { inputsValidations } from '../../components/Input/InputsValidation';
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
  const { loading, credentials, loginError } = useSelector(
    ({ login }: IStore) => ({
      loginError: login.loginError,
      loading: login.loading,
      credentials: login.credentials,
    })
  );

  const [formValidInputs, setFormValidInputs] = useState({
    email: false,
    password: false,
  });

  const history = useHistory();
  const dispatch = useDispatch();
  const { device } = useWindowSize();

  function goToSignup() {
    history.push(pages.SIGNUP);
  }

  const handlerChangeCredentials = useCallback(
    ({ id, value }: IInputChange): void => {
      dispatch(
        changeCredentials({
          [id]: value,
        })
      );
    },
    []
  );

  function handlerLogin() {
    dispatch(doLogin(credentials));
  }

  function handleValidInput(isValid: boolean, key: string) {
    const newFormValidInputs = { ...formValidInputs, [key]: isValid };
    setFormValidInputs(newFormValidInputs);
  }

  return (
    <LoginWrapper className={device}>
      {device === ENUMDevices.isDesktop && <LeftBanner />}
      <LoginContainer>
        <LoginContent>
          <Title fontSize={28}>Sign in to Eventio.</Title>
          {loginError ? (
            <SubTitle fontSize={18} color={theme.actions.secondary.background}>
              {loginError}
            </SubTitle>
          ) : (
            <SubTitle fontSize={18}>Enter your details below</SubTitle>
          )}

          <LoginForm>
            <Input
              label='Email'
              value={credentials.email}
              id='email'
              onChange={handlerChangeCredentials}
              checkInputIsValid={handleValidInput}
              validationType='email'
              required
              externalError={{ hasError: Boolean(loginError) }}
            />
            <Input
              label='Password'
              value={credentials.password}
              id='password'
              onChange={handlerChangeCredentials}
              type={'password'}
              externalError={{ hasError: Boolean(loginError) }}
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
            disabled={
              !inputsValidations.email ||
              loading ||
              Boolean(!credentials.password)
            }
          >
            {loading ? 'LOADING...' : 'SIGN IN'}
          </Button>
        </LoginContent>
      </LoginContainer>
    </LoginWrapper>
  );
}
