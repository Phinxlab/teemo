import { ChinoDAO } from '@phinxlab/chino-sdk';
import { Team } from '../entities';

class TeamDAO extends ChinoDAO<Team> {
  constructor() {
    super(Team, 'team');
  }
}
const i: TeamDAO = new TeamDAO();
export { i as TeamDAO };
