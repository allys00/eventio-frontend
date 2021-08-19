import { styled } from '../../styles/theme';

export const Container = styled.section`
  background-color: ${({ theme }) => theme.color.background};
  padding: 24px;
  width: calc(100vw - 48px);
  height: calc(100vh - 48px);
  overflow: auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

`;

export const Content = styled.section`
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
`;
