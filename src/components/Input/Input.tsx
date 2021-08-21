import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { theme } from '../../styles/theme';
import DatePicker from '../DatePicker/DatePicker';
import IconEye from '../Icon/IconEye';
import TimePicker from '../TimePicker/TimePicker';
import {
  Label,
  InputWrapper,
  InputContainer,
  EyeButton,
  HidePassword,
  InputErrorMessage,
} from './InputStyle';
import { inputsValidations } from './InputsValidation';

export interface IInputChange {
  id: string;
  value: any;
}

interface IProps {
  label?: string;
  value: string;
  id?: string;
  onChange: (event: IInputChange) => void;
  checkInputIsValid?: (isValid: boolean, id: string) => void;
  type?: string;
  noShowButton?: boolean;
  hadError?: boolean;
  required?: boolean;
  externalError?: {
    hasError?: boolean;
    errorMessage?: string;
  };
  validationType?: 'email';
  placeholder?: string;
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
  placeholder,
  validationType,
}: IProps): JSX.Element {
  const [showPassword, setShowPassword] = useState(false);
  const [hasFocus, setHasFocus] = useState(false);
  const [wasFocused, setWasFocused] = useState(false);

  const { hasError, errorMessage } = useMemo(() => {
    if (required && !value) {
      return {
        hasError: true,
        errorMessage: `${
          label || placeholder || 'This field'
        } has to be filled up`,
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
      {label && <Label goToTop={goToTop}>{label}</Label>}

      {type === 'date' && (
        <DatePicker
          placeholder={placeholder}
          value={value}
          onChange={(value) =>
            onChange({
              id: id || '',
              value,
            })
          }
          onBlur={handleBlur}
          onFocus={() => setHasFocus(true)}
          className={`${
            (hasError && wasFocused) || externalError?.hasError
              ? 'hadError'
              : ''
          }`}
        />
      )}
      {type === 'time' && <TimePicker placeholder={placeholder} />}
      {type !== 'date' && type !== 'time' && (
        <InputWrapper
          id={id}
          value={value}
          placeholder={placeholder}
          onChange={({ currentTarget }) =>
            onChange({
              id: currentTarget.id,
              value: currentTarget.value,
            })
          }
          onBlur={handleBlur}
          onFocus={() => setHasFocus(true)}
          type={inputType}
          className={`${
            (hasError && wasFocused) || externalError?.hasError
              ? 'hadError'
              : ''
          }`}
        />
      )}

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
