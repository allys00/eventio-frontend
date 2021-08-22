import { ENV } from '../../enviroment/enviroment';

export const URLS = {
  LOGIN: `${ENV.API_BASE}/auth/native`,
  USERS: `${ENV.API_BASE}/users`,  

  EVENTS: `${ENV.API_BASE}/events`,  
  UNATTEND_AN_EVENT: (id: string) => `${ENV.API_BASE}/events/${id}/attendees/me`,
  ATTEND_AN_EVENT: (id: string) => `${ENV.API_BASE}/events/${id}/attendees/me`

};
