import { User } from './User';

export interface Team {
  id: number;
  description: string;
  teamName: string;
  standupStart: string;
  standupEnd: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date;
  leader: User;
}
