import { styled } from '../../styles/theme';

export const DatePickerWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 47px;
  border-bottom: 2px solid #dae1e7;
  .react-date-picker {
    display: flex;
    align-items: center;
  }
  .react-date-picker__wrapper {
    border: 0;
  }
  .react-date-picker__inputGroup {
    display: flex;
  }
  .react-date-picker__calendar {
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
