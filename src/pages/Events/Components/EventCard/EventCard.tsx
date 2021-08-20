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
  Card,
  EventAuthor,
  EventDate,
  FooterCard,
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
}: IProps) {
  const { width, device } = useWindowSize();
  const dispatch = useDispatch()

  const sizeCard = useMemo(() => {
    if (width > 1000) return 'calc(33.3% - 80px)';
    else if (width > 660) return 'calc(50% - 72px)';
    else return '100%';
  }, [width]);

  function handleAttendAnEvent(){
    dispatch(attendAnEvent(id))
  }

  function handleUnAttendAnEvent(){
    console.log('oiiii')
    dispatch(unAttendAnEvent(id))
  }

  const { label, style, onClick } = useMemo(() => {
    if (userIsOwner)
      return {
        label: 'EDIT',
        style: 'tertiary'
      };

    return userIsAttendee
      ? {
          label: 'LEAVE',
          style: 'secondary',
          onClick: handleUnAttendAnEvent
        }
      : {
          label: 'JOIN',
          style: 'primary',
          onClick: handleAttendAnEvent
        };
  }, [status]);

  return (
    <Card width={sizeCard} isMobile={device === ENUMDevices.isMobile}>
      <EventDate>{dayjs(startsAt).format('MMMM D, YYYY - h:mm a')}</EventDate>
      <Title>{title}</Title>
      <EventAuthor>{ownerName}</EventAuthor>
      <SubTitle>{description}</SubTitle>
      <FooterCard>
        <Attendes>
          <IconPeople width={20} height={20} color={theme.color.dark_grey} />
          <QtdAttendes>
            {attendeesQtd} of {capacity}
          </QtdAttendes>
        </Attendes>

        <Button
          colorType={style as ButtonTypes}
          disabled={capacity === attendeesQtd && !userIsAttendee}
          onClick={onClick}
        >
          {label}
        </Button>
      </FooterCard>
    </Card>
  );
}

export default EventCard;
