import {express} from "express";
import {registereEvtol,checkEvtolforFlightl,checkEvtolAvailability,checkEvtolBatteryLevel}
const evtoRoute = express.Router();
evtoRoute.post('/register',registereEvtol)
evtoRoute.post('/flight',checkEvtolforFlight)
evtoRoute.post('checkevtolavailable',checkEvtolAvailability)
evtoRoute.post('checkevtolbattery',checkEvtolBatteryLevel)

export default evtoRoute;