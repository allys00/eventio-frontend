import { IUser } from './user.model';

export interface IEvent extends IEventBase{
  id: string;
  owner: IUser;
  attendees: IUser[];
  createdAt: string;
  updatedAt: string;
}

export interface IEventBase {
  title: string;
  description: string;
  startsAt: string;
  capacity: number;
}
