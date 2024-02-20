import db from "../config/db.js";

const getAllPerson = async () => {
  return await db.persons.findAll();
};

const postOnePerson = async (person) => {
  console.log(person);
  return await db.persons.create(person);
};

const deleteSinglePerson = async (personId) => {
  return await db.persons.destroy({
    where: {
      id: personId
    }
  },);
};


const pendingUser = async (personId) => {
  return await db.persons.update(
    {
      status: 'approve'
    },
    {
      where: {
        ID: personId
      }
    }
  );
};

const userToAdmin = async (personId) => {
  return await db.persons.update(
    {
      role: 'admin'
    },
    {
      where: {
        ID: personId
      }
    }
  );
};



export default {
  getAllPerson,
  postOnePerson,
  deleteSinglePerson,
  pendingUser,
  userToAdmin
}