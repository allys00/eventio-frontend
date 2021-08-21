import React from 'react';
import TimePickerComponent from 'react-time-picker';
import { TimePickerWrapper, Placeholder } from './TimePickerStyle';

interface IProps {
  placeholder?: string;
}

function TimePicker({ placeholder }: IProps) {
  return (
    <TimePickerWrapper>
      <Placeholder> {placeholder}</Placeholder>
      <TimePickerComponent
      clearIcon={null}
      clockIcon={null}
      value={''}  />
    </TimePickerWrapper>
  );
}

export default TimePicker;
