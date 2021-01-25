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
    this.email = user.email;
    this.name = user.name;
  }
}

export class UserStrategyFactory extends ChinoUserFactory {
  async findByID(id: string): Promise<ChinoUser> {
    const [account] = await UserDAO.query().equals('id', id).run();

    if (!account) throw new Error("Account doesn't exist");

    return new UserStrategy(account);
  }

  async findByNick(nick: string): Promise<ChinoUser> {
    throw new Error('Method not implemented.');
  }

  async findByUsername(username: string): Promise<ChinoUser> {
    throw new Error('Method not implemented.');
  }

  async findByEmail(email: string): Promise<ChinoUser> {
    const [account] = await UserDAO.query().equals('email', email).run();

    if (!account) throw new Error("Account doesn't exist");

    return new UserStrategy(account);
  }

  findByGroupID(id: string): Promise<ChinoGroup> {
    throw new Error('Method not implemented.');
  }

  async findByGroupName(name: string): Promise<ChinoGroup> {
    throw new Error('Methods not implemented');
  }

  getValidationMethod(): ChinoValidationMethod {
    return ChinoValidationMethod.EMAIL;
  }
}
