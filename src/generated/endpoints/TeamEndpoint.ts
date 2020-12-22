import {ChinoEndpoint} from "@phinxlab/chino-sdk";
import { TeamDAO } from "../orm/dao";
import { Team } from "../orm/entities";

export class TeamEndpoint extends ChinoEndpoint<Team> {

    constructor() {
        super(TeamDAO.entity.toLowerCase(),'/public/'+TeamDAO.entity.toLowerCase(),TeamDAO);
    }

}