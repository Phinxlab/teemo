import { ChinoGroup, ChinoUser, ChinoUserFactory, ChinoValidationMethod } from '@phinxlab/chino-sdk';
import { UserDAO } from '../generated/orm/dao';
import { User } from '../generated/orm/entities';
/**
 *  WHERE => User is your entities user strategy and UserDAO is this Dao
 */

class UserStrategy extends ChinoUser {
  constructor(user: User) {
    super();
    this.id = user.id.toString();
  }
}

export class UserStrategyFactory extends ChinoUserFactory {
  async findByID(id: string): Promise<ChinoUser> {
    const [account] = await UserDAO.query().equals('user_id', id).run();

    if (!account) throw new Error('Account is not exists');

    return new UserStrategy(account);
  }

  async findByNick(nick: string): Promise<ChinoUser> {
    throw new Error('Method not implemented.');
  }

  async findByUsername(username: string): Promise<ChinoUser> {
    throw new Error('Method not implemented.');
  }

  findByEmail(email: string): Promise<ChinoUser> {
    throw new Error('Method not implemented.');
  }

  findByGroupID(id: string): Promise<ChinoGroup> {
    throw new Error('Method not implemented.');
  }

  async findByGroupName(name: string): Promise<ChinoGroup> {
    throw new Error('Methods not implemented');
  }

  getValidationMethod(): ChinoValidationMethod {
    return ChinoValidationMethod.USERNAME;
  }
}
