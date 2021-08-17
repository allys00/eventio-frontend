import { styled } from '../../styles/theme';

interface IProps {
  fontSize?: number;
}

export const Title = styled.h3<IProps>`
  font-size: ${({ fontSize }) => fontSize || 22}px;
  color: ${({ theme }) => theme.color.primary};
  line-height: 48px;
  font-weight: 400;
  margin: 0;
`;
