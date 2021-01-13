import { Team } from './Team';
import { User } from './User';

export interface UserTeam {
  roleUser: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date;

  team: Team;
  user: User;
}
