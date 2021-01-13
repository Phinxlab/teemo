import { ChinoDAO } from '@phinxlab/chino-sdk';
import { User } from '../entities';

class UserDAO extends ChinoDAO<User> {
  constructor() {
    super(User, 'user');
  }
}
const i: UserDAO = new UserDAO();
export { i as UserDAO };
