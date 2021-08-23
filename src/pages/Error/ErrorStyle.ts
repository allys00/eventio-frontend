import { Button } from '../../components/Button/Button';
import { styled } from '../../styles/theme';
import ImageBackground from '../../assets/img/dart-background.png';

export const ErrorContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(${ImageBackground});
  background-repeat: no-repeat;
  background-position: center;
  background-position-x: calc(30vw - 200px);
`;

export const ErrorContent = styled.article`
  width: 70vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ErrorCard = styled.div`
  width: 100%;
  max-width: 480px;
  ${Button} {
    background-color: ${({ theme }) => theme.color.primary};
    margin-top: 32px;
  }
`;
