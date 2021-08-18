import { Title } from '../../components/Title/Title';
import { styled } from '../../styles/theme';

export const SignupContainer = styled.article`
  width: 70vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SignupContent = styled.div`
  width: 60%;
  max-width: 800px;
`;

export const SignupForm = styled.form`
  margin: 64px 0;
`;

export const HaveAccount = styled.div`
  position: absolute;
  top: 10px;
  right: 20px;
`;

export const HaveAccountText = styled.p`
  color: ${({ theme }) => theme.color.ligth_grey};
`;

export const TextLink = styled.span`
  font-weight: bold;
  color: ${({ theme }) => theme.color.dark_grey};
  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;

export const SignupWrapper = styled.section`
  display: flex;
  width: 100vw;
  &.isMobile {
    ${SignupContainer} {
      width: 100vw;
      text-align: center;
      padding: 32px 0;
      overflow: auto;
    }
    ${Title}{
      font-size: 25px;
    }
    ${SignupForm}{
      margin: 32px 0;
    }
    ${HaveAccount} {
      width: 100%;
      position: relative;
      text-align: center;
      top: unset;
      right: unset;
    }
    ${SignupContent} {
      width: calc(100% - 4rem);
    }
  }
`;
