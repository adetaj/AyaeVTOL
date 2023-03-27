
import Evtolmodel from "../evtomodel/evtol.js";
import Medicationmodel from "../evtomodel/medication.js";
export const registereEvtol = asyc(req, res)=>{
    const { serial_no, model, evtolweight, battery, state } = req.body
    try {
        const foundEvtol = await Evtolmodel.findone({serial_no})
        if (foundEvtol) {
            res.json({
                status: "error",
                data: "EVTOL Already Registered"
            })
            const evtolReg = await Evtolmodel.create({
                serial_no,
                model,
                evtolweight,
                state
            })
            res.json({
                status: "Success",
                data: "Evtol successfully created"
            });
        }
    } catch (error) {
        res.json(error.message)

    }
}

export checkEvtolAvailability = async (req, res) => {
    const {serial_no, model, evtolweight, battery, state} = req.params
    try {
        const foundEvtol = await Evtolmodel.findone({state})
        if (state === idle) {
            res.json({
                status: "success",
                data: "EVTOL is available for loading"
            });
        }
    }catch(error) {
    res.json(error.message)
     }
}

export checkEvtolforFlight = async (req, res) => {
    const {serial_no, model, evtolweight, battery, state } = req.params
         try{
             const evtolload = await Evtolmodel.findone({
                        serial_no,
                        model,
                        evtolweight,
                        medweight
                    })
                    if (medweight >= max(evtolweight)) {
                        res.json({
                            status: error,
                            data: "eVTOL movement denied"
                        });
                    }
                }catch (error){
                    res.json(error.message)
                  }
        }
       
export checkEvtolBatteryLevel = asyc(req, res)=>{
    const {serial_no, model, battery} = req.params
    try{
    const evtolbattery = await Evtolmodel.findone({battery})
                           
            if(battery <= 0.25){
            res.json({
            status: error,
            data: "eVTOL loading disallow"
            });
       }
    }catch(error){
    res.json(error.message)
    }
}

