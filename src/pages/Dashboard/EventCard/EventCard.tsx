import React, { useMemo } from 'react';
import { Button } from '../../../components/Button/Button';
import IconPeople from '../../../components/Icon/IconPeople';
import { SubTitle } from '../../../components/Subtitle/Subtitle';
import { Title } from '../../../components/Title/Title';
import useWindowSize from '../../../hook/windowSize';
import { theme } from '../../../styles/theme';
import {
  Attendes,
  Card,
  EventAuthor,
  EventDate,
  FooterCard,
  QtdAttendes,
} from './EventCardStyle';

function EventCard() {
  const { width } = useWindowSize();

  const sizeCard = useMemo(() => {
    if (width > 1000) return 'calc(33.3% - 80px)';
    else if (width > 660) return 'calc(50% - 72px)';
    else return '100%';
  }, [width]);

  return (
    <Card width={sizeCard}>
      <EventDate>April 4, 2017 - 2:17PM</EventDate>
      <Title>How to get angry</Title>
      <EventAuthor>Tom Watts</EventAuthor>
      <SubTitle>I will show you how to get angry in a second</SubTitle>
      <FooterCard>
        <Attendes>
          <IconPeople width={20} height={20} color={theme.color.dark_grey} />
          <QtdAttendes>3 of 1000</QtdAttendes>
        </Attendes>
        <Button colorType='tertiary' onClick={console.log}>
          EDIT
        </Button>
      </FooterCard>
    </Card>
  );
}

export default EventCard;
