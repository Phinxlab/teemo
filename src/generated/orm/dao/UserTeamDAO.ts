import { ChinoDAO } from '@phinxlab/chino-sdk';
import { UserTeam } from '../entities';

class UserTeamDAO extends ChinoDAO<UserTeam> {
  constructor() {
    super(UserTeam, 'userteam');
  }
}
const i: UserTeamDAO = new UserTeamDAO();
export { i as UserTeamDAO };
