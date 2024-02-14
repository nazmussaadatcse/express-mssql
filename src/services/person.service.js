import db from "../config/db.js";

export const getAll = async () => {
  return await db.persons.findAll();
};