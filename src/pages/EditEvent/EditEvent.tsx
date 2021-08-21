import React from 'react';
import { Button } from '../../components/Button/Button';
import DatePicker from '../../components/DatePicker/DatePicker';
import Input from '../../components/Input/Input';
import { SubTitle } from '../../components/Subtitle/Subtitle';
import { Title } from '../../components/Title/Title';
import {
  EditEventCard,
  EditEventContainer,
  EditEventForm,
} from './EditEventStyle';

function EditEvent() {
  return (
    <EditEventContainer>
      <EditEventCard>
        <Title fontSize={28}>Create new event</Title>
        <SubTitle>Enter details below.</SubTitle>
        <EditEventForm>
          <Input
            placeholder='Title'
            value={''}
            id='title'
            onChange={console.log}
            required
          />
          <Input
            placeholder='Description'
            value={''}
            id='title'
            onChange={console.log}
            required
          />
          <Input
            placeholder='Date'
            value={''}
            id='Date'
            type='date'
            onChange={console.log}
            required
          />
          <Input
            placeholder='Time'
            value={''}
            id='Time'
            type='time'
            onChange={console.log}
            required
          />
          <Input
            placeholder='Capacity'
            value={''}
            id='capacity'
            onChange={console.log}
            required
          />

          <Button 
            colorType="primary"
          onClick={console.log}>Create New Event</Button>
        </EditEventForm>
      </EditEventCard>
    </EditEventContainer>
  );
}

export default EditEvent;
