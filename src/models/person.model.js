import { DataTypes } from "sequelize";


function model(sequelize) {
  const attributes = {
    ID: { type: DataTypes.INTEGER, allowNull: false, autoIncrement: true, primaryKey: true, },
    name: { type: DataTypes.STRING(30), allowNull: false },
    status: { type: DataTypes.STRING(30), allowNull: false },
    role: { type: DataTypes.STRING(30), allowNull: false },
    email: { type: DataTypes.STRING(30), allowNull: true },
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