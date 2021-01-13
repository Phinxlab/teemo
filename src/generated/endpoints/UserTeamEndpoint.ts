import { ChinoEndpoint } from '@phinxlab/chino-sdk';
import { UserTeamDAO } from '../orm/dao';
import { UserTeam } from '../orm/entities';

export class UserTeamEndpoint extends ChinoEndpoint<UserTeam> {
  constructor() {
    super(UserTeamDAO.entity.toLowerCase(), '/public/' + UserTeamDAO.entity.toLowerCase(), UserTeamDAO);
  }
}
