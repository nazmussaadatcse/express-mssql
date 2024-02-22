import catchAsync from "../libs/catchasync.lib.js";
import lunchService from "../services/lunches.service.js";
import { SingleLunchDTO } from "../dto/dto.js";


const postSingleLunch = catchAsync(async (req, res, next) => {
    try {

        const lunch = new SingleLunchDTO({
            name: req.body.name,
            note: req.body.note,
            email: req.body.email,
            bookBy: req.body.bookBy,
            type: req.body.type,
            lunchQuantity: req.body.lunchQuantity,
        })


        var lunches = await lunchService.postOneLunch(lunch);
        console.log('lunches=========', lunches)
        // console.log('res.status', res.status)
        // return lunches;
        return res.status(200).json(lunches);
    } catch (error) {
        console.log(error);
        return res.status(500).json({ statusCode: 500, error: "Something went wrong" });
    }
})


const updateSingleLunch = catchAsync(async (req, res, next) => {
    try {

        const lunchId = req.params.id;

        const guestLunchUpdate = new SingleLunchDTO({
            name: req.body.name,
            note: req.body.note,
            email: req.body.email,
            bookBy: req.body.bookBy,
            type: req.body.type,
            lunchQuantity: req.body.lunchQuantity,
        })

        var persons = await lunchService.updateGuestLunch(guestLunchUpdate, lunchId);
        console.log(persons)
        // return persons;
        return res.status(200).json(persons);
    } catch (error) {
        console.log(error);
        return res.status(500).json({ statusCode: 500, error: "Something went wrong" });
    }
})





export default {
    postSingleLunch,
    updateSingleLunch
}