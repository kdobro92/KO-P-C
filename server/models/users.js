"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  users.init(
    {
      memb_seri_no: DataTypes.INTEGER,
      grop_code: DataTypes.STRING,
      cust_id: DataTypes.STRING,
      stat_code: DataTypes.STRING,
      cust_numb_divi_code: DataTypes.STRING,
      memb_regi_divi_code: DataTypes.STRING,
      cell_id_yn: DataTypes.STRING,
      cust_firs_name: DataTypes.STRING,
      cust_last_name: DataTypes.STRING,
      yiny_divi_code: DataTypes.STRING,
      birt_day: DataTypes.STRING,
      sex: DataTypes.STRING,
      nati_code: DataTypes.STRING,
      emai_addr: DataTypes.STRING,
      emai_data: DataTypes.STRING,
      home_page: DataTypes.STRING,
      cell_numb: DataTypes.STRING,
      rela_phon_numb_use_yn: DataTypes.STRING,
      rela_phon_numb: DataTypes.STRING,
      cont_poss_time_code: DataTypes.STRING,
      cont_star_time: DataTypes.STRING,
      diss_cate_code: DataTypes.STRING,
      firs_crea_date_time: DataTypes.INTEGER,
      firs_crea_empl: DataTypes.STRING,
      last_edit_date_time: DataTypes.INTEGER,
      last_edit_empl: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "users",
    }
  );
  return users;
};
