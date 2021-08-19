import { IAction } from '../../../models/action.model';
import { IEvent } from '../../../models/event.model';
import { ENUMFilterType } from '../Components/EventsHeader/EventsHeader';

export enum EVENTS_ACTIONS {
  ASYNC_GET_ALL_EVENTS = '@EVENTS_ASYNC_GET_ALL_EVENTS',
  CHANGE_LOADING = '@EVENTS_CHANGE_LOADING',
  CHANGE_EVENTS = '@EVENTS_CHANGE_EVENTS',
  CHANGE_EVENT_FILTER = '@EVENTS_CHANGE_EVENT_FILTER',
}

const INITIAL_STATE = {
  loading: false,
  filterType: 'all' as ENUMFilterType,
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

    default:
      return state;
  }
};
