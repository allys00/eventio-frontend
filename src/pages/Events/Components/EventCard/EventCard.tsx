import React, { useMemo } from 'react';
import { Button, ButtonTypes } from '../../../../components/Button/Button';
import IconPeople from '../../../../components/Icon/IconPeople';
import { SubTitle } from '../../../../components/Subtitle/Subtitle';
import { Title } from '../../../../components/Title/Title';
import useWindowSize, { ENUMDevices } from '../../../../hook/windowSize';
import { theme } from '../../../../styles/theme';
import dayjs from 'dayjs';
import {
  Attendes,
  Block,
  Card,
  CardContent,
  EventAuthor,
  EventDate,
  FooterCard,
  InlineCard,
  QtdAttendes,
} from './EventCardStyle';
import { useDispatch } from 'react-redux';
import { attendAnEvent, unAttendAnEvent } from '../../Store/actions';

interface IProps {
  id: string;
  title: string;
  startsAt: string;
  ownerName: string;
  description: string;
  attendeesQtd: number;
  capacity: number;
  userIsOwner: boolean;
  userIsAttendee: boolean;
  eventIdIsLoading: string;
  inlineMode?: boolean;
}

function EventCard({
  id,
  title,
  startsAt,
  ownerName,
  description,
  attendeesQtd,
  capacity,
  userIsOwner,
  userIsAttendee,
  eventIdIsLoading,
  inlineMode,
}: IProps) {
  const { width, device } = useWindowSize();
  const dispatch = useDispatch();

  const sizeCard = useMemo(() => {
    if (inlineMode && device === ENUMDevices.isDesktop) return '100%';
    if (width > 966) return 'calc(32.3% - 64px)';
    else if (width > 660) return 'calc(49% - 64px)';
    else return '100%';
  }, [width]);

  function handleAttendAnEvent() {
    dispatch(attendAnEvent(id));
  }

  function handleUnAttendAnEvent() {
    dispatch(unAttendAnEvent(id));
  }

  const buttonIsDisabled = useMemo(() => {
    return (
      (capacity === attendeesQtd && !userIsAttendee) || eventIdIsLoading === id
    );
  }, [capacity, attendeesQtd, userIsAttendee, eventIdIsLoading, id]);

  const { label, style, onClick } = useMemo(() => {
    if (userIsOwner)
      return {
        label: 'EDIT',
        style: 'tertiary',
      };

    return userIsAttendee
      ? {
          label: 'LEAVE',
          style: 'secondary',
          onClick: handleUnAttendAnEvent,
        }
      : {
          label: 'JOIN',
          style: 'primary',
          onClick: handleAttendAnEvent,
        };
  }, [userIsOwner, userIsAttendee]);

  return !inlineMode || device === ENUMDevices.isMobile ? (
    <Card width={sizeCard} isMobile={device === ENUMDevices.isMobile}>
      <CardContent>
        <EventDate>{dayjs(startsAt).format('MMMM D, YYYY - h:mm a')}</EventDate>
        <Title>{title}</Title>
        <EventAuthor>{ownerName}</EventAuthor>
        <SubTitle>{description}</SubTitle>
      </CardContent>
      <FooterCard>
        <Attendes>
          <IconPeople width={20} height={20} color={theme.color.dark_grey} />
          <QtdAttendes>
            {attendeesQtd} of {capacity}
          </QtdAttendes>
        </Attendes>

        <Button
          colorType={style as ButtonTypes}
          disabled={buttonIsDisabled}
          onClick={onClick}
        >
          {eventIdIsLoading === id ? 'LOADING...' : label}
        </Button>
      </FooterCard>
    </Card>
  ) : (
    <InlineCard className={device === ENUMDevices.isMobile ? 'isMobile' : ''}>
      <Block width='50%'>
        <Title>{title}</Title>
        <SubTitle>{description}</SubTitle>
      </Block>
      <Block width='30%'>
        <EventAuthor>{ownerName}</EventAuthor>
        <EventDate>{dayjs(startsAt).format('MMMM D, YYYY - h:mm a')}</EventDate>
      </Block>
      <Block width='20%'>
        <QtdAttendes>
          {attendeesQtd} of {capacity}
        </QtdAttendes>

        <Button
          colorType={style as ButtonTypes}
          disabled={buttonIsDisabled}
          onClick={onClick}
        >
          {eventIdIsLoading === id ? 'LOADING...' : label}
        </Button>
      </Block>
    </InlineCard>
  );
}

export default EventCard;
