"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class boards extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  boards.init(
    {
      grp_code: DataTypes.STRING,
      cust_id: DataTypes.STRING,
      put_seri_no: DataTypes.INTEGER,
      put_prog_stat_code: DataTypes.STRING,
      secr_numb: DataTypes.STRING,
      cust_name: DataTypes.STRING,
      put_titl_cont: DataTypes.STRING,
      put_deta_cont: DataTypes.STRING,
      file_text_kind_code: DataTypes.STRING,
      file_name: DataTypes.STRING,
      file_stor_loca_cont: DataTypes.STRING,
      list_count: DataTypes.INTEGER,
      firs_crea_date_time: DataTypes.INTEGER,
      firs_crea_empl: DataTypes.STRING,
      last_edit_date_time: DataTypes.INTEGER,
      last_edit_empl: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "boards",
    }
  );
  return boards;
};
