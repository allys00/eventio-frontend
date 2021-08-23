import React, { useCallback, useEffect, useMemo, useState } from 'react';
import InputMask from 'react-input-mask';
import { theme } from '../../styles/theme';
import IconEye from '../Icon/IconEye';
import {
  Label,
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

export interface IInputProps {
  label?: string;
  value: any;
  id: string;
  onChange: (event: IInputChange) => void;
  checkInputIsValid?: (isValid: boolean, id: string) => void;
  onBlur?: (value: string) => void;
  onEnterPress?: () => void;
  type?: string;
  noShowButton?: boolean;
  hadError?: boolean;
  required?: boolean;
  externalError?: {
    hasError?: boolean;
    errorMessage?: string;
  };
  validationType?: 'email' | 'date' | 'time';
  placeholder?: string;
  mask?: string;
  maskChar?: string | null;
}

function Input({
  label,
  value,
  onChange,
  checkInputIsValid,
  onBlur,
  type,
  noShowButton,
  required,
  externalError,
  id,
  placeholder,
  validationType,
  mask = '',
  maskChar = null,
  onEnterPress,
}: IInputProps): JSX.Element {
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
      const errorMessage = inputsValidations[validationType](value as string);
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

  const handleBlur = useCallback(
    (event: any) => {
      setHasFocus(false);
      if (!wasFocused) {
        setWasFocused(true);
      }
      if (onBlur) {
        onBlur(event.currentTarget.value);
      }
    },
    [wasFocused]
  );

  const handleKeyPress = useCallback((event) => {
    if(onEnterPress && event.code === 'Enter'){
      onEnterPress();
    }
  }, [onEnterPress])

  return (
    <InputContainer>
      {label && <Label htmlFor={id} goToTop={goToTop}>{label}</Label>}
      <InputMask
        mask={mask}
        maskChar={maskChar}
        id={id}
        value={value || ''}
        placeholder={placeholder}
        onChange={({ currentTarget }) =>
          onChange({
            id: currentTarget.id,
            value: currentTarget.value,
          })
        }
        onKeyPress={handleKeyPress}
        onBlur={handleBlur}
        onFocus={() => setHasFocus(true)}
        type={inputType}
        className={`inputMask ${
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
