import catchAsync from "../libs/catchasync.lib.js";
import { getAll } from "../services/person.service.js";

const getAllPersons = catchAsync(async (req, res, next) => {
    try {
        var persons = await getAll();
        console.log(persons)
        // return persons;
        return res.status(200).json(persons);
    } catch (error) {
        console.log(error);
        return res.status(500).json({ statusCode: 500, error: "Something went wrong" });
    }
})

export default {
    getAllPersons
}