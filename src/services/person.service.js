import db from "../config/db.js";

const getAll = async () => {
  return await db.persons.findAll();
};

const postOne = async () => {
  return await db.persons.create({
    Name: 'Ms Alice',
    GenderID: 123,
  },);
};

const deleteOne = async () => {
  return await db.persons.destroy({
    where: {
      id: 1
    }
  },);
};


export default {
  getAll,
  postOne,
  deleteOne
}