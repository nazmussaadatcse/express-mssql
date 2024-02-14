import { DataTypes } from "sequelize";


function model(sequelize) {
  const attributes = {
    ID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    Name: { type: DataTypes.STRING(30), allowNull: false },
    GenderID: { type: DataTypes.INTEGER, allowNull: true },
    createdAt: { type: DataTypes.DATE, allowNull: false, defaultValue: DataTypes.NOW },
    updatedAt: { type: DataTypes.DATE, allowNull: false, defaultValue: DataTypes.NOW }
  };

  const options = {
    freezeTableName: true, // Prevent Sequelize from pluralizing the table name
    timestamps: false,      // Disable createdAt and updatedAt columns
    schema: 'dbo'
  };

  // Define the model without automatically creating the table
  return sequelize.define("persons", attributes, options);
}
export default model;