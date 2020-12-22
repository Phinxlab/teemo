import {ChinoDAO} from "@phinxlab/chino-sdk";
import {Status} from "../entities";

class StatusDAO extends ChinoDAO<Status> {
    constructor() {
        super(Status,'status');
    }
}
const i:StatusDAO = new StatusDAO();
export {i as StatusDAO};