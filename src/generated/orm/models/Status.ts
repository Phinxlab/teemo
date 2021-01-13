import { StatusType } from './StatusType';
import { Team } from './Team';
import { User } from './User';

export interface Status {
  id: number;
  description: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date;
  statusType: StatusType;
  team: Team;
  user: User;
}
