import { styled } from '../../styles/theme';

export const TimePickerWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 47px;
  border-bottom: 2px solid #dae1e7;
  .react-time-picker {
    display: flex;
    align-items: center;
  }
  .react-time-picker__wrapper {
    border: 0;
  }
  .react-time-picker__inputGroup {
    display: flex;
  }
  .react-time-picker__calendar {
    z-index: 2;
  }
`;

export const Placeholder = styled.label`
  margin-right: 8px;
  font-size: 18px;
  color: #c9ced3;
  display: flex;
  align-items: center;
`;
