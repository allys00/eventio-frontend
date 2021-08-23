import React from 'react';
import { useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import { Button } from '../../components/Button/Button';
import LeftBanner from '../../components/LeftBanner/LeftBanner';
import { SubTitle } from '../../components/Subtitle/Subtitle';
import { Title } from '../../components/Title/Title';
import { pages } from '../../utils/constants/pages';
import { ErrorCard, ErrorContainer, ErrorContent } from './ErrorStyle';

interface IProps {
  title: string;
  subtitle: string;
}

function ErrorPage({ title, subtitle }: IProps) {
  const history = useHistory();

  const handleError = useCallback(() => {
    history.push(pages.EVENTS);
  }, []);

  return (
    <ErrorContainer>
      <LeftBanner />
      <ErrorContent>
        <ErrorCard>
          <Title>{title}</Title>
          <SubTitle fontSize={16}>{subtitle}</SubTitle>
          <Button onClick={handleError} colorType={'primary'}>
            Home
          </Button>
        </ErrorCard>
      </ErrorContent>
    </ErrorContainer>
  );
}

export default ErrorPage;
