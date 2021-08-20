import { IAction } from '../../../models/action.model';
import { IEvent } from '../../../models/event.model';
import { ENUMFilterType } from '../Components/EventsHeader/EventsHeader';

export enum EVENTS_ACTIONS {
  ASYNC_GET_ALL_EVENTS = '@EVENTS_ASYNC_GET_ALL_EVENTS',
  CHANGE_LOADING = '@EVENTS_CHANGE_LOADING',
  CHANGE_LOADING_EVENT_ACTION = '@EVENTS_CHANGE_LOADING_EVENT_ACTION',
  CHANGE_EVENTS = '@EVENTS_CHANGE_EVENTS',
  CHANGE_EVENT_FILTER = '@EVENTS_CHANGE_EVENT_FILTER',
  ASYNC_ATTEND_AN_EVENT = '@EVENTS_ASYNC_ATTEND_AN_EVENT',
  ASYNC_UNATTEND_AN_EVENT = '@EVENTS_ASYNC_UNATTEND_AN_EVENT',
}

const INITIAL_STATE = {
  loading: false,
  eventIdIsLoading: '',
  filterType: ENUMFilterType.ALL as ENUMFilterType,
  events: [] as IEvent[],
};

export type IEventState = typeof INITIAL_STATE;

export default (
  state = INITIAL_STATE,
  action: IAction<EVENTS_ACTIONS, IEventState>
): IEventState => {
  const { type, payload } = action;
  switch (type) {
    case EVENTS_ACTIONS.CHANGE_LOADING:
      return { ...state, loading: payload.loading };

    case EVENTS_ACTIONS.CHANGE_EVENTS:
      return { ...state, events: [...payload.events] };

    case EVENTS_ACTIONS.CHANGE_EVENT_FILTER:
      return { ...state, filterType: payload.filterType };

    case EVENTS_ACTIONS.CHANGE_LOADING_EVENT_ACTION:
      return { ...state, eventIdIsLoading: payload.eventIdIsLoading };

    default:
      return state;
  }
};
