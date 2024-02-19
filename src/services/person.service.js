import db from "../config/db.js";

const getAll = async () => {
  return await db.persons.findAll();
};

const postOne = async (person) => {
  console.log(person);
  return await db.persons.create(person);
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