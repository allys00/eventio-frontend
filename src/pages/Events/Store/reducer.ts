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
  ASYNC_CREATE_EVENT = '@EVENTS_ASYNC_CREATE_EVENT',
  CHANGE_LOADING_EDIT_EVENT = '@EVENTS_CHANGE_LOADING_EDIT_EVENT',
  CHANGE_EVENT = '@EVENTS_CHANGE_EVENT',
  CHANGE_EVENT_EDIT_MODAL = '@EVENTS_CHANGE_EVENT_EDIT_MODAL',
  CHANGE_EVENT_EDIT_ERROR = '@EVENTS_CHANGE_EVENT_EDIT_ERROR',
}

const INITIAL_STATE = {
  loading: false,
  eventEditLoading: false,
  eventIdIsLoading: '',
  filterType: ENUMFilterType.ALL as ENUMFilterType,
  events: [] as IEvent[],
  eventEdit: {
    title: '',
    description: '',
    date: '',
    time: '',
    capacity: 0,
  },
  eventEditModal: false,
  eventEditError: '',
};

export type IEventState = typeof INITIAL_STATE;
export type IEditEvent = typeof INITIAL_STATE.eventEdit;

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

    case EVENTS_ACTIONS.CHANGE_LOADING_EDIT_EVENT:
      return { ...state, eventEditLoading: payload.eventEditLoading };

    case EVENTS_ACTIONS.CHANGE_EVENT_EDIT_MODAL:
      return { ...state, eventEditModal: payload.eventEditModal };

    case EVENTS_ACTIONS.CHANGE_EVENT_EDIT_ERROR:
      return { ...state, eventEditError: payload.eventEditError };

    case EVENTS_ACTIONS.CHANGE_EVENT:
      return {
        ...state,
        eventEdit: { ...state.eventEdit, ...payload.eventEdit },
      };

    default:
      return state;
  }
};
