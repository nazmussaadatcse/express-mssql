import db from "../config/db.js";

const postOneLunch = async (lunch) => {
    console.log(lunch);
    return await db.lunches.create(lunch);
};

const updateGuestLunch = async (guestLunchUpdate, lunchId) => {
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
                    id: lunchId,
                },
            }
        );

        console.log(updatedLunch);

        //'findByPk' to find by primary key
        const updatedRecord = await db.lunches.findByPk(lunchId);
        return updatedRecord;
    } catch (error) {
        throw error;
    }
};



export default {
    postOneLunch,
    updateGuestLunch
}