import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { theme } from '../../styles/theme';
import IconEye from '../Icon/IconEye';
import {
  Label,
  InputWrapper,
  InputContainer,
  EyeButton,
  HidePassword,
  InputErrorMessage,
} from './InputStyle';
import { inputsValidations } from './InputsValidation';

interface IProps {
  label: string;
  value: string;
  id?: string;
  onChange?: (event: React.FormEvent<HTMLInputElement>) => void;
  checkInputIsValid?: (isValid: boolean, id: string) => void;
  type?: string;
  noShowButton?: boolean;
  hadError?: boolean;
  required?: boolean;
  externalError?: {
    hasError: boolean;
    errorMessage: string;
  };
  validationType?: 'email';
}

function Input({
  label,
  value,
  onChange,
  checkInputIsValid,
  type,
  noShowButton,
  required,
  externalError,
  id,
  validationType,
}: IProps): JSX.Element {
  const [showPassword, setShowPassword] = useState(false);
  const [hasFocus, setHasFocus] = useState(false);
  const [wasFocused, setWasFocused] = useState(false);

  const { hasError, errorMessage } = useMemo(() => {
    if (required && !value) {
      return {
        hasError: true,
        errorMessage: `${label || 'This field'} has to be filled up`,
      };
    }
    if (validationType && inputsValidations[validationType] && value) {
      const errorMessage = inputsValidations[validationType](value);
      return {
        hasError: Boolean(errorMessage),
        errorMessage,
      };
    }

    if (externalError) {
      return externalError;
    }

    return { hasError: false, errorMessage: '' };
  }, [required, wasFocused, value, validationType, externalError]);

  useEffect(() => {
    if (checkInputIsValid) {
      checkInputIsValid(!hasError, id || '');
    }
  }, [hasError]);

  const goToTop = useMemo(() => {
    return Boolean(hasFocus || value);
  }, [value, hasFocus]);

  const inputType = useMemo(() => {
    if (type === 'password') {
      return showPassword ? 'text' : 'password';
    }
    return type || 'text';
  }, [type, showPassword]);

  const handleBlur = useCallback(() => {
    setHasFocus(false);
    if (!wasFocused) {
      setWasFocused(true);
    }
  }, [wasFocused]);
  return (
    <InputContainer>
      <Label goToTop={goToTop}>{label}</Label>
      <InputWrapper
        id={id}
        value={value}
        onChange={onChange}
        onBlur={handleBlur}
        onFocus={() => setHasFocus(true)}
        type={inputType}
        className={`${
          (hasError && wasFocused) || externalError?.hasError ? 'hadError' : ''
        }`}
      />

      {type === 'password' && !noShowButton && (
        <EyeButton onClick={() => setShowPassword(!showPassword)}>
          <IconEye width={20} height={20} color={theme.color.ligth_grey} />
          {showPassword && <HidePassword />}
        </EyeButton>
      )}
      {errorMessage && wasFocused && (
        <InputErrorMessage>{errorMessage}</InputErrorMessage>
      )}
    </InputContainer>
  );
}

export default React.memo(Input);
