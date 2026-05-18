"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Transaction extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Transaction.associate = function (models) {
        Transaction.belongsTo(models.User, { foreignKey: "user_id" });
      };
    }
  }
  Transaction.init(
    {
      user_id: DataTypes.INTEGER,
      amount: DataTypes.DECIMAL,
      category: DataTypes.STRING,
      type: DataTypes.STRING,
      date: DataTypes.DATEONLY,
    },
    {
      sequelize,
      modelName: "Transaction",
    },
  );
  return Transaction;
};
