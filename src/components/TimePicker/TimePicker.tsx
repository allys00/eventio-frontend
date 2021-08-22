import React from 'react';
import Input, { IInputProps } from '../Input/Input';

function TimePicker(props: IInputProps) {
  return <Input {...props} mask='99:99' validationType={'time'} />;
}

export default TimePicker;
