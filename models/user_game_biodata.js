"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class user_game_biodata extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }

    static createNew({ user_id, name, bio }) {
      return this.create({ user_id, name, bio });
    }
  }
  user_game_biodata.init(
    {
      user_id: DataTypes.UUID,
      name: DataTypes.STRING,
      bio: DataTypes.TEXT,
    },
    {
      sequelize,
      paranoid: true,
      freezeTableName: true,
      modelName: "user_game_biodata",
    }
  );
  return user_game_biodata;
};
