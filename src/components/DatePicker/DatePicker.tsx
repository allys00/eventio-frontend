import React from 'react';
import Input, { IInputProps } from '../Input/Input';

function DatePicker(props: IInputProps) {
  return <Input {...props} mask='99/99/9999' validationType={'date'} />;
}

export default DatePicker;
