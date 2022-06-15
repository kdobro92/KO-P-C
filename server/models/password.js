'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class password extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  password.init({
    secr_numb_seri_no: DataTypes.INTEGER,
    grp_code: DataTypes.STRING,
    cust_id: DataTypes.STRING,
    secr_numb: DataTypes.STRING,
    use_yn: DataTypes.STRING,
    chan_date_time: DataTypes.INTEGER,
    chan_chan: DataTypes.STRING,
    secu_veri_chan: DataTypes.STRING,
    firs_crea_date_time: DataTypes.INTEGER,
    firs_crea_empl: DataTypes.STRING,
    last_edit_date_time: DataTypes.INTEGER,
    last_edit_empl: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'password',
  });
  return password;
};