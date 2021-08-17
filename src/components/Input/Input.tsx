import React, { useMemo, useState } from 'react';
import { theme } from '../../styles/theme';
import IconEye from '../Icon/IconEye';
import {
  Label,
  InputWrapper,
  InputContainer,
  EyeButton,
  HidePassword,
} from './InputStyle';

interface IProps {
  label: string;
  value: string;
  onChange: (event: React.FormEvent<HTMLInputElement>) => void;
  type?: string;
}

function Input({ label, value, onChange, type }: IProps): JSX.Element {
  const [hasFocus, setHasFocus] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const goToTop = useMemo(() => {
    return Boolean(hasFocus || value);
  }, [value, hasFocus]);

  const inputType = useMemo(() => {
    if (type === 'password') {
      return showPassword ? 'text' : 'password';
    }
    return type || 'text';
  }, [type, showPassword]);

  return (
    <InputContainer>
      <Label goToTop={goToTop}>{label}</Label>
      <InputWrapper
        value={value}
        onChange={onChange}
        onFocus={() => setHasFocus(true)}
        onBlur={() => setHasFocus(false)}
        type={inputType}
      />
      {type === 'password' && (
        <EyeButton onClick={() => setShowPassword(!showPassword)}>
          <IconEye width={20} height={20} color={theme.color.ligth_grey} />
          {showPassword && <HidePassword />}
        </EyeButton>
      )}
    </InputContainer>
  );
}

export default Input;
