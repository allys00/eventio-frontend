import React from 'react';
import DatePickerComponent from 'react-date-picker';
import { DatePickerWrapper, Placeholder } from './DatePickerStyle';

interface IProps {
  placeholder?: string;
  value: string;
  onChange: (value: any) => void;
  onBlur: () => void;
  onFocus: () => void;
  className: string;
}

function DatePicker({
  placeholder,
  onBlur,
  onFocus,
  onChange,
  className,
}: IProps) {
  return (
    <DatePickerWrapper>
      <Placeholder> {placeholder}</Placeholder>
      <DatePickerComponent
        className={className}
        onCalendarOpen={() => onFocus()}
        onCalendarClose={() => onBlur()}
        onChange={(value: Date) => onChange(value)}
        dayPlaceholder={'__'}
        monthPlaceholder={'__'}
        yearPlaceholder={'__'}
        clearIcon={null}
        calendarIcon={null}

        // value={new Date()}
      />
    </DatePickerWrapper>
  );
}

export default DatePicker;
