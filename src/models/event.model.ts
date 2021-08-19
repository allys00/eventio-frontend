import { IUser } from './user.model';

export interface IEvent {
  id: string;
  title: string;
  description: string;
  startsAt: string;
  capacity: number;
  owner: IUser;
  attendees: IUser[];
  createdAt: string;
  updatedAt: string;
}
