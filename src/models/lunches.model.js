import { DataTypes } from "sequelize";


function model(sequelize) {
    const attributes = {
        ID: { type: DataTypes.INTEGER, allowNull: false, autoIncrement: true, primaryKey: true, },
        name: { type: DataTypes.STRING(30), allowNull: false },
        note: { type: DataTypes.STRING(30), allowNull: false },
        email: { type: DataTypes.STRING(30), allowNull: false },
        bookBy: { type: DataTypes.STRING(30), allowNull: false },
        type: { type: DataTypes.STRING(30), allowNull: false },
        lunchQuantity: { type: DataTypes.INTEGER, allowNull: false }
    };

    const options = {
        freezeTableName: true, // Prevent Sequelize from pluralizing the table name
        timestamps: false,      // Disable createdAt and updatedAt columns
        schema: 'dbo'
    };

    // Define the model without automatically creating the table
    return sequelize.define("lunches", attributes, options);
}
export default model;