const { DataTypes, Model } = require("sequelize");
const sequelize = require("../sequelize");

class WordIndex extends Model {}

WordIndex.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    word: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
  },
  {
    sequelize,
    modelName: "wordIndex",
    tableName: "wordIndex",
    timestamps: false,
  }
);

module.exports = WordIndex;
