import {ChinoEndpoint} from "@phinxlab/chino-sdk";
import { StatusDAO } from "../orm/dao";
import { Status } from "../orm/entities";

export class StatusEndpoint extends ChinoEndpoint<Status> {

    constructor() {
        super(StatusDAO.entity.toLowerCase(),'/public/'+StatusDAO.entity.toLowerCase(),StatusDAO);
    }

}