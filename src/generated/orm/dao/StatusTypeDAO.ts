import { ChinoDAO } from '@phinxlab/chino-sdk';
import { StatusType } from '../entities';

class StatusTypeDAO extends ChinoDAO<StatusType> {
  constructor() {
    super(StatusType, 'statustype');
  }
}
const i: StatusTypeDAO = new StatusTypeDAO();
export { i as StatusTypeDAO };
