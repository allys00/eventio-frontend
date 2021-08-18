import React, { useCallback, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Button } from '../../components/Button/Button';
import Input from '../../components/Input/Input';
import LeftBanner from '../../components/LeftBanner/LeftBanner';
import { SubTitle } from '../../components/Subtitle/Subtitle';
import { Title } from '../../components/Title/Title';
import { IStore } from '../../config/Store/mainReducer';
import useWindowSize, { ENUMDevices } from '../../hook/windowSize';
import { pages } from '../../utils/constants/pages';
import {
  HaveAccountText,
  SignupContainer,
  SignupContent,
  SignupForm,
  SignupWrapper,
  TextLink,
} from './SignupStyle';
import { changeNewUser, createNewUser } from './Store/actions';

export default function Signup(): JSX.Element {
  const { newUser, loading } = useSelector(({ signUp }: IStore) => signUp);
  const [formValidInputs, setFormValidInputs] = useState({
    firstName: false,
    lastName: false,
    email: false,
    password: false,
    confirmPassword: false,
  });

  const [confirmPassword, setConfirmPassword] = useState('');
  const history = useHistory();
  const dispatch = useDispatch();
  const { device } = useWindowSize();

  const changeNewUserValue = useCallback(
    ({ currentTarget }: React.FormEvent<HTMLInputElement>): void => {
      dispatch(
        changeNewUser({
          [currentTarget.id]: currentTarget.value,
        })
      );
    },
    []
  );

  const changeFormValidInputs = (isValid: boolean, key: string) => {
    const newFormValidInputs = { ...formValidInputs, [key]: isValid };
    setFormValidInputs(newFormValidInputs);
  };

  const passwordsMatch = useMemo(() => {
    return newUser.password !== confirmPassword
      ? {
          hasError: true,
          errorMessage: `Passwords don't match`,
        }
      : {
          hasError: false,
          errorMessage: '',
        };
  }, [newUser.password, confirmPassword]);

  const formIsValid = useMemo(() => {
    if (passwordsMatch.hasError) return false;
    for (const item of Object.values(formValidInputs)) {
      if (!item) return false;
    }
    return true;
  }, [formValidInputs, passwordsMatch]);

  function handleCreateUser(): void {
    dispatch(createNewUser(newUser));
  }

  function goToSignin() {
    history.push(pages.LOGIN);
  }

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
              id='firstName'
              value={newUser.firstName}
              onChange={changeNewUserValue}
              checkInputIsValid={changeFormValidInputs}
              required
            />
            <Input
              label='Last name'
              value={newUser.lastName}
              onChange={changeNewUserValue}
              checkInputIsValid={changeFormValidInputs}
              id='lastName'
              required
            />
            <Input
              label='Email'
              id='email'
              validationType={'email'}
              value={newUser.email}
              onChange={changeNewUserValue}
              checkInputIsValid={changeFormValidInputs}
              required
            />
            <Input
              label='Password'
              value={newUser.password}
              id='password'
              onChange={changeNewUserValue}
              checkInputIsValid={changeFormValidInputs}
              type={'password'}
              noShowButton
              required
            />
            <Input
              label='Repeat password'
              value={confirmPassword}
              id='confirmPassword'
              onChange={({ currentTarget }) =>
                setConfirmPassword(currentTarget.value)
              }
              type={'password'}
              checkInputIsValid={changeFormValidInputs}
              externalError={passwordsMatch}
              noShowButton
              required
            />

            <HaveAccountText>
              Already have an account?{' '}
              <TextLink onClick={goToSignin}>SIGN IN</TextLink>
            </HaveAccountText>
          </SignupForm>
          <Button
            colorType={'primary'}
            onClick={handleCreateUser}
            disabled={!formIsValid}
          >
            SIGN UP
          </Button>
        </SignupContent>
      </SignupContainer>
    </SignupWrapper>
  );
}
