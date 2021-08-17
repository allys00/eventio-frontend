import { styled } from '../../styles/theme';

export const LoginContainer = styled.article`
  width: 70vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LoginContent = styled.div`
  width: 60%;
  max-width: 800px;
`;

export const LoginForm = styled.form`
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

export const LoginWrapper = styled.section`
  display: flex;
  width: 100vw;
  &.isMobile {
    ${LoginContainer} {
      width: 100vw;
      text-align: center;
    }
    ${HaveAccount} {
      width: 100%;
      position: relative;
      text-align: center;
      top: unset;
      right: unset;
    }
    ${LoginContent} {
      width: calc(100% - 4rem);
    }
  }
`;
