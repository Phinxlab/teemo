import { ChinoEndpoint } from '@phinxlab/chino-sdk';
import { UserDAO } from '../orm/dao';
import { User } from '../orm/entities';

export class UserEndpoint extends ChinoEndpoint<User> {
  constructor() {
    super(UserDAO.entity.toLowerCase(), '/public/' + UserDAO.entity.toLowerCase(), UserDAO);
  }
}
