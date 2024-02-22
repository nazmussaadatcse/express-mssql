import db from "../config/db.js";

const postOneLunch = async (lunch) => {
    console.log(lunch);
    return await db.lunches.create(lunch);
};

const allLunches = async () => {
    return await db.lunches.findAll();
};

const updateGuestLunch = async (guestLunchUpdate) => {
    try {
        const updatedLunch = await db.lunches.update(
            {
                name: guestLunchUpdate.name,
                note: guestLunchUpdate.note,
                email: guestLunchUpdate.email,
                bookBy: guestLunchUpdate.bookBy,
                type: guestLunchUpdate.type,
                lunchQuantity: guestLunchUpdate.lunchQuantity,
            },
            {
                where: {
                    type: 'guest',
                },
            }
        );

        console.log(updatedLunch);

        //'findByPk' to find by primary key
        const updatedRecord = await db.lunches.findOne({
            where: {
                type: 'guest',
            },
        });
        return updatedRecord;
    } catch (error) {
        throw error;
    }
};



export default {
    allLunches,
    postOneLunch,
    updateGuestLunch
}