import { Button } from '../../../components/Button/Button';
import { SubTitle } from '../../../components/Subtitle/Subtitle';
import { styled } from '../../../styles/theme';

interface ICardProps {
  width: string;
}

export const Card = styled.div<ICardProps>`
  background-color: ${({ theme }) => theme.color.white};
  box-shadow: ${({ theme }) => theme.box_shadow};
  border-radius: 2px;
  padding: 32px;
  width: ${({ width }) => width};
  margin-bottom: 16px;
  ${SubTitle} {
    font-size: 16px;
    margin: 20px 0;
    width: 70%;
  }
`;

export const EventDate = styled.p`
  font-size: 14px;
  line-height: 24px;
  color: ${({ theme }) => theme.color.ligth_grey};
  margin: 0;
`;

export const EventAuthor = styled.p`
  font-size: 14px;
  line-height: 24px;
  color: #7d7878;
  margin: -10px 0 0 0;
`;

export const FooterCard = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  ${Button} {
    width: 120px;
    height: 36px;
    font-size: 16px;
    line-height: 16px;
  }
`;

export const Attendes = styled.div`
  display: flex;
  align-items: flex-end;
`;

export const QtdAttendes = styled.p`
  margin: 0;
  font-size: 16px;
  line-height: 14px;
  color: ${({ theme }) => theme.color.dark_grey};
  margin-left: 8px;
`;
