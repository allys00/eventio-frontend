import { styled } from '../../styles/theme';
import BannerImage from '../../assets/img/background-left.png';

export const LeftBannerContent = styled.article`
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
  align-items: center;
  height: calc(100vh - 3rem);
  width: 30vw;
  padding: 0 0 3rem;

  background-image: url(${BannerImage});
  background-size: cover; 
  background-repeat: no-repeat;
`;

export const MentionMessage = styled.h4`
  font-size: 34px;
  font-family: PlayfairDisplay;
  font-weight: 400;
  text-align: center;
  color: ${({ theme }) => theme.color.white};
  margin: 0;
`;

export const MentionAuthor = styled.h6`
  color: ${({ theme }) => theme.color.dark_grey};
  margin: 0;
  font-size: 18px;
`;

export const Divisor = styled.span`
  display: block;
  width: 10px;
  height: 2px;
  background-color: ${({ theme }) => theme.color.green};
  margin: 20px 0;
`;
