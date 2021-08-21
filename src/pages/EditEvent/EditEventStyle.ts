import { styled } from '../../styles/theme';

export const EditEventContainer = styled.section`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const EditEventCard = styled.article`
  background-color: ${({ theme }) => theme.color.white};
  max-height: 100%;
  max-width: 480px;
  width: 480px;
  padding: 32px;
  border-radius: 2px;
  box-shadow: ${({ theme }) => theme.box_shadow};
  text-align: center;
`;

export const EditEventForm = styled.form`
  margin-top: 32px;
`;
