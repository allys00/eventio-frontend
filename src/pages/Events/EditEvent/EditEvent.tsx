import React, { useCallback, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from '../../../components/Button/Button';
import DatePicker from '../../../components/DatePicker/DatePicker';
import Input, { IInputChange } from '../../../components/Input/Input';
import { SubTitle } from '../../../components/Subtitle/Subtitle';
import TimePicker from '../../../components/TimePicker/TimePicker';
import { Title } from '../../../components/Title/Title';
import { IStore } from '../../../config/Store/mainReducer';
import { theme } from '../../../styles/theme';
import { changeEvent, createEvent } from '../Store/actions';
import {
  EditEventCard,
  EditEventContainer,
  EditEventForm,
} from './EditEventStyle';

function EditEvent() {
  const { eventEdit, eventEditLoading, eventEditError } = useSelector(
    ({ events }: IStore) => ({
      eventEdit: events.eventEdit,
      eventEditLoading: events.eventEditLoading,
      eventEditError: events.eventEditError,
    })
  );
  const dispatch = useDispatch();
  const [formValidInputs, setFormValidInputs] = useState({
    title: false,
    description: false,
    date: false,
    time: false,
    capacity: false,
  });

  const changeEventEdit = useCallback(({ value, id }: IInputChange): void => {
    if (id === 'capacity') {
      value = Number(value);
    }
    dispatch(
      changeEvent({
        [id]: value,
      })
    );
  }, []);

  const changeFormValidInputs = (isValid: boolean, key: string) => {
    const newFormValidInputs = { ...formValidInputs, [key]: isValid };
    setFormValidInputs(newFormValidInputs);
  };

  const formIsValid = useMemo(() => {
    for (const item of Object.values(formValidInputs)) {
      if (!item) return false;
    }
    return true;
  }, [formValidInputs]);

  const handleCreateEvent = useCallback(() => {
    dispatch(createEvent(eventEdit));
  }, [eventEdit]);
  return (
    <EditEventContainer>
      <EditEventCard>
        <Title fontSize={28}>Create new event</Title>
        {eventEditError ? (
          <SubTitle fontSize={18} color={theme.actions.secondary.background}>
            {eventEditError}
          </SubTitle>
        ) : (
          <SubTitle fontSize={18}>Enter your details below</SubTitle>
        )}
        <EditEventForm>
          <Input
            placeholder='Title'
            value={eventEdit.title}
            id='title'
            onChange={changeEventEdit}
            checkInputIsValid={changeFormValidInputs}
            required
          />
          <Input
            placeholder='Description'
            value={eventEdit.description}
            id='description'
            onChange={changeEventEdit}
            checkInputIsValid={changeFormValidInputs}
            required
          />
          <DatePicker
            placeholder='Date'
            value={eventEdit.date}
            id='date'
            onChange={changeEventEdit}
            checkInputIsValid={changeFormValidInputs}
            required
          />
          <TimePicker
            placeholder='Time'
            value={eventEdit.time}
            id='time'
            onChange={changeEventEdit}
            checkInputIsValid={changeFormValidInputs}
            required
          />
          <Input
            mask='99999'
            placeholder='Capacity'
            value={eventEdit.capacity}
            id='capacity'
            onChange={changeEventEdit}
            checkInputIsValid={changeFormValidInputs}
            required
          />
        </EditEventForm>
        <Button
          colorType='primary'
          onClick={handleCreateEvent}
          disabled={!formIsValid || eventEditLoading}
        >
          {eventEditLoading ? 'Creating event' : 'Create new event'}
        </Button>
      </EditEventCard>
    </EditEventContainer>
  );
}

export default EditEvent;
