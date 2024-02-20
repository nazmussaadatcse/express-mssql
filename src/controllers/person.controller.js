import catchAsync from "../libs/catchasync.lib.js";
import personService from "../services/person.service.js";
import { UserDTO } from "../dto/dto.js";

const getAllPersons = catchAsync(async (req, res, next) => {
    try {
        var persons = await personService.getAllPerson();
        console.log(persons)
        // return persons;
        return res.status(200).json(persons);
    } catch (error) {
        console.log(error);
        return res.status(500).json({ statusCode: 500, error: "Something went wrong" });
    }
})

const postOnePerson = catchAsync(async (req, res, next) => {
    try {

        const person = new UserDTO({
            name: req.body.name,
            email: req.body.email,
            status: req.body.status,
            role: req.body.role
        })


        var persons = await personService.postOnePerson(person);
        console.log('persons=========', persons)
        // console.log('res.status', res.status)
        // return persons;
        return res.status(200).json(persons);
    } catch (error) {
        console.log(error);
        return res.status(500).json({ statusCode: 500, error: "Something went wrong" });
    }
})

const deleteOnePerson = catchAsync(async (req, res, next) => {
    try {
        const personId = req.params.id;

        var persons = await personService.deleteSinglePerson(personId);
        console.log(persons)
        // return persons;
        return res.status(200).json(persons);
    } catch (error) {
        console.log(error);
        return res.status(500).json({ statusCode: 500, error: "Something went wrong" });
    }
})


const pendingPerson = catchAsync(async (req, res, next) => {
    try {
        const personId = req.params.id;

        var persons = await personService.pendingUser(personId);
        console.log(persons)
        // return persons;
        return res.status(200).json(persons);
    } catch (error) {
        console.log(error);
        return res.status(500).json({ statusCode: 500, error: "Something went wrong" });
    }
})

const personToAdmin = catchAsync(async (req, res, next) => {
    try {
        const personId = req.params.id;

        var persons = await personService.userToAdmin(personId);
        console.log(persons)
        // return persons;
        return res.status(200).json(persons);
    } catch (error) {
        console.log(error);
        return res.status(500).json({ statusCode: 500, error: "Something went wrong" });
    }
})



export default {
    getAllPersons,
    postOnePerson,
    deleteOnePerson,
    pendingPerson,
    personToAdmin
}