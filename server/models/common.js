"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class common extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  common.init(
    {
      grp_code: DataTypes.STRING,
      majo_code: DataTypes.STRING,
      midd_code: DataTypes.STRING,
      majo_titl: DataTypes.STRING,
      smal_name: DataTypes.STRING,
      majo_comp_titl: DataTypes.STRING,
      midd_comp_titl: DataTypes.STRING,
      use_yn: DataTypes.STRING,
      out_seri: DataTypes.INTEGER,
      firs_crea_empl: DataTypes.STRING,
      last_edit_date_time: DataTypes.INTEGER,
      last_edit_empl: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "common",
    }
  );
  return common;
};
