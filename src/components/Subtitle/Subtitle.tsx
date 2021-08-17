import { styled } from '../../styles/theme';

interface IProps {
  fontSize?: number;
}

export const SubTitle = styled.h3<IProps>`
  font-size: ${({ fontSize }) => fontSize || 18}px;
  color: ${({ theme }) => theme.color.dark_grey};
  line-height: 24px;
  font-weight: 400;
  margin: 0;
`;
