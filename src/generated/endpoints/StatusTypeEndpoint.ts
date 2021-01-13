import { ChinoEndpoint } from '@phinxlab/chino-sdk';
import { StatusTypeDAO } from '../orm/dao';
import { StatusType } from '../orm/entities';

export class StatusTypeEndpoint extends ChinoEndpoint<StatusType> {
  constructor() {
    super(StatusTypeDAO.entity.toLowerCase(), '/public/' + StatusTypeDAO.entity.toLowerCase(), StatusTypeDAO);
  }
}
